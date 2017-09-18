export interface ScriptRequest {
    configParams: {
        AccessKey: string,
        SecretKey: string,
        AccountId: string
    },
    dateRange: {
        startDate: string,
        endDate: string
    },
    fields: RequestField[]
}

export interface RequestField {
    name: string
}

export interface CallData {
    calls: Call[],
    total_pages: number,
    next_page: string
}

export interface Call {
    [key: string]: any;
    is_new_caller: boolean,
    talk_time: number,
    latitude: number,
    longitude: number,
    called_at: string,
}

export interface TODATE {}