import React from 'react'

export default function Contact() {
  return (
    <>

    <section className="py-5">
      <div className="container">
        <div className="row g-5">

          {/* Contact Form */}
          <div className="col-md-6">
            <h2 className="mb-4">Send a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <h2 className="mb-4">Contact Information</h2>
            <p><strong>Address:</strong><br />123 Main Street,<br />City, Country 12345</p>
            <p><strong>Email:</strong><br /><a href="mailto:info@example.com">info@example.com</a></p>
            <p><strong>Phone:</strong><br />+1 (123) 456-7890</p>
            <p><strong>Business Hours:</strong><br />Mon - Fri, 9:00 AM to 6:00 PM</p>

            {/* Google Map */}
            <div className="mt-4 ratio ratio-16x9">
              <iframe
                src="https://maps.google.com/maps?q=New York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>      
    </>
  )
}
