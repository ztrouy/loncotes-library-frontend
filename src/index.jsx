import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronList from "./components/tickets/PatronList";
import PatronDetails from "./components/tickets/PatronDetails";
import PatronEdit from "./components/forms/PatronEdit";
import CheckoutList from "./components/tickets/CheckoutList";
import BrowseList from "./components/tickets/BrowseList";
import MaterialCheckout from "./components/forms/MaterialCheckout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path="browse" element={<BrowseList />} />
          <Route path=":id">
            <Route index element={<MaterialDetails />} />
            <Route path="checkout" element={<MaterialCheckout />} />
          </Route> 
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id">
            <Route index element={<PatronDetails />} />
            <Route path="edit" element={<PatronEdit />}/>
          </Route>
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutList />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
