import React, { useState, useRef } from "react";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  interface FileData {
    name: string;
    type: string;
    size: number;
    data: string; // Base64 string
  }
  const uploadFile = () => {
    // Here you can write code to upload the file to your server
    // For demonstration, I'm just logging the file details
    if (selectedFile) {
      const blob = new Blob([selectedFile], { type: selectedFile.type });

      // Convert Blob to a Base64 encoded string
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        const base64String = reader.result as string;

        // Store the File data in localStorage
        const fileData: FileData = {
          name: selectedFile.name,
          type: selectedFile.type,
          size: selectedFile.size,
          data: base64String,
        };
        localStorage.setItem("fileData", JSON.stringify(fileData));
      };
    }
    console.log("Uploading file:", JSON.stringify(selectedFile));
  };
  const getFileFromLocalStorage = (): File | null => {
    const storedData = localStorage.getItem("fileData");
    if (storedData) {
      const fileData: FileData = JSON.parse(storedData);
      const byteCharacters = atob(fileData.data.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: fileData.type });

      // Create a new File object
      const file = new File([blob], fileData.name, {
        type: fileData.type,
        lastModified: Date.now(),
      });

      return file;
    }
    return null;
  };

  const downloadFile = () => {
    const file = getFileFromLocalStorage();
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        className="border border-gray-300 border-dashed rounded-lg p-8 text-center cursor-pointer shadow-md w-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
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
      {/* <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={downloadFile}
      >
        Download
      </button> */}
    </div>
  );
};

export default FileUploader;
