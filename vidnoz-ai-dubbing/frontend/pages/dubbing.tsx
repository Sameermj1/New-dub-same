import { useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import VoiceSelector from '../components/VoiceSelector';

const DubbingPage = () => {
    const [language, setLanguage] = useState('');
    const [voice, setVoice] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleDubbingRequest = async () => {
        setIsLoading(true);
        // Logic to submit dubbing request goes here
        // After processing, set isLoading to false
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Select Dubbing Options</h1>
            <LanguageSelector selectedLanguage={language} setSelectedLanguage={setLanguage} />
            <VoiceSelector selectedVoice={voice} setSelectedVoice={setVoice} />
            <button 
                onClick={handleDubbingRequest} 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                disabled={isLoading || !language || !voice}
            >
                {isLoading ? 'Processing...' : 'Start Dubbing'}
            </button>
        </div>
    );
};

export default DubbingPage;