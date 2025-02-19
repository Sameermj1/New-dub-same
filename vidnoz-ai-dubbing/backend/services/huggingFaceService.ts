import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/';
const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY;

export const generateDubbedAudio = async (text: string, model: string) => {
    try {
        const response = await axios.post(
            `${HUGGING_FACE_API_URL}${model}`,
            { inputs: text },
            {
                headers: {
                    Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error generating dubbed audio:', error);
        throw new Error('Failed to generate dubbed audio');
    }
};