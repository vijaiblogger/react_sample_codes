import React from 'react'

export default function About() {
  return (
   <>
     <section class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img src="/pexels-pixabay-220769.jpg"  style={{width:"600px" , height:"180px"}} class="img-fluid rounded" alt="About Image"></img>
        </div>
        <div class="col-md-6">
          <h2>Our Mission</h2>
          <p>
            We aim to provide top-notch digital solutions that empower businesses to grow.
            Our team believes in innovation, excellence, and building long-term partnerships with clients.
          </p>
          <p>
            Founded in 2020, we’ve grown into a diverse group of designers, developers, and strategists
            working together to create impact.
          </p>
        </div>
      </div>
    </div>
  </section>

  
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Meet Our Team</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card team-card shadow-sm">
           <img src="/pexels-high-rollick-studio-553091901-16845100.jpg" style={{width:"307px" , height:"150px"}} class="card-img-top" alt="Team Member"></img>
            <div class="card-body text-center">
              <h5 class="card-title">Jane Doe</h5>
              <p class="card-text">CEO & Co-Founder</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card team-card shadow-sm">
            <img src="/pexels-high-rollick-studio-553091901-16845100.jpg" style={{width:"307px" , height:"150px"}} class="card-img-top" alt="Team Member"></img>
            <div class="card-body text-center">
              <h5 class="card-title">John Smith</h5>
              <p class="card-text">CTO</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card team-card shadow-sm">
           <img src="/pexels-high-rollick-studio-553091901-16845100.jpg" style={{width:"307px" , height:"150px"}} class="card-img-top" alt="Team Member"></img>
            <div class="card-body text-center">
              <h5 class="card-title">Emily Johnson</h5>
              <p class="card-text">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}
