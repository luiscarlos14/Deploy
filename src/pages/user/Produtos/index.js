import React, { useState, useEffect } from "react";
import StoreCard from "../../../components/StoreCard";
import { getFornecedores } from "./services";

export default function Produtos() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getFornecedores()
      .then((result) => {
        setList(result);
      })
      .catch();
  }, []);

  console.log(list);

  return (
    <div style={{marginLeft: '4%', marginRight: '4%'}} className="bg-white-500 pt-14 pb-28 px-3 md:px-8 h-auto">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {list.map((row) => {
            return row.address === "Salgueiro" || row.address === "Juazeiro" ? (
              <StoreCard title={row.name} describe={row.product} />
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
}
