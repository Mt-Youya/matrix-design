import { request, METHOD } from "@/utils/request"

export function getHome() {
  return request("/pc/queryAccountSetByUrl", METHOD.GET, { url: location.host })
}
