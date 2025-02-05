const BlogSection = () => {
  const blogPosts = [
    {
      title: "Next Large Social Network.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, rerum?",
      image: "blog-1.jpg",
      date: "2 YEARS AGO",
    },
    {
      title: "The Art of Finding Great Ideas.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, omnis?",
      image: "blog-2.jpg",
      date: "2 YEARS AGO",
    },
    {
      title: "3 Tips for Creating Your Own Blog.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, veniam!",
      image: "blog-3.jpg",
      date: "2 YEARS AGO",
    },
  ];
  return (
    <section className="bg-slate-100 pt-24 pb-16">
      <div className="container mx-auto px-10">
        <div className="text-center">
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-lg font-normal font-Nunito-font text-secandari text-center"
          >
            Read Out Our
          </p>
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-5xl font-semibold text-primary font-Montez text-center py-2"
          >
            Latest Blog
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className=" text-brand text-base font-Opensans font-normal pt-6 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[50%] 2xl:w-[60%] mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            explicabo corrupti, voluptatum laborum consectetur iure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 w-full mt-14">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-md "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src={post.image}
                alt="blog"
                className="w-full hover:scale-105 transition-all  duration-300 relative"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.22)] opacity-50 hover:opacity-30 transition-all duration-300"></div>
              <div className="px-6 py-6">
                <h3 className="font-normal text-xl mb-3.5 mt-2 text-secandari font-Nunito-font w-[85%]">
                  {post.title}
                </h3>
                <p className="text-brand font-normal font-Opensans text-base w-[90%]">
                  {post.description}
                </p>
              </div>
              <div className="px-7 pt-4 pb-2 flex justify-between">
                <span className="text-sm font-semibold text-[#384141] hover:text-secandari cursor-pointer duration-200">
                  Read More
                </span>
                <span className="text-sm font-normal text-[#6a7382] hover:text-secandari duration-200">
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
