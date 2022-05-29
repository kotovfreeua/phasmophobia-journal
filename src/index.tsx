import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import BookWrapper from "./components/BookWrapper";
import Page from "./components/Page";
import EvidencePage from "./pages/EvidencePage";
import GhostPage from "./pages/GhostPage";
import GhostTypesPage from "./pages/GhostTypesPage";

import "./index.css";
import NotFoundPage from "./pages/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route
            index
            element={
              <BookWrapper>
                <GhostTypesPage />
                <EvidencePage />
              </BookWrapper>
            }
          />
          <Route
            path='about'
            element={
              <BookWrapper>
                <Page />
                <Page />
              </BookWrapper>
            }
          />
          <Route path='ghosts'>
            <Route
              path=':ghostType'
              element={
                <BookWrapper>
                  <GhostTypesPage />
                  <GhostPage />
                </BookWrapper>
              }
            />
            <Route
              index
              element={
                <BookWrapper>
                  <Page />
                  <GhostTypesPage />
                </BookWrapper>
              }
            />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
