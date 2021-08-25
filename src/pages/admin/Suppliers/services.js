import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
//const id = sessionStorage.getItem(ID);

export async function getUsers(){
    
    const res = (await api.get(`/suppliers`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}
