import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//componentes

import { NavBar  } from './components/NavBar/index';
import { Form } from './components/Form/index';
import { CompanyList } from './components/CompanyList/index';

export const AppRoutes = () => (

<Router>
    <NavBar/>
    <Routes>
        
        <Route path = '/' exact element = {<CompanyList/>}></Route>
        <Route path = '/add_company' exact element = {<Form/>}></Route>

    </Routes>

</Router>
);

export default AppRoutes;