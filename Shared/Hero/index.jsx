export default function Hero () {
    return (
        <>
            <div  className="hero">
            <div className="overflow-hidden" style= {{ maxHeight: "30vh"}}>
            <div className="container px-5 text-center">
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
            <h1 className="display-4 fw-bold text-body-emphasis text-center">Buat Website Impianmu Bersama <br /> Lightfurry</h1>
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
        </>
    )
}