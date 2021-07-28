import api, { TOKEN_KEY, ID } from "../../../api";

const token = localStorage.getItem(TOKEN_KEY);
const id = localStorage.getItem(ID);

export async function getVendas(){
    
    const res = (await api.get(`/vendas/${id}`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}
