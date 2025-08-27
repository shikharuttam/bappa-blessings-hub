import FloatingPetals from '@/components/FloatingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import ganpatiImage from '@/assets/ganpati-image.jpg';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-16 bg-festive-gradient">
      <div className="festive-card w-full max-w-4xl p-10">
        {/* Garland Decoration */}
        <div className="garland-decoration" aria-hidden="true" />

        {/* Ganpati Image */}
        <img 
          src={ganpatiImage} 
          alt="Lord Ganpati" 
          className="ganpati-image mb-4"
        />

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
          Bhoomi ji May Ganpati ji bring you <strong>love</strong>, <strong>peace</strong>, 
          prosperity, and everything you truly wish for in life. 🙏
        </p>

        {/* Blessing Chips */}
        <div className="flex gap-4 justify-center flex-wrap mb-5" role="list" aria-label="Blessings">
          <span className="festive-chip" role="listitem">ॐ श्री गणेशाय नमः</span>
          <span className="festive-chip" role="listitem">Shubh • Labh</span>
          <span className="festive-chip" role="listitem">Sukh • Shanti</span>
        </div>

        {/* Audio Player */}
        <AudioPlayer />

        {/* Footer */}
        <div className="mt-5 text-sm opacity-80">
          Made with devotion and joy ✨
        </div>
      </div>

      {/* Floating Petals Animation */}
      <FloatingPetals />
    </div>
  );
};

export default Index;