import React, { useState, useEffect } from "react";
import StoreCard from "../../../components/StoreCard";
import { getProdutos, getFornecedores } from "./services";


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent:'center',
    flexWrap: 'wrap',
  }
 
}));

export default function Produtos() {
  const classes = useStyles();

  const [produtos, setProdutos] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);

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

  return (
    <div>
      <div className={classes.container}>


        
          {produtos.map((row) => {
            return <StoreCard title={row.name} describe={row.description} />
          })}
      
        
      </div>
    </div>
    /* <div style={{marginLeft: '4%', marginRight: '4%'}} className="bg-white-500 pt-14 pb-28 px-4 md:px-8 h-auto">
      <div className="container mx-auto max-w-full">
         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {list.map((row) => {
            return row.city === "Salgueiro" || row.city === "Juazeiro" ? (
              <StoreCard title={row.name} describe={row.description} />
            ) : (
              ""
            );
          })}
        </div> 

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5">
          {produtos.map((row) => {
            return <StoreCard title={row.name} describe={row.description} />
            
          })}
        </div>
      </div>
    </div> */
  );
}
