import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
const id = localStorage.getItem(ID);

export async function getProdutos(){
    
    const res = (await api.get(`/products/14`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}

export async function getFornecedores(){
    
  const res = (await api.get(`/suppliers`, { 
    headers: { Authorization: `token ${token}`}},
    )).data.response;
  return res;
}





