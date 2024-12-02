import { baseURL } from "./baseURl"
import { commonAPI } from "./comonAPI"

export const addUser = async(user)=>{
    return await commonAPI(`POST`,`${baseURL}/users`,user)
}
export const getUser = async()=>{
    return await commonAPI(`GET`,`${baseURL}/users`,"")
}
export const deleteUser = async(id)=>{
    return await commonAPI(`DELETE`,`${baseURL}/users/${id}`,{})
}


export const editUser = async(id,user)=>{
    return await commonAPI(`PUT`,`${baseURL}/users/${id}`,user)
}