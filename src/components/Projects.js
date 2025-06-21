import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A responsive web application built with React and Bootstrap.",
      image: "https://via.placeholder.com/500x300",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with secure checkout and user dashboard.",
      image: "https://via.placeholder.com/500x300",
    },
    {
      title: "Project Three",
      description: "Mobile-first design with smooth animations and API integration.",
      image: "https://via.placeholder.com/500x300",
    },
  ];

  return (
    <>
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src="/pexels-pixabay-220769.jpg"
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
              <div className="card-footer text-center bg-white border-top-0">
                <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

