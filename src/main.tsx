import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";

import BookWrapper from "@/components/BookWrapper";
import BookPage from "@/components/BookPage";
import TitlePage from "@/pages/TitlePage";
import AuthorPage from "@/pages/AuthorPage";
import EvidencePage from "@/pages/EvidencePage";
import GhostPage from "@/pages/GhostPage";
import GhostTypesPage from "@/pages/GhostTypesPage";
import NotFoundPage from "@/pages/NotFoundPage";

import "@/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
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
            path='info'
            element={
              <BookWrapper>
                <TitlePage />
                <AuthorPage />
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
                  <BookPage />
                  <GhostTypesPage />
                </BookWrapper>
              }
            />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
