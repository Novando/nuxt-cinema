import axios from "axios";

export const get = async (path: string, param?: object) => {
  const rc = useRuntimeConfig().public
  const res = await axios.get(`${rc.apiUrl}${path}`, {params: param})
  return res.data
}

export const post = async (path: string, body: object) => {
  const rc = useRuntimeConfig().public
  const res = await axios.post(`${rc.apiUrl}${path}`, body)
  return res.data
}

export const getApiKey = async (path: string, param?: object) => {
  const rc = useRuntimeConfig().public
  const apiKey = getCookie('apiKey')
  const res = await axios.get(`${rc.apiUrl}${path}`, {
    params: param,
    headers: {
      "x-api-key": apiKey// stores/toastStore.ts

    },
  })
  return res.data
}

export const postApiKey = async (path: string, body: object) => {
  const rc = useRuntimeConfig().public
  const apiKey = getCookie('apiKey')
  const res = await axios.post(`${rc.apiUrl}${path}`, body, {
    headers: {
      "x-api-key": apiKey
    },
  })
  return res.data
}