import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from '../components/SidebarAdm';
import Dashboard from '../pages/user/Dashboard';
import Settings from '../pages/user/Settings';
import Tables from '../pages/user/Tables';
import Maps from '../pages/Login';
import Footer from '../components/Footer';

import '../assets/styles/tailwind.css';

function User() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default User;