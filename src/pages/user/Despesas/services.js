import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
const id = sessionStorage.getItem(ID);

export async function getDespesas(){
    
    const res = (await api.get(`/despesas/${id}`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}
