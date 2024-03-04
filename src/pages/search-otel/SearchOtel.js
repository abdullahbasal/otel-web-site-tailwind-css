import React, { useState, useEffect } from "react";
import otelData from "../../db/data.json";
import { HotelCard } from "../../components/hotel-card/HotelCard";
import { useNavigate } from "react-router-dom";

export default function SearchOtel() {
  const navigate = useNavigate();
  const [otels, setOtels] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOtels, setFilteredOtels] = useState([]);
  const [visibleOtels, setVisibleOtels] = useState(5);

  useEffect(() => {
    setOtels(otelData.otels);
    setFilteredOtels(otelData.otels);
  }, []);

  const showMoreOtels = () => {
    setVisibleOtels((prevVisibleOtels) => prevVisibleOtels + 5);
  };

  const handleFilter = (e) => {
    e.preventDefault();

    const selectedCityLowerCase = selectedCity
      ? selectedCity.toLowerCase()
      : null;

    const minPriceNumber = Number(minPrice);
    const maxPriceNumber = Number(maxPrice);

    let filteredListings = otels;
    if (selectedCityLowerCase) {
      filteredListings = filteredListings.filter(
        (listing) =>
          listing.city && listing.city.toLowerCase() === selectedCityLowerCase
      );
    }

    filteredListings = filteredListings.filter(
      (listing) =>
        listing.price >= minPriceNumber && listing.price <= maxPriceNumber
    );

    if (selectedStars.length > 0) {
      filteredListings = filteredListings.filter((listing) =>
        selectedStars.includes(listing.stars.toString())
      );
    }

    if (searchTerm.trim() !== "") {
      filteredListings = filteredListings.filter((listing) =>
        listing.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredOtels(filteredListings);
  };

  return (
    <div className="gap-4 mt-10 mb-10 max-w-screen-xl  mx-auto px-1	">
      <h1 className="text-4xl font-extrabold dark:text-white">Oteller</h1>
      <div className="flex flex-wrap gap-5 small-view-center-aligment">
        <div className="h-max py-2.5 px-2.5 rounded-xl shadow">
          <form onSubmit={handleFilter} className="flex flex-col ">
            <h2 className="text-xl font-bold dark:text-white">
              Sonuçları Filtrele ({filteredOtels.length} Sonuç)
            </h2>

            <input
              type="text"
              placeholder="Otel Ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 px-3 py-2.5 mt-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />

            <div className="relative h-10 w-72 min-w-[200px] mt-4">
              <select
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Tüm Şehirler</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="muğla">Muğla</option>
                <option value="bodrum">Bodrum</option>
                <option value="izmir">İzmir</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                İl Seçimi
              </label>
            </div>

            {[1, 2, 3, 4, 5].map((star) => (
              <div className="inline-flex items-center" key={star}>
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="customStyle"
                >
                  <input
                    className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
                    id="customStyle"
                    type="checkbox"
                    value={star}
                    checked={selectedStars.includes(star.toString())}
                    onChange={(e) => {
                      const starValue = e.target.value;
                      setSelectedStars((prevStars) => {
                        if (prevStars.includes(starValue)) {
                          return prevStars.filter((star) => star !== starValue);
                        } else {
                          return [...prevStars, starValue];
                        }
                      });
                    }}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                {Array.from({ length: star }, () => "⭐").join("")}
              </div>
            ))}
            <label>
              <div className="w-72 mb-4">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Minimum Fiyat
                  </label>
                </div>
              </div>
            </label>
            <label>
              <div className="w-72 mb-4">
                <div className="relative w-full min-w-[200px] h-10">
                  <input
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Maksimum Fiyat
                  </label>
                </div>
              </div>
            </label>

            <button
              type="submit"
              className=" text-white text-lg  bg-yellow-400   font-semibold rounded-lg  px-5 py-2.5 "
            >
              Filtrele
            </button>
          </form>
        </div>

        <div className="mx-auto">
          {filteredOtels.slice(0, visibleOtels).map((otel) => (
            <HotelCard
              imgUrl={otel.imgUrl}
              name={otel.name}
              description={otel.description}
              city={otel.city}
              stars={otel.stars}
              price={otel.price}
              currency={otel.currency}
              key={otel.id}
              onClick={() => navigate(`/otels/${otel.name}`, { state: otel })}
            />
          ))}
        </div>

        {visibleOtels < filteredOtels.length && (
          <div className="text-center w-full">
            <button
              onClick={showMoreOtels}
              className=" text-white text-lg  bg-indigo-400   font-semibold rounded-lg  px-5 py-2.5 "
            >
              Daha Fazla Göster
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
