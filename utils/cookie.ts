export const setCookie = (key: string, value: string, minute = 30) => {
  document.cookie = `${key}=${value}; max-age=${minute * 60}; samesite=lax; secure`
}

export const getCookie = (key: string) => {
  const cookies = document.cookie.split(';')
  const selectedCookie = cookies.find((row) => row.includes(`${key}=`))
  return selectedCookie?.split('=')[1] || ''
}

export const delCookie = (key: string) => {
  const cookies = document.cookie.split(';')
  const selectedCookie = cookies.find((row) => row.includes(`${key}=`))
  document.cookie = selectedCookie + ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
}

export const setAuthCookie = (value: string, minute: number) => {
  document.cookie = `accessToken=${value}; max-age=${minute * 60}; samesite=lax; secure`
}

export const getAuthCookie = () => {
  const cookies = document.cookie.split(';')
  const selectedCookie = cookies.find((row) => row.includes('accessToken='))
  return selectedCookie?.split('=')[1] || ''
}

export const delAuthCookie = () => {
  const cookies = document.cookie.split(';')
  const selectedCookie = cookies.find((row) => row.includes('accessToken='))
  document.cookie = selectedCookie + ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
}