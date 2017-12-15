export interface ScriptRequest {
    configParams: {
        AccountNumber: string
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
