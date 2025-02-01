import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = () => {
  const teamMembers = [
    {
      name: "Marc Randolph",
      role: "CO FOUNDER",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis, perspiciatis ex aperiam nostrum quod.",
      img: "https://placehold.jp/380x350.png",
    },
    {
      name: "Jin Yuanying",
      role: "CO FOUNDER",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis, perspiciatis ex aperiam nostrum quod.",
      img: "https://placehold.jp/380x350.png",
    },
    {
      name: "Marc Tarpenning",
      role: "CO FOUNDER",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quae qui amet atque nemo. Exercitationem!",
      img: "https://placehold.jp/380x350.png",
    },
    {
      name: "Evan Williams",
      role: "CO FOUNDER",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita corrupti maxime sequi asperiores voluptate!",
      img: "https://placehold.jp/380x350.png",
    },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "",
    nextArrow: "",
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-slate-50 py-16 px-20">
      <div className="container mx-auto px-10">
        <p className="text-lg font-medium text-[#24cdd5] text-center">
          Quisque tellus risus, adipisci
        </p>
        <h3 className="text-4xl font-medium text-[#384141] text-center pt-1 pb-16">
          Meet Our Experts
        </h3>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="item hover:scale-[1.02] duration-500 group rounded-3xl px-4"
            >
              <img
                src={member.img}
                alt="team"
                className="w-full h-[350px] rounded relative"
              />
              <div className="absolute bg-[rgba(0,0,0,0.60)] w-1/3 top-0 right-0 bottom-[35%] rounded-r flex transform scale-0 group-hover:scale-75 transition-transform duration-700 ease-in-out delay-100">
                <ul className="items-center m-auto justify-center text-center text-sm font-extralight text-[#384141] rounded-full">
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-50 hover:text-[#fff] hover:bg-[#16b5ca] duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-50 hover:text-[#fff] hover:bg-[#16b5ca] duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-50 hover:text-[#fff] hover:bg-[#16b5ca] duration-300 shadow-md items-center justify-center leading-10 flex mb-3">
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="w-10 h-10 rounded-full hover:border-[#16b5ca] bg-slate-50 hover:text-[#fff] hover:bg-[#16b5ca] duration-300 shadow-md items-center justify-center leading-10 flex mb-2">
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-[22px] font-medium text-[#6a7382] pt-2">
                {member.name}
              </p>
              <span className="text-base font-medium text-[#6a7382]">
                {member.role}
              </span>
              <p className="text-sm font-light text-[#6a7382] w-[90%] pt-1">
                {member.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
