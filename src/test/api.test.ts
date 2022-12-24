import * as dotenv from 'dotenv'
import axios from "axios"

interface ApiResponseData {
    ok: boolean,
    error: {
        code: number
        message: string
        hint?: string
    } | null
    data: any
}

dotenv.config()

const authenticationToken = process.env.API_KEY

const apiBaseUrl = 'http://localhost:3000/api'

test("Test Api key", async () => {
    let resData:ApiResponseData
    try {
        let res = await axios.get(apiBaseUrl, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${authenticationToken}`
            }
        })
        resData = res.data
    } catch (error) {
        resData = error.response.data
    }
    expect(resData.ok).toBeTruthy()
})
