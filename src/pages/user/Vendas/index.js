import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";

import React, { useEffect, useState } from "react";
import { getVendas } from "./services";
import constantes from "constantes";

import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";

import ButtonT from "@material-tailwind/react/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import moment from "moment";
import "moment/locale/pt-br";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Vendas() {

  const [list, setList] = useState([]);
  const totalVendas = list.length;

  const valorT = [];

  const valorTotal = () => {
    let valor = 0;
    for (let i = 0; i < list.length; i++) {
      valor = list[i].valor * list[i].quantidade;
      valorT.push(valor);
    }
  };

  function getTotal(i) {
    return valorT[i];
  }

  valorTotal();

  const ganhoTotal = valorT.reduce((total, numero) => total + numero, 0);

  useEffect(() => {
    getVendas()
      .then((result) => {
        setList(result);
      })
      .catch();
  }, []);


  const classes = useStyles();

  return (
    <>
      <div className="bg-white-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Vendas Realizadas"
              amount={totalVendas}
              percentage="3.48 %"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Mês Passado"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Ganho Total"
              // eslint-disable-next-line no-useless-concat
              amount={"R$ " + `${ganhoTotal}`}
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />

            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard title="Vendas" color={constantes.colors.primary}>
              <ButtonT
                color={"teal"}
                buttonType="filled"
                size="regular"
                style={{ marginBottom: 20 }}
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
              >
                Adicionar Venda
              </ButtonT>

              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Descrição</TableCell>
                      <TableCell align="center">Data</TableCell>
                      <TableCell align="center">Comprador</TableCell>
                      <TableCell align="center">Quantidade</TableCell>
                      <TableCell align="center">Valor</TableCell>
                      <TableCell align="center">Unidade</TableCell>
                      <TableCell align="center">Valor Total</TableCell>
                      <TableCell align="center">Opções</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((row, i) => (
                      <TableRow key={row.id}>
                        <TableCell align="center" component="th" scope="row">
                          {row.descricao}
                        </TableCell>
                        <TableCell align="center">
                          {moment(new Date(row.data))
                            .locale("pt-br")
                            .format("ddd, D [de] MMMM [de] YYYY")}
                        </TableCell>
                        <TableCell align="center">{row.comprador}</TableCell>
                        <TableCell align="center">{row.quantidade}</TableCell>
                        <TableCell align="center">{row.valor}</TableCell>
                        <TableCell align="center">{row.unidade}</TableCell>
                        <TableCell align="center">{getTotal(i)}</TableCell>

                        <TableCell align="center">
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ margin: "5px" }}
                          >
                            <CreateIcon />
                          </Button>
                          <Button
                            style={{ margin: "5px" }}
                            variant="contained"
                            color="secondary"
                          >
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TableCard>
          </div>
        </div>
      </div>
    </>
  );
}
