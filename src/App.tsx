import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customer = lazy(() => import("./pages/Customer"));
const NewProduct = lazy(() => import("./pages/management/newProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"))
const PieCharts = lazy(() => import("./pages/charts/PieCharts"))
const LineCharts = lazy(() => import("./pages/charts/LineCharts"))
const Coupons = lazy(() => import("./pages/apps/Coupons"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>

          {/* Pages */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Management Routes */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />


          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Apps (Coupon) */}
          <Route path="/admin/apps/coupon" element={<Coupons />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
