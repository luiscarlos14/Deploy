import React, { useState, useEffect } from "react";
import StoreCard from "../../../components/StoreCard";
import { getProdutos, getFornecedores } from "./services";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import api, { IDPRODUTO, CITY } from "../../../api";

import { makeStyles } from "@material-ui/core/styles";

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

  const cidadeUser = localStorage.getItem(CITY)


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

  function getID(id){
    for(let i = 0; i < fornecedores.length; i++){
      if(fornecedores[i].id === id){
        return fornecedores[i].city
      }
    }
  }

  console.log(fornecedores);

  const [unidade, setUnidade] = useState('14');
  console.log(unidade);

  const handleChange = (event) => {
    setUnidade(event.target.value);
    localStorage.setItem(IDPRODUTO, unidade);
    refreshPage()
  };

  const nome = "Serra Talhada"

  return (
    <div>
      <div className={classes.container}>
      
        {produtos.map((row) => {
          return (
            getID(row.supplier) === nome ? 
            <StoreCard
              name={row.name}
              describe={row.description}
              category={row.category}
              value={row.value}
              unit={row.unit}
              supplier = {row.supplier}
              photo={row.photo}
            /> : ''
          );
        })}
      </div>
    </div>

  );
}
