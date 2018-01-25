import { authCallback, isAuthValid, getOAuthService, get3PAuthorizationUrls, logRedirectUri, resetAuth } from './auth'
import { fixedSchema } from './schema'
import { ScriptRequest } from './interfaces'
import { get, invalidFields, actionFields, breakdowns, actionBreakdowns } from './utils'
// import { FB_ACCT_ID } from '../../keys'

// Dev only:
function isAdminUser() {
    return true
}

// Production
function getAuthType() {
    return {
        "type": "OAUTH2"
    }
}

function getConfig(request: ScriptRequest) {
    return {
        configParams: [
            {
                name: 'AccountNumber',
                displayName: 'Ad Account Number',
                helpText: 'Your Facebook Ad Account Number',
                placeholder: '123456'
            }
        ],
        dateRangeRequired: true
    }
}

function getSchema(request: ScriptRequest) {
    return {
        schema: fixedSchema
    }
}

function getData(request: ScriptRequest) {
    
    /*const request = {
        configParams: {
            AccountNumber: FB_ACCT_ID
        },
        dateRange: {
            startDate: '2017-11-01',
            endDate: '2017-11-20'
        },
        fields: [
            {
                name: 'clicks'
            }, {
                name: 'impressions'
            }, {
                name: 'device_platform'
            }
        ]
    }*/

    const accountNumber = request.configParams.AccountNumber // FB_ACCT_ID
    const timeRange = {
        since: request.dateRange.startDate,
        until: request.dateRange.endDate
    }

    const fields = request.fields
    const includedFields = [
        'clicks',
        'unique_clicks',
        'inline_link_clicks',
        'unique_inline_link_clicks',
        'reach',
        'impressions',
        'spend',
    ]
    let dataSchema: any[] = []
    let requestOptions = {
        time_range: JSON.stringify(timeRange),
        level: 'ad',
        fields: includedFields.join(',')
    }

    let hasDate = false;
    let hasWeek = false;
    let hasMonth = false;
    let breakdownArr: string[] = []
    let actionBreakdownArr: string[] = []

    fields.forEach(field => {
        const fieldName = field.name
        // Add time increment if date is one of the fields
        if (fieldName === 'date_start' || fieldName === 'date_stop' || fieldName === 'day' || fieldName === 'day_of_week') {
            hasDate = true
        } else if (fieldName === 'month') {
            hasMonth = true
        }

        // make sure field name won't make api call throw an error
        if (invalidFields.indexOf(fieldName) < 0 && includedFields.indexOf(fieldName) < 0 && actionFields.indexOf(fieldName) < 0) {
            requestOptions.fields = `${fieldName},${requestOptions.fields}`
        }

        // get actions if necessary
        if (actionFields.indexOf(fieldName) > -1 && requestOptions.fields.indexOf('actions') < 0) {
            requestOptions.fields = `actions,${requestOptions.fields}`
        }

        // add breakdowns if necessary
        if (breakdowns.indexOf(fieldName) > -1) {
            breakdownArr.push(fieldName)
        }

        // add action breakdowns if necessary
        if (actionBreakdowns.indexOf(fieldName) > -1) {
            actionBreakdownArr.push(fieldName)
        }

        for (let i = 0; i < fixedSchema.length; i++) {
            if (fixedSchema[i].name == fieldName) {
                dataSchema.push(fixedSchema[i]);
                break;
            }
        }
    })

    if (hasDate) {
        requestOptions['time_increment'] = 1
    } else if (hasMonth) {
        requestOptions['time_increment'] = 'monthly'
    }

    if (breakdownArr.length > 0) {
        requestOptions['breakdowns'] = breakdownArr.join(',')
    }

    if (actionBreakdownArr.length > 0) {
        requestOptions['action_breakdowns'] = actionBreakdownArr.join(',')
    }

    const response = get(`act_${accountNumber}/insights`, requestOptions, getOAuthService().getAccessToken())

    const stats: any[] = []
    fetchData(response, stats)

    let rows: any[] = []
    pushData(stats, dataSchema, rows, hasDate, hasMonth)

    return {
        schema: dataSchema,
        rows: rows
    }
}

function fetchData(response, data) {
    response.data.forEach(dataPoint => data.push(dataPoint))

    if (response.paging && response.paging.next) {
        Utilities.sleep(250)
        const _response = JSON.parse(UrlFetchApp.fetch(response.paging.next).getContentText())
        fetchData(_response, data)
    }

    return data
}

function pushData(stats, dataSchema, rows, hasDate, hasMonth) {
    stats.forEach(stat => {
        let values: any = []
        dataSchema.forEach(field => {
            switch(field.name) {
                case 'date_start':
                    values.push(stat.date_start.split('-').join(''))
                    break
                case 'month':
                    values.push(stat.date_start.split('-')[1])
                    break
                case 'day':
                    values.push(stat.date_start.split('-')[2])
                    break
                case 'day_of_week':
                    const dow = new Date(stat.date_start).getDay()
                    values.push(dow.toString())
                    break
                case 'ctr':
                    values.push(parseFloat(stat[field.name]) / 100)
                    break
                case 'unique_ctr':
                    values.push(parseFloat(stat[field.name]) / 100)
                    break
                case 'inline_link_click_ctr':
                    values.push(parseFloat(stat[field.name]) / 100)
                    break
                case 'unique_inline_link_click_ctr':
                    values.push(parseFloat(stat[field.name]) / 100)
                    break
                case 'action_reaction':
                    const reactions = formatAction(stat, 'post_reaction')
                    values.push(reactions)
                    break
                case 'gender':
                    values.push(stat[field.name].charAt(0).toUpperCase() + stat[field.name].slice(1))
                default:
                    values.push(stat[field.name])
            }
        })
        rows.push({ values })
    })
}

function formatAction(stat, actionType) {
    let actions = 0
    if (stat.actions !== undefined) {
        stat.actions.forEach(action => {
            if (action.action_type === actionType) {
                actions += parseInt(action.value)
            }
        })
    }
    return actions
}