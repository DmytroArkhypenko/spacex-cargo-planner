import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { CompaniesList } from './components/CompaniesList';
import { CompanyPage } from './components/CompanyPage';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="app__page">
          <div className="app__page__sidebar">
            <CompaniesList />
          </div>
          <div className="app__page__content">
            <Switch>
              <Route path="/shipmentId=:shipmentId" exact>
                <CompanyPage />
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
