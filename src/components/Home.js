import React from 'react'

export default function Home() {
  return (
    <>
    
      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">Fast & Responsive</h5>
                  <p className="card-text">Built with Bootstrap 5, our design adapts seamlessly to any device.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">Modern UI</h5>
                  <p className="card-text">Clean layout and intuitive navigation for a great user experience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">Easy to Customize</h5>
                  <p className="card-text">Bootstrap utility classes make it easy to tweak and extend.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/pexels-high-rollick-studio-553091901-16845100.jpg" style={{width:"500px", height:"187px"}} alt="About" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <p>We are a team of developers and designers passionate about building high-quality websites with modern technologies. Our mission is to simplify web development through elegant and reusable components.</p>
              <a href="/contactUs" className="btn btn-outline-primary mt-3">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-primary text-white">
        <div className="container">
          <h2>Ready to Start?</h2>
          <p className="mb-4">Let us help you build something amazing today.</p>
          <a href="/contactUs" className="btn btn-light btn-lg">Contact Us</a>
        </div>
      </section>
    </>
  )
}
