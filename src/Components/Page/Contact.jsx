const Contact = () => {
  return (
    <section className="relative pb-12 bg-white">
      <div className="container  p-8 rounded-lg">
        <div className="text-center">
          <p className="text-lg font-normal font-Nunito-font text-primary text-center">
            Quisque tellus risus
          </p>
          <h2 className="text-5xl font-semibold text-primary font-Montez text-center py-2">
            Contact Us
          </h2>
          <p className=" text-brand text-base font-Opensans font-normal pt-2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[50%] 2xl:w-[60%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            explicabo corrupti, voluptatum laborum consectetur iure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <span className="text-blue-500">Trax Agency Worldwide</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Our London Agency
              </h3>
            </div>
            <div className="space-y-2">
              <p>Address: 309, New Cavendish St, EC1Y 3WK</p>
              <p>0800 214 5252</p>
              <p>0400 20778972</p>
              <p>
                <a href="mailto:polpo@traxagency.com" className="text-blue-500">
                  polpo@traxagency.com
                </a>
              </p>
              <p>Mon-Fri: 9am-5pm</p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                required
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
