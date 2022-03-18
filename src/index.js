import React from 'react';
import {StyleReset} from 'atomize';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/home'
import Gallery from './routes/gallery'

import './css/index.css';
import App from './App';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";


//Firebase

import Library from './routes/views/library';
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <StyleReset></StyleReset>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="library" element={<Library />} />
        </Routes>
      </StyletronProvider>
  </BrowserRouter>,
  rootElement
);