var fixedSchema = [
    {
        name: 'id',
        label: 'Id',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'sid',
        label: 'SID',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'account_id',
        label: 'Account Id',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'name',
        label: 'Name',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'cname',
        label: 'Customer Name',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'search',
        label: 'Search',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'referrer',
        label: 'Referrer',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'location',
        label: 'Location',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'source',
        label: 'Source',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'source_id',
        label: 'Source ID',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'source_sid',
        label: 'Source SID',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'tgid',
        label: 'TG Id',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'likelihood',
        label: 'Likelihood',
        dataType: 'STRING',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: 'duration',
        label: 'Duration',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            isReaggregatable: true
        }
    }, {
        name: 'direction',
        label: 'Direction',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'talk_time',
        label: 'Talk Time',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            isReaggregatable: true
        }
    }, {
        name: 'ring_time',
        label: 'Ring Time',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            isReaggregatable: true
        }
    }, {
        name: 'hold_time',
        label: 'Hold Time',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            isReaggregatable: true
        }
    }, {
        name: 'parent_id',
        label: 'Parent Id',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'email',
        label: 'E-Mail',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'street',
        label: 'Street',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'city',
        label: 'City',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'state',
        label: 'State',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'country',
        label: 'Country',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'postal_code',
        label: 'Postal Code',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'called_at',
        label: 'Date',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'unix_time',
        label: 'Unix Time',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'tracking_number_id',
        label: 'Tracking Number Id',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'tracking_number_sid',
        label: 'Tracking Number SID',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'tracking_number',
        label: 'Tracking Number',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'tracking_label',
        label: 'Tracking Label',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'dial_status',
        label: 'Dial Status',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'is_new_caller',
        label: 'New Caller',
        dataType: 'BOOLEAN',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: 'business_label',
        label: 'Business Label',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'receiving_number_id',
        label: 'Receiving Number Id',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'receiving_number_sid',
        label: 'Receiving Number SID',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'billed_amount',
        label: 'Billed Amount',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            isReaggregatable: true
        }
    }, {
        name: 'billed_at',
        label: 'Billed At',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'excluded',
        label: 'Excluded',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'tracking_number_format',
        label: 'Tracking Number',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'business_number_format',
        label: 'Business Number',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'caller_number_format',
        label: 'Caller Number',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'visitor',
        label: 'Visitor',
        dataType: 'BOOLEAN',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'call_status',
        label: 'Call Status',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'status',
        label: 'Status',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'day',
        label: 'Day',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'month',
        label: 'Month',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'hour',
        label: 'Hour',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'web_source',
        label: 'Web Source',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'medium',
        label: 'Medium',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'keyword',
        label: 'Keyword',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'campaign',
        label: 'Campaign',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_match_type',
        label: 'Ad Match Type',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_content',
        label: 'Ad Content',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_slot',
        label: 'Ad Slot',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_slot_position',
        label: 'Ad Slot Position',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_network',
        label: 'Ad Network',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'creative_id',
        label: 'Creative Id',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_group_id',
        label: 'Ad Group Id',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'adgroup_id',
        label: 'Ad Group',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'campaign_id',
        label: 'Campaign Id',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_format',
        label: 'Ad Format',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_targeting_type',
        label: 'Ad Targeting Type',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'keyword_id',
        label: 'Keyword Id',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'calls_counter',
        label: 'Calls',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: 'callers_counter',
        label: 'Callers',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: '30s_calls_counter',
        label: 'Calls (>30s)',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: '30s_calls_duration',
        label: 'Talk Time (Calls > 30s)',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: '30s_callers_counter',
        label: 'Callers (>30s)',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: '30s_callers_duration',
        label: 'Talk Time (Unique Calls > 30s)',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: 'lat_lng',
        label: 'Latitude,Longitude',
        dataType: 'STRING',
        semantics: {
            conceptType: 'METRIC'
        }
    }
];

function getAuthType() {
    return {
        "type": "NONE"
    };
}
function getConfig(request) {
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
    };
}
var calculatedFields = [
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
function getSchema(request) {
    return {
        schema: fixedSchema
    };
}
function getData(request) {
    var initialUrl = "https://calltrackingmetrics.com/api/v1/accounts/" + request.configParams.AccountId + "/calls?start_date=" + request.dateRange.startDate + "&end_date=" + request.dateRange.endDate + "&per_page=100";
    var credentials = Utilities.base64Encode(request.configParams.AccessKey + ":" + request.configParams.SecretKey);
    var options = {
        method: 'get',
        headers: {
            'Authorization': "Basic " + credentials
        }
    };
    var response = UrlFetchApp.fetch(initialUrl, options);
    var data = JSON.parse(response.getContentText());
    var dataSchema = [];
    request.fields.forEach(function (field) {
        for (var i = 0; i < fixedSchema.length; i++) {
            if (fixedSchema[i].name == field.name) {
                dataSchema.push(fixedSchema[i]);
                break;
            }
        }
    });
    var rows = [];
    pushData(data.calls, dataSchema, rows);
    if (data.total_pages > 1) {
        var nextPage = data.next_page;
        for (var i = 1; i < data.total_pages; i++) {
            if (data.next_page !== undefined) {
                var pageResponse = UrlFetchApp.fetch(nextPage, options);
                var page = JSON.parse(pageResponse.getContentText());
                pushData(page.calls, dataSchema, rows);
                nextPage = page.next_page;
            }
        }
    }
    return {
        schema: dataSchema,
        rows: rows
    };
}
function pushData(calls, dataSchema, rows) {
    calls.forEach(function (call) {
        var values = [];
        dataSchema.forEach(function (field) {
            switch (field.name) {
                case 'calls_counter':
                    values.push(1);
                    break;
                case 'callers_counter':
                    if (call.is_new_caller) {
                        values.push(1);
                    }
                    else {
                        values.push(0);
                    }
                    break;
                case '30s_calls_counter':
                    if (call.talk_time > 29) {
                        values.push(1);
                    }
                    else {
                        values.push(0);
                    }
                    break;
                case '30s_calls_duration':
                    if (call.talk_time > 29) {
                        values.push(call.talk_time);
                    }
                    else {
                        values.push(0);
                    }
                    break;
                case '30s_callers_counter':
                    if (call.is_new_caller && call.talk_time > 29) {
                        values.push(1);
                    }
                    else {
                        values.push(0);
                    }
                    break;
                case '30s_callers_duration':
                    if (call.is_new_caller && call.talk_time > 29) {
                        values.push(call.talk_time);
                    }
                    else {
                        values.push(0);
                    }
                    break;
                case 'lat_lng':
                    values.push(call.latitude + "," + call.longitude);
                    break;
                case 'called_at':
                    values.push(formatDate(call.called_at));
                    break;
                case 'month':
                    values.push(monthNameToNumber(call.month));
                    break;
                default:
                    values.push(call[field.name]);
            }
        });
        rows.push({
            values: values
        });
    });
}
function formatDate(str) {
    var year = str.substring(0, 4);
    var month = str.substring(5, 7);
    var day = str.substring(8, 10);
    return [year, month, day].join('');
}
function monthNameToNumber(str) {
    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ].indexOf(str) + 1;
}
