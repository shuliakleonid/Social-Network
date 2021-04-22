
type OptionalType<T> = {
  [Property in keyof  T]? : T[Property]
}
export const updateObjectInArray = <T>(items:Array<T>,itemId:T[keyof T],objPropName: keyof T,newObjProps:OptionalType<T>) => {
  return items.map(el => el[objPropName] === itemId ? {...el, ...newObjProps} : {...el})
}

// const updateObj = (items:Array<any>,itemId:number, objPropName: string,newObjProps: { [key: string]: any }) => {
//   return items.map( item => {
//     return item[objPropName] === itemId ? { ...item, ...newObjProps } : item
//       }
//   )
// }
// const updateObj2 = (items:Array<UserData>,itemId:number, objPropName: keyof UserData,newObjProps: { [key: string]: any }) => {
//   return items.map( item => {
//     return item[objPropName] === itemId ? { ...item, ...newObjProps } : item
//       }
//   )
// }
// type UserData = {
//   id:number
//   name:string
// }





