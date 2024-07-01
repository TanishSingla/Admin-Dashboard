import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customer = lazy(() => import("./pages/Customer"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}

export default App
