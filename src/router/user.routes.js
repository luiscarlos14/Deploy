import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/user/Dashboard";
import Footer from "../components/Footer";


import Vendas from '../pages/user/Vendas';
import Despesas from '../pages/user/Despesas';
import Produtos from '../pages/user/Produtos';
import Funcionarios from '../pages/user/Funcionarios';
import Plantacoes from '../pages/user/Plantacoes';
import Insumos from '../pages/user/Insumos';

// Tailwind CSS Style Sheet
import "../assets/styles/tailwind.css";

function User() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/vendas" component={Vendas} />
          <Route exact path="/despesas" component={Despesas} />
          <Route exact path="/produtos" component={Produtos} />
          <Route exact path="/funcionarios" component={Funcionarios} />
          <Route exact path="/plantacoes" component={Plantacoes} />
          <Route exact path="/insumos" component={Insumos} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default User;
