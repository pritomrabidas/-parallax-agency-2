const BlogSection = () => {
  const blogPosts = [
    {
      title: "Best Practices for Client Communication.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, rerum?",
      image: "https://placehold.jp/380x255.png",
      date: "2 YEARS AGO",
    },
    {
      title: "Top 10 Digital Marketing Trends for 2022.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, omnis?",
      image: "https://placehold.jp/380x255.png",
      date: "2 YEARS AGO",
    },
    {
      title: "The Role of Influencer Marketing in 2022.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, veniam!",
      image: "https://placehold.jp/380x255.png",
      date: "2 YEARS AGO",
    },
  ];
  return (
    <section id="blog" className="bg-slate-100 pt-16 pb-24">
      <div className="container mx-auto px-10">
        <div className="text-center">
          <p className="text-lg font-medium text-[#24cdd5]">Read Out Our</p>
          <h2 className="text-4xl font-medium text-[#384141] pt-1">
            Latest Blog
          </h2>
          <p className="text-base font-medium text-[#6a7382] pt-8 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[60%] 2xl:w-[60%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            explicabo corrupti, voluptatum laborum consectetur iure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-7 mt-14">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src={post.image}
                alt="blog"
                className="w-full hover:scale-105 transition-transform duration-300"
              />
              <div className="px-6 py-4">
                <h3 className="font-normal text-xl mb-3.5 mt-2 text-[#24cdd5] w-[80%]">
                  {post.title}
                </h3>
                <p className="text-[#6a7382] text-base w-[90%]">
                  {post.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between">
                <span className="text-sm font-semibold text-[#384141] hover:text-blue-500 cursor-pointer">
                  Read More
                </span>
                <span className="text-sm font-normal text-[#6a7382] hover:text-blue-800">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
