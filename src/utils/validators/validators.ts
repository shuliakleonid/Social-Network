export const required = (value: string) => {
  return value ? undefined : 'Field is required'
}
export const maxLengthCreator = (maxLength:number) => (value:string) => {
  return value && value.length > maxLength
      ? `Max length is ${maxLength} symbols`
      : undefined
}
export const minLengthCreator = (maxLength:number) => (value:string) => {
  return value && value.length > maxLength
      ? `Min length is ${maxLength} symbols`
      : undefined
}

