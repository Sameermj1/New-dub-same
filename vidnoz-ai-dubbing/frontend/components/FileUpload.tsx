import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
    const [dragging, setDragging] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    };

    const handleFileUpload = (file) => {
        setFileName(file.name);
        onFileUpload(file);
    };

    return (
        <div
            className={`border-2 border-dashed rounded-lg p-4 text-center ${dragging ? 'border-blue-500' : 'border-gray-300'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <p className="text-gray-500">Drag & drop your video file here or click to upload</p>
            <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0])}
            />
            <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => document.querySelector('input[type="file"]').click()}
            >
                Upload Video
            </button>
            {fileName && <p className="mt-2 text-gray-700">Selected file: {fileName}</p>}
        </div>
    );
};

export default FileUpload;