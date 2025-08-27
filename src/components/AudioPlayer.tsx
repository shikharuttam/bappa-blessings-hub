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
        {/* Simple bell-like tone for aarti */}
        <source 
          src="data:audio/wav;base64,UklGRhABAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YWwAAADCyN7K1N/h0uDd0+Le3tPj3d7Q29vT3+Db0t7i0+Hc1+De1N/j2d3f2NXl1d/i0+Pa4dLh2+HU49bh2N7c09vh2uDb1d7i1uLe1dne2d3g1uDc19/e0uPa2d7b2OHc1dzg2dne3NTb4N3f2dje3tjb3NfX497e4NXd3NXV4Nrg0+Db1+Dd1t/h1d/j2Nfh2t3e3dPi29/a3d7d29jg3t7f2djc3d3b2Nvd397j0+La19/g1t/j1d/k2Nna2+Df3dff1+La3+De2Nvf3dji2tze3dTi3Nzf3dPh2t/j1+Dd2+Db3NzV2+Le19/g1OLd1dri1eLb3t3g3dXh3t7j3NvM3dLg3dPe39De1d/i3t7g3M7j0+DW4uDa0+Lb3tzg3t3c0NXd3t/a3tvc3OHd3tbe3d3U4N7j2tvU3eTc3+TW5N/g3+LV3eHc3+HZ3N3i3d7Y3Njg4N3Y3NXi3uHa3NHl3eXX3tva3+Pj2dXd3+De4uDZ5tTi4OHc2t7l3N7h3Nfg4d/V4+LU3+PZ3d7e3Nng4N3e4tbg3tvb2+DY3+Lg2+Hd2N7h3NTh4Njg29rV5N7c3+HW0+Pe3d7f3N7b29rn1tvh3uHf2OHb2N/j3NTi3trb2+DT4eHd4dne5dvd3uDW19zb2N7l09nh4drh29ri4N7b3tve5dvV49ba3uDf3N3g3Nrd5dfb3tvf2dvg4NTh3Nrc4d7Z3uHX3d7c2+Dc0t7g3Nze4d/f3t7j3t3f3tzf5N7c4N7Y3NvU3t7g3eLa2+Hj2+Db4NPg3t3d2eHc2+Le3eLV3t7b3N/j3dva3+Ld3N7e3NXe3+Dg2uDa2t7g3N3e39Tc5tba3d7h3dzg3tje4Nje29ze3uHh2NTd3t3d3t7f3uHe3+Pe39ra3t7i39rg2+Df5Nne3t7f3N7g4Nve3t3e3t7f3+Dc3t7e3N3e4N7g3N3f39/f2+Dg3N7g3d/e39/g3d7g3t/e3+Dc3t7g3N/e3t/g3t7g3d/e3+Dc3t7g3N/e3+Dc3t7e3t/g3d7e39/g3d7g3t/e3+Dc3t7g3N/f3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e39/g3d7g3t/e3+Dc3t7e3t/g3d7e39/g3d7g3t/e3+Dc3t7g3N/e3t/g3d7g3t/e3+Dc3t7g3N4AAAA=" 
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