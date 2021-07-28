import StatusCard from 'components/StatusCard';
import TableCard from 'components/TableCard';

import constantes from 'constantes';


import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";

import { getDespesas } from "./services";

import React, {useEffect, useState} from 'react';
import ButtonT from "@material-tailwind/react/Button";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import moment from "moment";
import "moment/locale/pt-br";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function Despesas() { 

  const [list, setList] = useState([]);

  const totalDespesas = list.length;

  const valorT = [];

  const valorTotal = () => {
    let valor = 0;
    for (let i = 0; i < list.length; i++) {
      valor = list[i].valor;
      valorT.push(valor);
    }
  };
  
  valorTotal();

  const despesaTotal = valorT.reduce((total, numero) => total + numero, 0);
 
  useEffect(() => {
    getDespesas()
      .then((result) => {
        setList(result);
      })
      .catch();
  }, []);

console.log(list)

    const classes = useStyles();

    return (
      <>
      <div className="bg-white-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Total de Despesas"
              amount={totalDespesas}
              percentage="3.48 %"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Mês Passado"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Despesa Total"
              // eslint-disable-next-line no-useless-concat
              amount={"R$ " + `${despesaTotal}`}
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
            <TableCard title="Despesas" color={constantes.colors.despesas}>
              <ButtonT
                color={"red"}
                buttonType="filled"
                size="regular"
                style={{ marginBottom: 20 }}
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
              >
                Adicionar Despesa
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
                      <TableCell align="center">Valor</TableCell>
                      <TableCell align="center">Paga</TableCell>
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
                        <TableCell align="center">{row.valor}</TableCell>

                        <TableCell align="center">{row.paga}</TableCell>

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
