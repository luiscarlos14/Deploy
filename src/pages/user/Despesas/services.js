import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
const id = localStorage.getItem(ID);

export async function getDespesas(){
    
    const res = (await api.get(`/despesas/${id}`, { 
      headers: { Authorization: `token ${token}`}},
      )).data.response;
    return res;
}

export async function postDespesa(
  desc,
  date,
  valor,
  status,
  refreshPage
) {
  await api
    .post(
      `/despesas`,
      {
        user: localStorage.getItem(ID),
        describe: desc,
        date: date,
        value: valor,
        pay: status,
        frequency: "Recorrente",
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    )
    .then(() => {
      refreshPage(200);
    });
}
