export const listBuilder = (keys: string[], values: any[][]) => {
  const res: any[] = []
  for (const vals of values) {
    const obj: any = {}
    for (let i = 0; i < vals.length; i++) {
      obj[keys[i]] = vals[i]
    }
    res.push(obj)
  }
  return res
}