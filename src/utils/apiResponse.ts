export default (statusCode:number, data:App.ApiResponseData|Blob|FormData|ArrayBuffer, headers:HeadersInit = { "Content-Type": "application/json" }): Response => {
  if (data instanceof Blob ||data instanceof FormData ||data instanceof ArrayBuffer) {
    return new Response(data, {
      status: statusCode,
      headers
    })
  }
  return new Response(JSON.stringify(data), {
    status: statusCode,
    headers
  })
}