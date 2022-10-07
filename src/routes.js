import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./themes/Global";

import { Home } from "./pages/Home";
import { Subject } from "./pages/Subject";
import { NewSubject } from "./pages/NewSubject";
import { NewEvent } from "./pages/NewEvent";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/new" element={<NewSubject />} />
        <Route path="/subject/:id" element={<Subject />} />
        <Route path="/event/:id" element={<NewEvent />} />
      </Routes>
    </BrowserRouter>
  );
}
