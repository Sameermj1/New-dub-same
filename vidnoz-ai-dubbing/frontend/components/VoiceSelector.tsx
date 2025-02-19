import React from 'react';

const VoiceSelector = ({ voices, selectedVoice, onVoiceChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="voice" className="block text-sm font-medium text-gray-700">
                Select AI Voice
            </label>
            <select
                id="voice"
                value={selectedVoice}
                onChange={(e) => onVoiceChange(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            >
                {voices.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                        {voice.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VoiceSelector;