# Vidnoz AI Dubbing

## Overview
Vidnoz AI Dubbing is a web application that allows users to upload videos or provide YouTube URLs for dubbing. The application utilizes advanced AI technologies to generate dubbed audio in various languages and voices, providing a seamless experience for users looking to create multilingual content.

## Features
- Video upload and YouTube URL input for dubbing.
- Language and voice selection for customized dubbing.
- Preview of dubbed videos with download options.
- Responsive design with modern UI using Tailwind CSS.
- Drag-and-drop file upload functionality.
- Real-time processing updates.

## Project Structure
```
vidnoz-ai-dubbing
├── frontend
│   ├── pages
│   │   ├── index.tsx         # Homepage for video upload and YouTube input
│   │   ├── dubbing.tsx       # Dubbing page for language and voice selection
│   │   └── results.tsx       # Results page for dubbed video preview and download
│   ├── components
│   │   ├── FileUpload.tsx     # Component for file upload
│   │   ├── YouTubeInput.tsx   # Component for YouTube URL input
│   │   ├── LanguageSelector.tsx # Component for language selection
│   │   └── VoiceSelector.tsx   # Component for voice selection
│   ├── styles
│   │   └── globals.css        # Global styles
│   ├── public                 # Static assets
│   └── tailwind.config.js     # Tailwind CSS configuration
├── backend
│   ├── routes
│   │   └── processVideo.ts    # API route for processing videos
│   ├── services
│   │   ├── ffmpegService.ts    # Service for FFmpeg operations
│   │   ├── huggingFaceService.ts # Service for Hugging Face API
│   │   └── whisperService.ts   # Service for Whisper API
│   ├── app.ts                 # Entry point for the backend application
│   └── package.json           # Backend dependencies and scripts
├── firebase.json              # Firebase configuration
├── vercel.json                # Vercel deployment configuration
└── README.md                  # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vidnoz-ai-dubbing.git
   cd vidnoz-ai-dubbing
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

4. Configure Firebase and Vercel settings as per your requirements.

5. Run the application:
   - For frontend:
     ```
     cd frontend
     npm run dev
     ```
   - For backend:
     ```
     cd backend
     npm start
     ```

## Usage
- Navigate to the homepage to upload a video or enter a YouTube URL.
- Proceed to the dubbing page to select the desired language and voice.
- After processing, view the results on the results page where you can preview and download the dubbed video.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.