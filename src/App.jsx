/* eslint-disable no-unused-vars */
import { StrictMode, Suspense } from 'react'
import './sass/App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './pages/Layout';
import { Routes } from './routers/Routes';

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes />
    </Suspense>
  );
}

export default App
