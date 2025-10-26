import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public/index";
import PublicLayout from "./layout/public";
import Website from "./pages/public/websites";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layout/admin";
import Dashboard from "./pages/admin/index";
import AdminWebsite from "./pages/admin/websites/index";
import WebsiteCreate from "./pages/admin/websites/create";
import WebsiteEdit from "./pages/admin/websites/edit";
import AdminGenres from "./pages/admin/genres/index";
import GenreCreate from "./pages/admin/genres/create";
import GenreEdit from "./pages/admin/genres/edit";
import AdminAuthors from "./pages/admin/authors/index";
import AuthorCreate from "./pages/admin/authors/create";
import AuthorEdit from "./pages/admin/authors/edit";

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
            <Route path="edit/:id" element={<WebsiteEdit />} />
          </Route>

          <Route path="genres">
            <Route index element={<AdminGenres />} />
            <Route path="create" element={<GenreCreate />} />
            <Route path="edit/:id" element={<GenreEdit />} />
          </Route>

          <Route path="authors">
            <Route index element={<AdminAuthors />} />
            <Route path="create" element={<AuthorCreate />} />
            <Route path="edit/:id" element={<AuthorEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
