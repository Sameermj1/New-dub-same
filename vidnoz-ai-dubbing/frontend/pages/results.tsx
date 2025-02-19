import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ResultsPage = () => {
    const router = useRouter();
    const { videoUrl } = router.query; // Assuming videoUrl is passed as a query parameter
    const [dubbedVideo, setDubbedVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (videoUrl) {
            // Fetch the dubbed video from the backend
            const fetchDubbedVideo = async () => {
                try {
                    const response = await fetch(`/api/getDubbedVideo?videoUrl=${videoUrl}`);
                    const data = await response.json();
                    setDubbedVideo(data.dubbedVideoUrl);
                } catch (error) {
                    console.error('Error fetching dubbed video:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchDubbedVideo();
        }
    }, [videoUrl]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Dubbed Video Preview</h1>
            {dubbedVideo ? (
                <>
                    <video className="w-full max-w-lg mb-4" controls>
                        <source src={dubbedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <a
                        href={dubbedVideo}
                        download
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Download Dubbed Video
                    </a>
                </>
            ) : (
                <p>No dubbed video available.</p>
            )}
        </div>
    );
};

export default ResultsPage;