declare namespace App {
    interface ApiResponseData {
        ok: boolean,
        error: {
            code: number
            message: string
            hint?: string
        } | null
        data: any
    }
}