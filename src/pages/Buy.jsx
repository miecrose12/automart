import React, { useState } from 'react';

const ContactUs = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    carName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formDataToSend = new FormData(e.target);

    formDataToSend.append("access_key", "63031018-92ba-48e7-b65a-5a850af16113");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          firstName: '',
          surname: '',
          carName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Buy your ride now</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Information */}
        <div className="lg:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +234 7059036337
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                itobiyeblossom75@gmail.com
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                +234 7059036337
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" required />
              </div>
              <div>
                <label htmlFor="surname" className="block text-sm font-semibold text-gray-700 mb-2">Surname</label>
                <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" required />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="carName" className="block text-sm font-semibold text-gray-700 mb-2">Name of Car to be Purchased</label>
              <input type="text" id="carName" name="carName" value={formData.carName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" required />
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" required />
            </div>
            <div className="mt-6">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">Your Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" required />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"></textarea>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Send Message</button>
            </div>
          </form>
          {result && <p className="mt-4 text-center font-semibold">{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;