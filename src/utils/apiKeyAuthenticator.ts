import apiResponse from "./apiResponse"

const authenticationToken = import.meta.env.API_KEY

export default (request:Request): { response: Response, authenticate: boolean } => {
    const authHeader = request.headers.get("authorization")
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return {
            authenticate: false,
            response: apiResponse(
                401, 
                {
                ok: false,
                error: {
                    message: "No authentication token",
                    code: 100
                },
                data: null
            })
        }
    }
    
    if (token != authenticationToken) {
        return {
            authenticate: false,
            response: apiResponse(
                401, 
                {
                ok: false,
                error: {
                    message: "Invalid authentication token",
                    code: 101
                },
                data: null
            })
        }
    }

    return {
        authenticate: true,
        response: null
    }
}