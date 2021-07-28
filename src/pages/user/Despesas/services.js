import api, { TOKEN_KEY, ID } from "../../../api";

const token = localStorage.getItem(TOKEN_KEY);
const id = localStorage.getItem(ID);

export async function getDespesas(){
    
    const res = (await api.get(`/despesas/${id}`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}
