import axios from "axios";

export const get = async (path: string, param?: object) => {
  const rc = useRuntimeConfig().public
  try {
    const res = await axios.get(`${rc.apiUrl}${path}`, {params: param})
    return res.data
  } catch (x_x: any) {
    if (x_x.response.data) throw x_x.response.data
    throw x_x
  }
}

export const post = async (path: string, body: object) => {
  const rc = useRuntimeConfig().public
  try{
    const res = await axios.post(`${rc.apiUrl}${path}`, body)
    return res.data
  } catch (x_x: any) {
    if (x_x.response.data) throw x_x.response.data
    throw x_x
  }
}

export const getApiKey = async (path: string, param?: object) => {
  const rc = useRuntimeConfig().public
  try{
    const apiKey = getCookie('apiKey')
    const res = await axios.get(`${rc.apiUrl}${path}`, {
      params: param,
      headers: {
        "x-api-key": apiKey// stores/toastStore.ts

      },
    })
    return res.data
  } catch (x_x: any) {
    if (x_x.response.data) throw x_x.response.data
    throw x_x
  }
}

export const postApiKey = async (path: string, body: object) => {
  const rc = useRuntimeConfig().public
  try{
    const apiKey = getCookie('apiKey')
    const res = await axios.post(`${rc.apiUrl}${path}`, body, {
      headers: {
        "x-api-key": apiKey
      },
    })
    return res.data
  } catch (x_x: any) {
    if (x_x.response.data) throw x_x.response.data
    throw x_x
  }
}