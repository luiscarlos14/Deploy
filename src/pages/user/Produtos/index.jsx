import React, { useState, useEffect } from "react";
import StoreCard from "../../../components/StoreCard";
import { getProdutos, getFornecedores } from "./services";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import api, { IDPRODUTO, CITY } from "../../../api";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import { makeStyles } from "@material-ui/core/styles";
import { createImportTypeNode } from "typescript";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));


export default function Produtos() {
  const classes = useStyles();

  const [produtos, setProdutos] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);

  const cidadeUser = localStorage.getItem(CITY);

  function refreshPage() {
    document.location.reload();
  }

  useEffect(() => {
    getFornecedores()
      .then((result) => {
        setFornecedores(result);
      })
      .catch();
  }, []);

  useEffect(() => {
    getProdutos()
      .then((result) => {
        setProdutos(result);
      })
      .catch();
  }, []);

  function getName(id) {
    for (let i = 0; i < fornecedores.length; i++) {
      if (fornecedores[i].id === id) {
        return fornecedores[i].name;
      }
    }
  }

  function units() {
    const fornecedoresList = [];
    for (let i = 0; i < fornecedores.length; i++) {
      fornecedoresList.push({
        value: fornecedores[i].id,
        label: fornecedores[i].city,
      });
    }
    return fornecedoresList;
  }

  const [unidade, setUnidade] = useState(14);

  const handleChange = (event) => {
    setUnidade(event.target.value);

    /*  localStorage.setItem(IDPRODUTO, unidade);
    refreshPage(); */
  };

  function filtrar() {
    localStorage.setItem(IDPRODUTO, unidade);
    refreshPage();
  }

  console.log(cidadeUser);
 

  return (
    <>
      <TextField
        id="standard-select-currency"
        select
        label="Cidades Atendidas"
        value={unidade}
        onChange={handleChange}
        style={{
          width: "45%",
          marginRight: 32,
          marginBottom: 10,
        }}
      >
        {units().map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {getName(unidade)}

   
      <div className={classes.container}>
        {produtos.map((row) => {
          return row.supplier === unidade ? (
            <StoreCard
              name={row.name}
              describe={row.description}
              category={row.category}
              value={row.value}
              unit={row.unit}
              supplier={row.supplier}
              photo={row.photo}
            />
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}
