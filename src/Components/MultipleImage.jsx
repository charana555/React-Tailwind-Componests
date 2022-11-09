import React, { useState } from "react";

const MultipleImage = () => {
  const [state, setState] = useState([]);
  const [imageString, setImageString] = useState([]);

  const displaySomthing = async () => {
    const images = await Promise.all(
      [...state].map((imageInput) => convertBase64(imageInput))
    );
    setImageString(...images);
  };

  const handleChange = (e) => {
    const file = e.target.files;
    const arrayFiles = Array.from(file);
    setState(...state, arrayFiles);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);

      filereader.onload = () => {
        resolve(filereader.result);
      };

      filereader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="text-center p-4">
      <div>
        <h2 className=" text-3xl font-semibold my-5 ">Upload images</h2>
      </div>
      <h3 className=" text-2xl my-5 text-gray-600 ">Images</h3>
      <input onChange={(e) => handleChange(e)} type="file" multiple />
      <button
        className=" bg-green-700 text-white rounded-lg px-3 py-2"
        onClick={displaySomthing}
      >
        Submit
      </button>
    </div>
  );
};

export default MultipleImage;
