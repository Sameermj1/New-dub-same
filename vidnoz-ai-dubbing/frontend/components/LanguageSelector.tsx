import React from 'react';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    // Add more languages as needed
];

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                Select Language
            </label>
            <select
                id="language"
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            >
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;