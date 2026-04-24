import React from "react";
// อย่าลืม Import รูปของหนูนะจ๊ะ หรือจะใช้ Placeholder ที่พี่สาวใส่ไว้ก่อนก็ได้จ้ะ
// import artistImg1 from '../assets/images/bob-ross.jpg';
// import artistImg2 from '../assets/images/painting-girl.jpg';
// import artistImg3 from '../assets/images/3d-character.jpg';

const ArtistLove = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden font-['Anuphan',_sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* ================= 1. ด้านซ้าย: TEXT SECTION ================= */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
          {/* ฟอนต์ Arizonia ลายมือพลิ้วๆ จ้ะ */}
          <h2 className="text-5xl lg:text-7xl font-['Arizonia',_cursive] text-gray-800 leading-tight mb-2">
            Support
          </h2>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 uppercase tracking-tighter leading-none">
            The Artists <br /> You Love
          </h2>

          {/* เส้นใต้เก๋ๆ เหมือนในดีไซน์ */}
          <div className="w-48 h-1.5 bg-black mt-6 rounded-full"></div>
        </div>

        {/* ================= 2. ด้านขวา: THE SKEW GRID (หั่น 3 ภาพ) ================= */}
        {/* ตัวแม่ใส่ -skew-x-[12deg] เพื่อบิดทั้งแผงให้เฉียงจ้ะ */}
        <div className="w-full md:w-3/5 relative flex overflow-hidden border-[12px] border-white transform -skew-x-[12deg] shadow-2xl">
          {/* ก้อนที่ 1: Bob Ross Style */}
          <div className="w-1/3 aspect-[3/5] overflow-hidden group border-r-[12px] border-white">
            <img
              src="https://via.placeholder.com/400x700?text=Artist+1"
              alt="Artist 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform skew-x-[12deg] scale-125"
            />
          </div>

          {/* ก้อนที่ 2: Cartoon Style */}
          <div className="w-1/3 aspect-[3/5] overflow-hidden group border-r-[12px] border-white">
            <img
              src="https://via.placeholder.com/400x700?text=Artist+2"
              alt="Artist 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform skew-x-[12deg] scale-125"
            />
          </div>

          {/* ก้อนที่ 3: 3D Character (พื้นหลังสีฟ้าเทอควอยซ์) */}
          <div className="w-1/3 aspect-[3/5] overflow-hidden group bg-[#2ED1E1]">
            <img
              src="https://via.placeholder.com/400x700/2ED1E1/FFFFFF?text=Artist+3"
              alt="Artist 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform skew-x-[12deg] scale-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistLove;
