import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
const id = localStorage.getItem(ID)

export async function getVendas() {
  const res = (
    await api.get(`/vendas/${id}`, {
      headers: { Authorization: `token ${token}` },
    })
  ).data.response;
  return res;
}

export async function postVenda(
  desc,
  date,
  comprador,
  qtd,
  valor,
  unidade,
  refreshPage
) {
  await api
    .post(
      `/vendas`,
      {
        user: localStorage.getItem(ID),
        describe: desc,
        date: date,
        buyer: comprador,
        quantity: qtd,
        value: valor,
        number: '1',
        unit: unidade,
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
