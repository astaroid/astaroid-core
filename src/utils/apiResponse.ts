export default (statusCode:number, headers:HeadersInit = { "Content-Type": "application/json" }, data:App.ApiResponseData|Blob|FormData|ArrayBuffer): Response => {
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