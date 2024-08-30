import React, { useState } from "react";
import axios from "axios";

const CarPost = () => {
  const [formData, setFormData] = useState({
    car_name: "",
    desc: "",
    image: "",
    model_name: "",
    model_year: "",
    color: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('AutoCarAppToken');
    if (!token) {
      setError("No authentication token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://auto-mart-apis-nodejs-mongodb.onrender.com/api/cars/cloudinary', 
        formData,
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Car post created:", response.data);
      // Redirect to car list page after successful post
      // You might want to use react-router's useNavigate hook here
    } catch (err) {
      setError("Failed to create car post. Please try again.");
      console.error("Error creating car post:", err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen car flex items-center justify-center">
      <div className="bg-white p-8 mt-3 mb-3 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-9">Create Car Post</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="car_name" className="block text-gray-700 font-bold mb-2">
              Car Name
            </label>
            <input
              type="text"
              id="car_name"
              name="car_name"
              value={formData.car_name}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter car name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter description"
              rows="4"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="model_name" className="block text-gray-700 font-bold mb-2">
              Model Name
            </label>
            <input
              type="text"
              id="model_name"
              name="model_name"
              value={formData.model_name}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter model name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="model_year" className="block text-gray-700 font-bold mb-2">
              Model Year
            </label>
            <input
              type="text"
              id="model_year"
              name="model_year"
              value={formData.model_year}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter model year"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700 font-bold mb-2">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter color"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter price"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarPost;