export const baseUrl = 'https://graph.facebook.com'
export const apiVersion = 'v2.10'

export function get(edge: string, payload: {}, accessToken: string){
    let url = `${baseUrl}/${apiVersion}/${edge}?access_token=${accessToken}`;
    for(let field in payload){
        url += `&${field}=${payload[field]}`
    }
    const response = UrlFetchApp.fetch(encodeURI(`${url}`)).getContentText()
    Logger.log(response)
    return JSON.parse(response)
}

export const invalidFields = [
    'date_start',
    'date_stop',
    'month',
    'age',
    'country',
    'dma',
    'gender',
    'frequency_value',
    'hourly_stats_aggregated_by_advertiser_time_zone',
    'hourly_stats_aggregated_by_audience_time_zone',
    'impression_device',
    'place_page_id',
    'publisher_platofmr',
    'platform_position',
    'device_platform',
    'product_id',
    'region',
    '1d_click',
    '1d_view',
    '28d_click',
    '28d_view',
    '7d_click',
    '7d_view',
    'action_canvas_component_name',
    'action_carousel_card_id',
    'action_carousel_card_name',
    'action_destination',
    'action_device',
    'action_link_click_destination',
    'action_reaction',
    'action_target_id',
    'action_type',
    'action_video_sound',
    'action_video_type',
    'inline',
    'value'
]

export const actionFields = [
    '1d_click',
    '1d_view',
    '28d_click',
    '28d_view',
    '7d_click',
    '7d_view',
    'action_canvas_component_name',
    'action_carousel_card_id',
    'action_carousel_card_name',
    'action_destination',
    'action_device',
    'action_link_click_destination',
    'action_reaction',
    'action_target_id',
    'action_type',
    'action_video_sound',
    'action_video_type',
    'inline',
    'value'
]

export const breakdowns = [
    'age',
    'country',
    'dma',
    'gender',
    'frequency_value',
    'hourly_stats_aggregated_by_advertiser_time_zone',
    'hourly_stats_aggregated_by_audience_time_zone',
    'impressions_device',
    'place_page_id',
    'publisher_platform',
    'platform_position',
    'device_platform',
    'product_id',
    'region'
]

export const actionBreakdowns = [
    'action_canvas_component_name',
    'action_carousel_card_id',
    'action_carousel_card_name',
    'action_destination',
    'action_device',
    'action_link_click_destination',
    'action_reaction',
    'action_target_id',
    'action_type',
    'action_video_sound',
    'action_video_type'
]