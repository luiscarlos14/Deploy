import api, { TOKEN_KEY, ID } from "../../../api";

const token = sessionStorage.getItem(TOKEN_KEY);
const id = localStorage.getItem(ID);

export async function getUser() {
  const res = (
    await api.get(`/users/${id}`, {
      headers: { Authorization: `token ${token}` },
    })
  ).data.response;
  return res;
}

export async function EditInfoPersonal(cpf, name, surname, refreshPage) {
  await api
    .patch(
      "/users/personal",
      {
        cpf: cpf,
        name: name,
        surname: surname,
        id: localStorage.getItem(ID),
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    )
    .then((result) => {
      refreshPage(200, "personal");
      //document.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function EditInfoAddress(
  street,
  neighborhood,
  city,
  cep,
  refreshPage
) {
  await api
    .patch(
      "/users/address",
      {
        street: street,
        neighborhood: neighborhood,
        city: city,
        cep: cep,
        id: id,
      },
      {
        headers: { Authorization: `token ${token}` },
      }
    )
    .then(() => {
      refreshPage(200, "address");
    })
    .catch((error) => {
      console.log(error);
    });
}
