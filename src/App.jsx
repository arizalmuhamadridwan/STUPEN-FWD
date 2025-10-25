import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public/index";
import PublicLayout from "./layout/public";
import Website from "./pages/public/websites";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layout/admin";
import Dashboard from "./pages/admin/index";
import AdminWebsite from "./pages/admin/websites/index";
import WebsiteCreate from "./pages/admin/websites/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="websites" element={<Website />} />
        </Route>

        {/* auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="websites">
            <Route index element={<AdminWebsite />} />
            <Route path="create" element={<WebsiteCreate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
