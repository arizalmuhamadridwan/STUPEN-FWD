import { useState } from 'react'
import logo from "./assets/logo.png";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container ">
        {/* header */}
        <header className="d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-2 border-bottom ">
          
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <img src={logo} alt="Logo" width="80" height="64" />
              <span className='ms-2 fs-2'>LightFurry</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#hero" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>

        </header>

          {/* Hero */}
          <div id='hero' className="hero">
            <div className="overflow-hidden" style= {{ maxHeight: "30vh"}}>
            <div className="container px-5">
              <img
                src="https://picsum.photos/700/200"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="200"
                loading="lazy"
              />
            </div>
          </div>
            <h1 className="display-4 fw-bold text-body-emphasis">Buat Website Impianmu Bersama <br /> Lightfurry</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                  Lightfurry menyediakan layanan pembuatan website yang elegan, 
                  mudah diakses, dan ramah SEO untuk mengembangkan brand Anda.
                </p>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
                    Konsultasi Gratis
                  </button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                    Hubungi Kami
                  </button>
                </div>
              </div>
              
          </div>

               <br /> <br /><br />



          {/* Team */}
          <section id='team' class="text-center">
          <h1 class="fw-light">Our Team</h1>
          <p class="lead text-body-secondary font-weight-bold">
            Mendirikan website profesional membutuhkan orang orang yang sangat kompeten,<br /> berikut adalah ujung tombak dari LightFurry.
          </p>
        </section>
        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <div class="col">
                <div class="card shadow-sm">
                  <img 
                    src="https://picsum.photos/300/225" 
                    class="bd-placeholder-img card-img-top" 
                    alt="Frontend Engineer" 
                    width="100%" 
                    height="225" 
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Prasta Simanjuntak <br /> Lulusan terbaik Atletico Madrid
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img 
                    src="https://picsum.photos/300/225" 
                    class="bd-placeholder-img card-img-top" 
                    alt="Frontend Engineer" 
                    width="100%" 
                    height="225" 
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Antok Kiper <br />Peringkat 2 Tebaik Al-Nasr
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img 
                    src="https://picsum.photos/300/225" 
                    class="bd-placeholder-img card-img-top" 
                    alt="Frontend Engineer" 
                    width="100%" 
                    height="225" 
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Pedro Santosi <br />Lulusan terbaik Menchester United
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div> 
        </div> 
      </div>
      <br /><br /><br />
      
      {/* footer */}
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

export default App
