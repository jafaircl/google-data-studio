import { fixedSchema } from './schema'
import { ScriptRequest, CallData } from './interfaces'
import { formatDate, monthNameToNumber } from './utils'

function isAdminUser() {
    return Session.getActiveUser().getEmail().indexOf('healthgrades') > -1
}

function getAuthType() {
    return {
        "type": "NONE"
    }
}

function getConfig(request: ScriptRequest) {
    return {
        configParams: [
            {
                name: 'AccessKey',
                displayName: 'API Access Key',
                helpText: 'Enter the Access Key from your CTM Account Settings/API Integration. See https://www.calltrackingmetrics.com/developers/ for more information',
                placeholder: '123456'
            }, {
                name: 'SecretKey',
                displayName: 'API Secret Key',
                helpText: 'Enter the Secret Key from your CTM Account Settings/API Integration. See https://www.calltrackingmetrics.com/developers/ for more information',
                placeholder: '123456'
            }, {
                name: 'AccountId',
                displayName: 'Account Number',
                helpText: 'Enter the Call Tracking Metrics Account Number',
                placeholder: '123456'
            }
        ],
        dateRangeRequired: true
    }
}

const calculatedFields = [
    'calls_counter',
    'callers_counter',
    '30s_calls_counter',
    '30s_callers_counter',
    '30s_calls_duration',
    '30s_callers_duration',
    'lat_lng',
    'called_at',
    'month'
];

function getSchema(request: ScriptRequest) {
    return {
        schema: fixedSchema
    }
}

function getData(request: ScriptRequest) {
    const initialUrl = `https://calltrackingmetrics.com/api/v1/accounts/${request.configParams.AccountId}/calls?start_date=${request.dateRange.startDate}&end_date=${request.dateRange.endDate}&per_page=100`
    const credentials = Utilities.base64Encode(`${request.configParams.AccessKey}:${request.configParams.SecretKey}`);
    const options = {
        method: 'get',
        headers: {
            'Authorization': `Basic ${credentials}`
        }
    }
    const response = UrlFetchApp.fetch(initialUrl, options)
    const data: CallData = JSON.parse(response.getContentText())

    let dataSchema: any[] = [];
    request.fields.forEach(field => {
        for (let i = 0; i < fixedSchema.length; i++) {
            if (fixedSchema[i].name == field.name) {
                dataSchema.push(fixedSchema[i]);
                break;
            }
        }
    })

    let rows: any = []

    pushData(data.calls, dataSchema, rows)

    if (data.total_pages > 1) {
        let nextPage = data.next_page

        for (let i = 1; i < data.total_pages; i++) {
            if (data.next_page !== undefined) {
                const pageResponse = UrlFetchApp.fetch(nextPage, options)
                const page: CallData = JSON.parse(pageResponse.getContentText())

                pushData(page.calls, dataSchema, rows)

                nextPage = page.next_page
            }
        }
    }

    return {
        schema: dataSchema,
        rows: rows
    }
}

function pushData(calls, dataSchema, rows) {
    calls.forEach(call => {
        let values: any = []
        
        dataSchema.forEach(field => {
            switch(field.name) {
                case 'calls_counter':
                    values.push(1)
                    break
                case 'callers_counter':
                    if (call.is_new_caller) {
                        values.push(1)
                    } else {
                        values.push(0)
                    }
                    break
                case '30s_calls_counter':
                    if (call.talk_time > 29) {
                        values.push(1)
                    } else {
                        values.push(0)
                    }
                    break
                case '30s_calls_duration':
                    if (call.talk_time > 29) {
                        values.push(call.talk_time)
                    } else {
                        values.push(0)
                    }
                    break
                case '30s_callers_counter':
                    if (call.is_new_caller && call.talk_time > 29) {
                        values.push(1)
                    } else {
                        values.push(0)
                    }
                    break
                case '30s_callers_duration':
                    if (call.is_new_caller && call.talk_time > 29) {
                        values.push(call.talk_time)
                    } else {
                        values.push(0)
                    }
                    break
                case 'lat_lng':
                    values.push(`${call.latitude},${call.longitude}`)
                    break
                case 'called_at':
                    values.push(formatDate(call.called_at))
                    break
                case 'month':
                    values.push(monthNameToNumber(call.month))
                    break
                default:
                    values.push(call[field.name])
            }
        })

        rows.push({
            values: values
        })
    })
}
