import { useState } from "react";
import { Heart } from "lucide-react";

const countryData = [
  {
    name: "Germany",
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "London",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Australia",
    img: "https://images.unsplash.com/photo-1506976785307-8732e854ad89?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chicago",
    img: "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TopListingPlaces() {
  const [activeCountry, setActiveCountry] = useState(countryData[0]);
  const [boxLikes, setBoxLikes] = useState({});
  const [bigLike, setBigLike] = useState(0);

  const handleBoxLike = (country) => {
    setBoxLikes((prev) => ({
      ...prev,
      [country]: (prev[country] || 0) + 1,
    }));
  };

  return (
    <div className="relative w-full  bg-cover bg-center text-white mt-14 p-4 sm:p-6 flex flex-col items-center">
      {/* 🔥 CENTER MAIN HEADING + TOP GAP */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
        Top Listing Country
      </h2>

      {/* MAIN SECTION BELOW HEADING */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* LEFT: GRID */}
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3">
            {countryData.map((c, i) => (
              <div
                key={i}
                className="h-[13.7rem] rounded-2xl bg-cover bg-center shadow relative cursor-pointer hover:scale-[1.03] transition"
                style={{ backgroundImage: `url(${c.img})` }}
                onClick={() => setActiveCountry(c)}
              >
                <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

                <h3 className="absolute bottom-2 left-2 text-white text-sm sm:text-lg font-semibold drop-shadow">
                  {c.name}
                </h3>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBoxLike(c.name);
                  }}
                  className="absolute top-2 right-2 bg-white/20 backdrop-blur-xl px-2 py-0.5 sm:px-3 sm:py-1 rounded-xl border border-white/40 text-white flex items-center gap-1 hover:bg-white/30 text-xs sm:text-sm"
                >
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                  {boxLikes[c.name] || 0}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: BIG IMAGE */}
        <div
          className="flex-1 h-60 sm:h-72 md:h-96 lg:h-[450px] rounded-3xl bg-cover bg-center shadow relative p-4 sm:p-6"
          style={{ backgroundImage: `url(${activeCountry.img})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white drop-shadow">
                {activeCountry.name}
              </h1>

              <p className="mt-2 text-white/90 text-sm sm:text-lg max-w-md drop-shadow">
                Discover premium real estate deals in {activeCountry.name}.
              </p>
            </div>

            <button
              onClick={() => setBigLike(bigLike + 1)}
              className="bg-white/25 backdrop-blur-xl border border-white/40 px-3 py-1 sm:px-5 sm:py-2 rounded-xl flex items-center gap-2 w-max text-white hover:bg-white/35 transition text-sm sm:text-base"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" /> {bigLike} Likes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
