import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio playback not available');
      setHasError(true);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const handleAudioError = () => {
    setHasError(true);
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        loop
        onEnded={handleAudioEnd}
        onError={handleAudioError}
        preload="metadata"
      >
        {/* Using a more reliable audio source */}
        <source 
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" 
          type="audio/wav" 
        />
        {/* Fallback for different formats */}
        <source 
          src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmI=" 
          type="audio/wav" 
        />
      </audio>
      
      <button
        onClick={toggleAudio}
        className="festive-button"
        aria-label={isPlaying ? "Pause chant" : "Play chant"}
        disabled={hasError}
      >
        <div className="flex items-center gap-2">
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          {hasError ? "Audio Unavailable" : isPlaying ? "Pause Aarti" : "Play Aarti"}
        </div>
      </button>
    </div>
  );
};

export default AudioPlayer;