import FloatingPetals from '@/components/FloatingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import GanpatiAarti from '@/components/GanpatiAarti';
import ganpatiImage from '@/assets/ganpati-image.jpg';

const Index = () => {
  return (
    <div className="min-h-screen px-5 py-16 bg-festive-gradient overflow-auto touch-pan-y">
      <div className="festive-card w-full max-w-4xl p-10 mx-auto">
        {/* Garland Decoration */}
        <div className="garland-decoration" aria-hidden="true" />

        {/* Ganpati Image with Mooshak */}
        <div className="relative mb-4">
          <img 
            src={ganpatiImage} 
            alt="Lord Ganpati" 
            className="ganpati-image"
          />
          {/* Mooshak (Mouse) - Ganesha's Vehicle */}
          <div className="absolute -bottom-2 right-8 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 animate-bounce">
            <span className="text-2xl" role="img" aria-label="Mooshak - Ganesha's mouse vehicle">🐭</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="festive-title mb-2">
          Ganpati Bappa Morya! <span className="text-5xl">🪔</span>
        </h1>

        {/* Sanskrit Mantra */}
        <p className="festive-mantra mb-4">
          गणपति बाप्पा मोरया • गणेश चतुर्थी शुभकामनाएँ
        </p>

        {/* Gold Divider */}
        <div className="gold-divider mx-auto mb-5" aria-hidden="true" />

        {/* Blessing Message */}
        <p className="festive-blessing mb-6">
          May this Ganesh Chaturthi Bappa ji fulfill all what you want and give you all the happiness you want in life. 🙏
        </p>

        {/* Blessing Chips */}
        <div className="flex gap-4 justify-center flex-wrap mb-5" role="list" aria-label="Blessings">
          <span className="festive-chip" role="listitem">ॐ श्री गणेशाय नमः</span>
          <span className="festive-chip" role="listitem">Shubh • Labh</span>
          <span className="festive-chip" role="listitem">Sukh • Shanti</span>
        </div>

        {/* Audio Player */}
        <AudioPlayer />

        {/* Ganpati Aarti */}
        <GanpatiAarti />

        {/* Footer */}
        <div className="mt-8 text-sm opacity-80">
          Made with devotion and joy ✨
        </div>
      </div>

      {/* Floating Petals Animation */}
      <FloatingPetals />
    </div>
  );
};

export default Index;