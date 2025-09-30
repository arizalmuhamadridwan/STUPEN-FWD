import { Link } from "react-router";

export default function Footer () {
    return (
        <>
        <footer id='contact' class="bg-light text-dark pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-3">
              <h5>Contact Us</h5>
              <p>Email: <a href="mailto:info@lightfurry.com" class="text-decoration-none">info@lightfurry.com</a></p>
              <p>Phone: <a href="tel:+6281234567890" class="text-decoration-none">+62 812 3456 7890</a></p>
            </div>

            <div class="col-md-6 mb-3">
              <h5>Quick Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to="/" class="nav-link px-0 text-body-secondary">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/catalogs" class="nav-link px-0 text-body-secondary">Team</Link>
                </li>
                <li class="nav-item">
                  <Link to="teams" class="nav-link px-0 text-body-secondary">Catalog</Link>
                </li>
                <li class="nav-item">
                  <Link to="/footers" class="nav-link px-0 text-body-secondary">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <hr class="my-4"/>
          <p class="text-center text-body-secondary mb-0">&copy; 2025 LightFurry, Inc</p>
        </div>
      </footer>
        </>
    )
}