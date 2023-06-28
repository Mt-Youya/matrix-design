import crypto from "crypto"

function sign(info: string, key: string) {
  const hmac = crypto.createHmac("sha256", key)
  hmac.update(info)
  return hmac.digest("hex")
}
function jwt(info: string, key: string) {
  const header = {
    type: "jwt",
    alg: "HS256"
  }
  const headerStr = Buffer.from(JSON.stringify(header)).toString("base64")
  const payloadStr = Buffer.from(JSON.stringify(info)).toString("base64")
  const signs = sign(headerStr + "." + payloadStr, key)
  const signStr = Buffer.from(JSON.stringify(signs)).toString("base64").replace(/=/g, "")
  return headerStr + "." + payloadStr + "." + signStr
}
