import { useState } from "react";
import {
  FaSearchPlus,
  FaTimes,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["all", "digital", "design", "brand", "graphics"];
  const portfolioItems = [
    {
      id: 1,
      category: ["brand", "graphics"],
      image: "portfolio-1.jpg",
    },
    {
      id: 2,
      category: ["brand", "graphics", "design"],
      image: "portfolio-2.jpg",
    },
    {
      id: 3,
      category: ["design", "digital", "graphics"],
      image: "portfolio-3.jpg",
    },
    {
      id: 4,
      category: ["brand", "graphics"],
      image: "portfolio-4.jpg",
    },
    {
      id: 5,
      category: ["graphics", "design"],
      image: "portfolio-5.jpg",
    },
    {
      id: 6,
      category: ["brand", "digital", "design"],
      image: "portfolio-6.jpg",
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => filter === "all" || item.category.includes(filter)
  );

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-lg font-normal font-Nunito-font text-primary text-center">
            Let's Explore Out
          </span>
          <h2 className="text-5xl font-semibold text-primary font-Montez text-center py-2">
            Our Portfolio
          </h2>
          <p className="mt-4 text-brand text-base font-Opensans font-normal mx-auto w-[45%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores
            omnis provident quam reiciendis voluptatum.
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-Opensans transition-all duration-300 ${
                filter === cat ? "text-secandari" : " text-brand"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.28)] bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-all duration-300">
                <button
                  onClick={() => openModal(index)}
                  className="text-white text-xl"
                >
                  <FaSearchPlus />
                </button>
                <h4 className="text-white text-lg font-semibold mt-2">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(6,5,5,0.87)] bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-xl p-2"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-4 text-white text-2xl p-2"
            onClick={prevImage}
          >
            <FaCaretLeft />
          </button>
          <img
            src={filteredItems[currentIndex].image}
            alt={filteredItems[currentIndex].title}
            className="max-h-[80vh] max-w-[90vw] cursor-pointer rounded-md"
          />
          <button
            className="absolute right-4 text-white text-2xl font-Montez p-2"
            onClick={nextImage}
          >
            <FaCaretRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
