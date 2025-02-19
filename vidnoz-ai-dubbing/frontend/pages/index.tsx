import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import YouTubeInput from '../components/YouTubeInput';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleUpload = (file) => {
    setLoading(true);
    // Handle file upload logic here
  };

  const handleYouTubeSubmit = (url) => {
    setLoading(true);
    // Handle YouTube URL submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Vidnoz AI Dubbing</h1>
      <FileUpload onUpload={handleUpload} />
      <YouTubeInput onSubmit={handleYouTubeSubmit} />
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default Home;