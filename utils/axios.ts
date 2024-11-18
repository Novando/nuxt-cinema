import axios from "axios";

export const get = async (path: string, param?: object) => {
  const rc = useRuntimeConfig().public
  const res = await axios.get(`${rc.apiUrl}${path}`, {params: param})
  return res.data
}
export const post = async (path: string, param?: object) => {
  const rc = useRuntimeConfig().public
  const res = await axios.post(`${rc.apiUrl}${path}`, param)
  return res.data
}