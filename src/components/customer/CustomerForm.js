import React, { useState } from 'react';
import SuccessModal from "../../util/SuccessModal";
const CustomerForm = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [messageType, setMessageType] = useState(''); 

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate function
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', form);
      setSubmitted(true);
      setErrors({});

      setTimeout(() => {
               setMessageText('Record has been saved succesfully!')
               setMessageType('success');
               setShowSuccess(true);
            }, 500);

    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Customer Registration Form</h3>
      {/* {submitted && (
        <div className="alert alert-success" role="alert">
          Customer registered successfully!
        </div>
      )} */}
   
             <div>      
              <SuccessModal
                show={showSuccess}
                onClose={() => setShowSuccess(false)}
                messageText={messageText} 
                messageType={messageType}
              />
              </div> 

          


      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Name<span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email<span className="text-danger">*</span></label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone<span className="text-danger">*</span></label>
          <input
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Register Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
