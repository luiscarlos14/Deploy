import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard";

import constantes from "constantes";

import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";

import { getDespesas, postDespesa, deleteDespesa } from "./services";

import React, { useEffect, useState } from "react";
import ButtonT from "@material-tailwind/react/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";

import moment from "moment";
import "moment/locale/pt-br";

const status = [
  {
    value: 1,
    label: "PAGA",
  },
  {
    value: 0,
    label: "PENDENTE",
  },
];

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #287C43",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  paperTwo: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  alerta: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Despesas() {

  const [list, setList] = useState([]);

  const totalDespesas = list.length;

  const valorT = [];

  const valorTotal = () => {
    let valor = 0;
    for (let i = 0; i < list.length; i++) {
      valor = list[i].value;
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

  console.log(list);




  function refreshPage(status, request) {
    if (status === 200 && request === "despesa") {
      alert("Despesa inserida");
      document.location.reload();
    } else if (status === 200 && request === "delete") {
      alert("Despesa Excluída");
      document.location.reload();
    }
  }

  const [descDespesa, setDescDespesa] = useState("");
  const [dataDespesa, setDataDespesa] = useState("");
  const [statusDespesa, setStatusDespesa] = useState(0);
  const [valorDespesa, setValorDespesa] = useState("");

  function saveDespesa() {
    postDespesa(
      descDespesa,
      dataDespesa,
      valorDespesa,
      statusDespesa,
      refreshPage
    );
  }

  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [openDel, setOpenDel] = React.useState(false);

  const [idDel, setIdDel] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDel = () => {
    setOpenDel(true);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
  };

  const handleChange = (event) => {
    setStatusDespesa(event.target.value);
  };

 


 

  function ConfirmDelete(i) {
    setIdDel(i);
    handleOpenDel();
  }
  const classes = useStyles();

  return (
    <>
      <div className="bg-white-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div style={{ marginTop: "3%" }} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <StatusCard
              color="blue"
              icon="trending_up"
              title="Total de Despesas"
              amount={`${totalDespesas}`}
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
              color="pink"
              icon="money_off"
              title="Despesas Pendentes"
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
          <div style={{ marginTop: "10%" }} className="grid grid-cols-1 px-4 mb-16">
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
                onClick={handleOpen}
              >
                Adicionar Despesa
              </ButtonT>

              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2
                      style={{
                        fontSize: 30,
                        fontFamily: "monospace",
                        textAlign: "center",
                        backgroundColor: constantes.colors.despesas,
                        color: "#fff",
                        borderRadius: 10,
                      }}
                      id="transition-modal-title"
                    >
                      Nova Despesa
                    </h2>

                    <form
                      className={[classes.root]}
                      noValidate
                      autoComplete="off"
                    >
                      <div style={{ padding: 10 }}>
                        <TextField
                          id="standard-basic"
                          label="Descrição"
                          style={{ width: "100%", marginBottom: 10 }}
                          onChange={(e) => setDescDespesa(e.target.value)}
                        />

                        <TextField
                          id="date"
                          label="Data"
                          type="date"
                          style={{ width: "100%", marginBottom: 10 }}
                          defaultValue={new Date()}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(e) => setDataDespesa(e.target.value)}
                        />

                        <TextField
                          id="standard-basic"
                          label="Valor"
                          style={{
                            width: "40%",
                            marginRight: "10%",
                            marginBottom: 10,
                          }}
                          onChange={(e) => setValorDespesa(e.target.value)}
                        />

                        <TextField
                          id="standard-select-currency"
                          select
                          label="Status"
                          value={statusDespesa}
                          onChange={handleChange}
                          style={{
                            width: "40%",
                            marginRight: 32,
                            marginBottom: 10,
                          }}
                        >
                          {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                      <div style={{ marginRight: "12%", marginLeft: "12%" }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<CancelIcon />}
                          onClick={handleClose}
                        >
                          Cancelar
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<SaveIcon />}
                          onClick={saveDespesa}
                        >
                          Salvar
                        </Button>
                      </div>
                    </form>
                  </div>
                </Fade>
              </Modal>

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
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Opções</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((row, i) => (
                      <TableRow key={row.id}>
                        <TableCell align="center" component="th" scope="row">
                          {row.description}
                        </TableCell>

                        <TableCell align="center">
                          {moment(new Date(row.date))
                            .locale("pt-br")
                            .format("ddd, D [de] MMMM [de] YYYY")}
                        </TableCell>
                        <TableCell align="center">{row.value}</TableCell>

                        <TableCell align="center">
                          {row.pay === 1 ? "Paga" : "Pendente"}
                        </TableCell>

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
                            onClick={() => ConfirmDelete(row.id)}
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openDel}
        onClose={handleCloseDel}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* </Modal> <Modal open={openDel} onClose={handleCloseDel}> */}
        <div style={modalStyle} className={classes.paperTwo}>
          <center>
            <h1 style={{ fontSize: 25, margin: 15 }}>
              Deseja Realmente Excluir?
            </h1>

            <Button
              style={{ margin: "5px" }}
              variant="contained"
              color="secondary"
              onClick={handleCloseDel}
            >
              NÃO
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ margin: "5px" }}
              onClick={() => deleteDespesa(idDel, refreshPage)}
            >
              SIM
            </Button>
          </center>
        </div>
      </Modal>
    </>
  );
}
