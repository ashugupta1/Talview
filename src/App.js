import React, { useState } from "react";
import logo from "./assets/logo.png";
import quote from "./assets/quote.png";
import "./App.css";
import Talbox from "./components/TalBox/talbox"; // Import Talbox component

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreeTerms: false,
    consentData: false,
  });

  const [isChatboxOpen, setIsChatboxOpen] = useState(false); // State to manage chatbox visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  // Toggle the chatbox visibility
  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className="background-image">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="container">
        <div className="left-container">
          <img src={quote} alt="quote" className="quote" />
        </div>
        <div className="right-container">
          <h1 className="header">REGISTER HERE</h1>

          <div className="section-container">
            <form onSubmit={handleSubmit}>
              <div className="name-group">
                <div className="form-group">
                  <label>
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter First Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  Email Id <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input email-width"
                  placeholder="Enter Email ID"
                  required
                />
                <p className="email-help-text">Don’t have an Email Id?</p>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  I agree to the{" "}
                  <a href="#" className="link">
                    Terms & Conditions
                  </a>{" "}
                  &{" "}
                  <a href="#" className="link">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consentData"
                    checked={formData.consentData}
                    onChange={handleChange}
                  />
                  I give my consent to Talview to capture my data
                </label>
              </div>

              <div className="btn">
                <button type="submit" className="submit-btn">
                  GET STARTED
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Chatbox toggle button */}
      <button className="chatbox-toggle-btn" onClick={toggleChatbox}>
        {isChatboxOpen ? "Close Talbox" : "Open Talbox"}
      </button>

      {/* Conditionally render Talbox */}
      {isChatboxOpen && <Talbox />}
    </div>
  );
};

export default App;
