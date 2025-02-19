import express from 'express';
import multer from 'multer';
import { processVideo } from '../services/ffmpegService';
import { generateDubbedAudio } from '../services/huggingFaceService';
import { transcribeAudio } from '../services/whisperService';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/process', upload.single('video'), async (req, res) => {
    try {
        const videoPath = req.file.path;
        const language = req.body.language;
        const voice = req.body.voice;

        // Extract audio from video
        const audioPath = await processVideo(videoPath);

        // Transcribe audio if needed
        const transcription = await transcribeAudio(audioPath);

        // Generate dubbed audio
        const dubbedAudioPath = await generateDubbedAudio(transcription, language, voice);

        // Merge dubbed audio back with original video
        const finalVideoPath = await processVideo(videoPath, dubbedAudioPath);

        res.status(200).json({ message: 'Video processed successfully', videoPath: finalVideoPath });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error processing video', error: error.message });
    }
});

export default router;