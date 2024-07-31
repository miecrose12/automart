import React, { useState } from "react";

const CarPost = () => {
  const [formData, setFormData] = useState({
    carName: "",
    imageUrl: "",
    description: "",
    modelName: "",
    modelYear: "",
    color: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen car flex items-center justify-center">
      <div className="bg-white p-8 mt-3 mb-3 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-9">Create Car Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="carName"
              className="block text-gray-700 font-bold mb-2"
            >
              Car Name
            </label>

            <input
              type="text"
              id="carName"
              name="carName"
              value={formData.carName}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter record"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Price"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="modelName"
              className="block text-gray-700 font-bold mb-2"
            >
              Model Name
            </label>
            <input
              type="text"
              id="modelName"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="modelYear"
              className="block text-gray-700 font-bold mb-2"
            >
              Model Year
            </label>
            <input
              type="Text"
              id="modelYear"
              name="modelYear"
              value={formData.modelYear}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Year"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="color"
              className="block text-gray-700 font-bold mb-2"
            >
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Color"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-gray-700 font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="file"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mt-4 mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              type="text"
              id="sescription"
              name="description"
              value={formData.description}
              onChange={handleChange}
             className="shadow appearance-none border border-gray-300 rounded w-full py-5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarPost;
