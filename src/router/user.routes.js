import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/user/Dashboard/index";
import Footer from "../components/Footer";


import Vendas from '../pages/user/Vendas/index';
import Despesas from '../pages/user/Despesas/index';
import Funcionarios from '../pages/user/Funcionarios/index';
//import Plantacoes from '../pages/user/Plantacoes';
import Insumos from '../pages/user/Insumos/index';
import Settings from '../pages/user/User/index'
import Produtos from '../pages/user/Produtos';

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
          <Route exact path="/funcionarios" component={Funcionarios} />
          <Route exact path="/insumos" component={Insumos} />
          <Route exact path="/produtos" component={Produtos} />
          <Route exact path="/perfil" component={Settings} />
          <Redirect from="*" to="/" />
        </Switch>
        
        <Footer />
      </div>
    </>
  );
}

export default User;
