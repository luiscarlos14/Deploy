import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);

export async function getVendas() {
  const res = (
    await api.get(`/vendas/${sessionStorage.getItem(ID)}`, {
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
  und,
  refreshPage
) {
  await api
    .post(
      `/vendas`,
      {
        usuario: sessionStorage.getItem(ID),
        descricao: desc,
        data: date,
        comprador: comprador,
        quantidade: qtd,
        valor: valor,
        numero: "1",
        unidade: und,
        frequencia: "Recorrente",
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    )
    .then(() => {
      refreshPage(200);
    });
}
