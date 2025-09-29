export default function Team () {
    return (
        <>
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

        </>
    )
}