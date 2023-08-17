import api from "./api";
export const login = async (userLogin)=>{ // email - password
   const rs = await  api.post("auth/login",userLogin);
   const token = rs.data.token;
   // set token to State in Component
   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const profile = async ()=>{
    const rs = await api.get("auth/profile");
    const data = rs.data;
}