export const fixedSchema = [
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
    },  {
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
        dataType: 'STRING',
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