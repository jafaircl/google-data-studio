export const fixedSchema = [
    {
        name: 'ad_id',
        label: 'Ad ID',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'ad_name',
        label: 'Ad Name',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'adset_id',
        label: 'Ad Set ID',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'adset_name',
        label: 'Ad Set Name',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'age',
        label: 'Age',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'buying_type',
        label: 'Buying Type',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'call_to_action_clicks',
        label: 'Call-To-Action Clicks',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC'
        }
    }, {
        name: 'campaign_id',
        label: 'Campaign ID',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'campaign_name',
        label: 'Campaign Name',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'canvas_avg_view_percent',
        label: 'Canvas Avg View Percent',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'PERCENT',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'canvas_avg_view_time',
        label: 'Canvas Avg View Time',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'DURATION',
            semanticGroup: 'DATETIME',
        }
    }, {
        name: 'clicks',
        label: 'Clicks (all)',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'cost_per_estimated_ad_recallers',
        label: 'Cost Per Estimated Ad Recallers',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cost_per_inline_link_click',
        label: 'Cost Per Inline Link Click',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cost_per_inline_post_engagement',
        label: 'Cost Per Inline Post Engagement',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cost_per_total_action',
        label: 'Cost Per Total Action',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cost_per_unique_click',
        label: 'CPC (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cost_per_unique_inline_click',
        label: 'Cost Per Inline Click (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cpc',
        label: 'CPC (all)',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cpm',
        label: 'CPM',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'cpp',
        label: 'CPP',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'ctr',
        label: 'CTR (all)',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'PERCENT',
            semanticGroup: 'NUMBER',
        }
    }, {
        name: 'date_start',
        label: 'Date',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'YEAR_MONTH_DAY',
            semanticGroup: 'DATETIME',
        }
    }, {
        name: 'month',
        label: 'Month',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'MONTH',
            semanticGroup: 'DATETIME',
        }
    }, {
        name: 'day',
        label: 'Day',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'DAY',
            semanticGroup: 'DATETIME',
        }
    }, {
        name: 'day_of_week',
        label: 'Day of Week',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'DAY_OF_WEEK',
            semanticGroup: 'DATETIME',
        }
    }, {
        name: 'estimated_ad_recall_rate',
        label: 'Estimated Ad Recall Rate',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'PERCENT',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'estimated_ad_recallers',
        label: 'Estimated Ad Recallers',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'frequency',
        label: 'Frequency',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'gender',
        label: 'Gender',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'TEXT'
        }
    }, {
        name: 'impressions',
        label: 'Impressions',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'inline_link_click_ctr',
        label: 'Inline Link Click CTR',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'PERCENT',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'inline_link_clicks',
        label: 'Inline Link Clicks',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'inline_post_engagement',
        label: 'Inline Post Engagement',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'objective',
        label: 'Objective',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'TEXT'
        }
    }, {
        name: 'reach',
        label: 'Reach',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'relevance_score',
        label: 'Relevance Score',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'social_clicks',
        label: 'Social Clicks',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'social_impressions',
        label: 'Social Impressions',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'social_reach',
        label: 'Social Reach',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'social_spend',
        label: 'Social Spend',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'spend',
        label: 'Spend',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'total_action_value',
        label: 'Total Action Value',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'CURRENCY_USD',
            semanticGroup: 'CURRENCY',
        }
    }, {
        name: 'total_actions',
        label: 'Total Actions',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'total_unique_actions',
        label: 'Total Actions (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'unique_clicks',
        label: 'Clicks (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'unique_ctr',
        label: 'CTR (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'PERCENT',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'unique_inline_link_click_ctr',
        label: 'Inline Link Click CTR (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'AVG',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'PERCENT',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'unique_inline_link_clicks',
        label: 'Inline Link Clicks (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'unique_social_clicks',
        label: 'Social Clicks (unique)',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'action_reaction',
        label: 'Reactions',
        dataType: 'NUMBER',
        defaultAggregationType: 'SUM',
        semantics: {
            conceptType: 'METRIC',
            semanticType: 'NUMBER',
            semanticGroup: 'NUMERIC',
        }
    }, {
        name: 'device_platform',
        label: 'Device Category',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'TEXT'
        }
    }, {
        name: 'dma',
        label: 'DMA',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticType: 'TEXT'
        }
    }/*, {
        name: 'frequency_value',
        label: 'Frequency Value',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'impression_device',
        label: 'Impression Device',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'publisher_platform',
        label: 'Publisher Platform',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }, {
        name: 'platform_position',
        label: 'Platform Position',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }*/
]