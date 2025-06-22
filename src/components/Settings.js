import React from 'react'

export default function Settings() {
  
  return (
   <>
       <div className="container py-5">
      <h2 className="mb-4">Account Settings</h2>
      
      <form>
        {/* User Info */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="••••••••"
          />
        </div>

        {/* Settings Toggles */}
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="notifications"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="notifications">
            Email Notifications
          </label>
        </div>

        <div className="form-check form-switch mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkMode"
          />
          <label className="form-check-label" htmlFor="darkMode">
            Enable Dark Mode
          </label>
        </div>

        {/* Save Button */}
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
   </>
  )
}
