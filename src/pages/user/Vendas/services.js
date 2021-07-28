import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
const id = sessionStorage.getItem(ID);

export async function getVendas(){
    
    const res = (await api.get(`/vendas/${id}`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}
