const GanpatiAarti = () => {
  return (
    <div className="aarti-container bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mt-6 border border-white/20">
      <h2 className="text-2xl font-bold text-center mb-6 text-festive-primary">
        श्री गणेश आरती
      </h2>
      
      <div className="aarti-verses space-y-4 text-center">
        <div className="verse animate-fade-in">
          <p className="text-lg font-semibold text-festive-text mb-2">
            सुखकर्ता दुःखहर्ता वार्ता विघ्नाची।<br />
            नुरवी पूर्वी प्रेम कृपा जयाची।।
          </p>
          <p className="text-sm text-festive-text/80 italic">
            Sukhakarta Dukhharta Varta Vighnachi<br />
            Nuravi Purvi Prem Krupa Jayachi
          </p>
        </div>

        <div className="verse animate-fade-in">
          <p className="text-lg font-semibold text-festive-text mb-2">
            सर्वांगी सुंदर उटी शेंदुराची।<br />
            कंठी झळके माळ मुक्ताफळांची।।
          </p>
          <p className="text-sm text-festive-text/80 italic">
            Sarvangi Sundar Uti Shendurachi<br />
            Kanthi Jhalke Maal Muktaphalanchi
          </p>
        </div>

        <div className="chorus bg-gradient-to-r from-festive-gold/20 to-festive-accent/20 rounded-lg p-3 my-4 animate-pulse">
          <p className="text-xl font-bold text-festive-primary">
            जय देव जय देव जय मंगलमूर्ति।<br />
            दर्शनमात्रे मन कामना पूर्ति।।
          </p>
          <p className="text-sm text-festive-text/80 italic mt-2">
            Jay Dev Jay Dev Jay Mangalmurti<br />
            Darshan Matre Man Kamana Purti
          </p>
        </div>

        <div className="verse animate-fade-in">
          <p className="text-lg font-semibold text-festive-text mb-2">
            रत्नखचित फरा तुज गौरीकुमारा।<br />
            चंदनाची उटी कुंकुमकेशरा।।
          </p>
          <p className="text-sm text-festive-text/80 italic">
            Ratnakhachit Phara Tuj Gaurikumara<br />
            Chandanachi Uti Kunkumkeshara
          </p>
        </div>

        <div className="verse animate-fade-in">
          <p className="text-lg font-semibold text-festive-text mb-2">
            हिरवळीत कितुनिया निजसेवका।<br />
            सुमनांची तुज माळ अर्पिली आम्हा।।
          </p>
          <p className="text-sm text-festive-text/80 italic">
            Hiravlit Kituniya Nijsevaka<br />
            Sumanchi Tuj Maal Arpili Amha
          </p>
        </div>

        <div className="final-prayer mt-6 p-4 bg-festive-primary/10 rounded-xl animate-scale-in">
          <p className="text-lg font-bold text-festive-primary text-center">
            ॐ श्री गणेशाय नमः
          </p>
          <p className="text-sm text-festive-text/80 text-center mt-2">
            Om Shri Ganeshaya Namah
          </p>
        </div>
      </div>
    </div>
  );
};

export default GanpatiAarti;