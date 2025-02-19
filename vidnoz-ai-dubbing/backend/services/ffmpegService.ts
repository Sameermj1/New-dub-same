import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

export const extractAudio = async (videoPath: string, outputAudioPath: string): Promise<void> => {
    const command = `ffmpeg -i ${videoPath} -q:a 0 -map a ${outputAudioPath}`;
    await execPromise(command);
};

export const mergeAudioWithVideo = async (videoPath: string, audioPath: string, outputVideoPath: string): Promise<void> => {
    const command = `ffmpeg -i ${videoPath} -i ${audioPath} -c:v copy -c:a aac -strict experimental ${outputVideoPath}`;
    await execPromise(command);
};