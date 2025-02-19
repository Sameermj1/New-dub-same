import React from 'react';

const YouTubeInput: React.FC<{ onUrlSubmit: (url: string) => void }> = ({ onUrlSubmit }) => {
    const [url, setUrl] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url) {
            onUrlSubmit(url);
            setUrl('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label htmlFor="youtube-url" className="mb-2 text-lg font-semibold">Enter YouTube URL:</label>
            <input
                type="text"
                id="youtube-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-md"
                placeholder="https://www.youtube.com/watch?v=example"
                required
            />
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
                Submit
            </button>
        </form>
    );
};

export default YouTubeInput;