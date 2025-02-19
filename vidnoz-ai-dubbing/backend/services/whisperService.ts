import axios from 'axios';

const WHISPER_API_URL = 'https://api.whisper.ai/v1/transcribe'; // Replace with actual Whisper API endpoint
const WHISPER_API_KEY = process.env.WHISPER_API_KEY; // Ensure to set your API key in environment variables

export const transcribeAudio = async (audioFilePath: string): Promise<string> => {
    const formData = new FormData();
    formData.append('file', audioFilePath);

    try {
        const response = await axios.post(WHISPER_API_URL, formData, {
            headers: {
                'Authorization': `Bearer ${WHISPER_API_KEY}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data.transcription; // Adjust based on actual response structure
    } catch (error) {
        console.error('Error transcribing audio:', error);
        throw new Error('Transcription failed');
    }
};