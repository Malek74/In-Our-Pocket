import React, { useState, useRef } from "react";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const uploadFile = () => {
    // Here you can write code to upload the file to your server
    // For demonstration, I'm just logging the file details
    console.log("Uploading file:", selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        className="border border-gray-300 border-dashed rounded-lg p-8 text-center cursor-pointer shadow-md w-96 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
        onClick={() => inputRef.current?.click()}
      >
        <p className="text-gray-500 text-lg">Drag & Drop Your Files</p>
        {selectedFile && (
          <div className="mt-4">
            <p className="text-gray-600 mb-2">
              Selected file: {selectedFile.name}
            </p>
          </div>
        )}
      </div>
      <input
        type="file"
        className="hidden"
        onChange={handleFileSelect}
        ref={inputRef}
      />
      {!selectedFile && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => inputRef.current?.click()}
        >
          Select Files
        </button>
      )}
      {selectedFile && (
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          onClick={uploadFile}
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default FileUploader;
