import React from 'react';

import { BrowserRouter } from "react-router-dom";

import Application from './router/index';
import Auth from './router/auth.routes';

import { UseAuth } from './hooks/auth';


export default function App() {

  const {authenticated} = UseAuth();

 return (
     <BrowserRouter>
        {authenticated ? <Application /> : <Auth />}
     </BrowserRouter>
 )
}
