import type { APIContext } from 'astro'
import { 
    apiKeyAuthenticator, 
    apiResponse 
} from "@utils"

const authenticationToken = import.meta.env.API_KEY

export const get = ({ request }:APIContext) => {
    const { authenticate, response: authenticateResponse } = apiKeyAuthenticator(request)

    if (!authenticate)
        return authenticateResponse

    return apiResponse(
        200, 
        { 
            ok: true, 
            error: null, 
            data: { 
                message: `Api key is correct ${authenticationToken}` 
            } 
    })
}