import React, {Fragment} from 'react';

import Login from './src/pages/Login'
import NavBar from './src/components/NavBar/NavBar'

export default function App() {
  return (
    <Fragment>
      <Login /> 
      <NavBar />
    </Fragment>
  );
}
