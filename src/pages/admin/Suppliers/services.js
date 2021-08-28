import api, { TOKEN_KEY } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
//const id = sessionStorage.getItem(ID);

export async function getFornecedores(){
    
    const res = (await api.get(`/suppliers`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}

export async function postFornecedores(
  name,
  email,
  phone,
  cnpj,
  description,
  street,
  neighborhood,
  city,
  cep,
  url,
  logo,
  refreshPage
) {

  await api
    .post(
      `/suppliers`,
      {
        name: name,
        email: email,
        phone: phone,
        cnpj: cnpj,
        description: description,
        street: street,
        neighborhood: neighborhood,
        city: city,
        cep: cep,
        url: url,
        logo: logo
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    )
    .then(() => {
      refreshPage(200, "adicionado");
    });
}

export async function EditFornecedor(
  name,
  email,
  phone,
  cnpj,
  description,
  street,
  neighborhood,
  city,
  cep,
  url,
  logo,
  id,
  refreshPage
) {

  await api
    .patch(
      `/suppliers`,
      {
        name: name,
        email: email,
        phone: phone,
        cnpj: cnpj,
        description: description,
        street: street,
        neighborhood: neighborhood,
        city: city,
        cep: cep,
        url: url,
        logo: logo,
        id: id
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    )
    .then(() => {
      refreshPage(200, "editado");
    });
}


export async function deleteFornecedor(id, refreshPage){
  await api.delete(`suppliers/${id}`,{
    headers: { Authorization: `token ${token}` },
  }).then(()=>{
    refreshPage(200, "deletado");
  })

}
