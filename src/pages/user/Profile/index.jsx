import React, { useState, useEffect } from "react";
import { SERVER } from "../../../api";
import Card from "@material-tailwind/react/Card";
import Image from "@material-tailwind/react/Image";
import H5 from "@material-tailwind/react/Heading5";
import Icon from "@material-tailwind/react/Icon";
import ProfilePicture from "assets/user.png";

import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { EditInfoPersonal, EditInfoAddress, getUser } from "./Services";

function refreshPage(status, request) {
  if (status === 200 && request === "personal") {
    alert("Informações Pessoas Atualizadas!");
    document.location.reload();
  } else if (status === 200 && request === "address") {
    alert("Endereço atualizado");
    document.location.reload();
  }
}

export default function Settings() {
  const [nameProfile, setNameProfile] = useState("");
  const [surnameProfile, setSurnameProfile] = useState("");
  const [neighborhoodProfile, setNeighborhoodProfile] = useState("");
  const [cityProfile, setCityProfile] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCPF] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");

  const Perfil = foto === null ? ProfilePicture : `${SERVER}/${foto}`;

  useEffect(() => {
    getUser()
      .then((result) => {
        setName(result[0].name);
        setNameProfile(result[0].name);
        setSurname(result[0].surname);
        setSurnameProfile(result[0].surname);
        setCPF(result[0].cpf);
        setStreet(result[0].street);
        setNeighborhood(result[0].neighborhood);
        setNeighborhoodProfile(result[0].neighborhood);
        setCity(result[0].city);
        setCityProfile(result[0].city);
        setCep(result[0].cep);
        setEmail(result[0].email);
        setFoto(result[0].profile);
      })
      .catch();
  }, []);

  return (
    <>
      {/* <TableCard title="Insumos" color={constantes.colors.insumos}>
       */}

      {/* <div style={{marginTop: '5%'}} className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                    <div style={{marginTop: "5%"}} className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                            <ProfileCard photo="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"/>
                        </div>
                        <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                            <SettingsForm />
                        </div>
                       
                    </div>
                </div>
            </div> */}

      <div style={{ marginTop: "5%" }} className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-6">
            <div
              style={{ marginTop: "5%" }}
              className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14"
            >
              <Card>
                <div className="flex flex-wrap justify-center">
                  <div className="w-48 px-4 -mt-24">
                    <Image src={Perfil} rounded raised />
                  </div>
                </div>

                <div
                  style={{ marginTop: "1px" }}
                  className="w-full flex justify-center -mt-8"
                >
                  <a
                    href="#pablo"
                    className="mt-5"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button color="green" buttonType="link" ripple="dark">
                      Trocar foto do Perfil
                    </Button>
                  </a>
                </div>

                <div style={{ marginTop: 10 }} className="text-center">
                  <H5 color="gray">{`${nameProfile} ${surnameProfile}`}</H5>
                  <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                    {`${cityProfile}, ${neighborhoodProfile}`}
                  </div>
                </div>
              </Card>
            </div>

            <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
              <Card>
                <CardHeader color="green" contentPosition="none">
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Meu Perfil</h2>
                  </div>
                </CardHeader>

                <CardBody>
                  <form>
                    <h6 className="text-green-500 text-sm mt-3 mb-6 font-light uppercase">
                      Informações Pessoais
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <TextField
                          id="nome"
                          label="Nome"
                          type="text"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <TextField
                          id="sobrenome"
                          label="Sobrenome"
                          type="text"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <TextField
                          id="cpf"
                          label="CPF"
                          type="cpf"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={cpf}
                          helperText="O CPF não pode ser modificado!"
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: "1px" }}>
                      <Button
                        variant="contained"
                        onClick={() =>
                          EditInfoPersonal(cpf, name, surname, refreshPage)
                        }
                      >
                        Confirmar Alterações
                      </Button>
                    </div>

                    <h6 className="text-green-500 text-sm my-6 font-light uppercase">
                      Endereço
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-12/12 mb-10 font-light">
                        <TextField
                          id="endereco"
                          label="Endereço"
                          type="text"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                        />
                      </div>
                      <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                        <TextField
                          id="cidade"
                          label="Cidade"
                          type="text"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
                        <TextField
                          id="estado"
                          label="Estado"
                          type="text"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={neighborhood}
                          onChange={(e) => setNeighborhood(e.target.value)}
                        />
                      </div>
                      <div className="w-full lg:w-4/12 pl-4 mb-10 font-light">
                        <TextField
                          id="cep"
                          label="Cep"
                          type="text"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={cep}
                          onChange={(e) => setCep(e.target.value)}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: "1px" }}>
                      <Button
                        variant="contained"
                        onClick={() =>
                          EditInfoAddress(
                            street,
                            neighborhood,
                            city,
                            cep,
                            refreshPage
                          )
                        }
                      >
                        Confirmar Alterações
                      </Button>
                    </div>

                    <h6 className="text-green-500 text-sm my-6 font-light uppercase">
                      Informações de Acesso
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                        <TextField
                          id="email"
                          label="Email"
                          type="e-mail"
                          style={{ width: "100%", marginBottom: 10 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                        <TextField
                          id="senha"
                          label="Senha Atual"
                          type="password"
                          style={{ width: "100%", marginBottom: 10 }}
                        />
                      </div>

                      <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                        <TextField
                          id="newSenha"
                          label="Nova Senha"
                          type="text"
                          style={{ width: "100%", marginBottom: 10 }}
                        />{" "}
                      </div>
                    </div>
                  </form>

                  <div style={{ marginTop: "1px" }}>
                    <Button variant="contained">Confirmar Alterações</Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
