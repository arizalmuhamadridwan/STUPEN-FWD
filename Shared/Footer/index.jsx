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
                  <a href="#hero" class="nav-link px-0 text-body-secondary">Home</a>
                </li>
                <li class="nav-item">
                  <a href="#team" class="nav-link px-0 text-body-secondary">Team</a>
                </li>
                <li class="nav-item">
                  <a href="#contact" class="nav-link px-0 text-body-secondary">Contact</a>
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