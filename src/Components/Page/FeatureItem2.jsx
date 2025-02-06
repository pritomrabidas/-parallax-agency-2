
const FeatureItem2 = ({ icon, title }) => {
  return (
    <div className="p-8 shadow rounded-2xl scale-95 hover:scale-100 duration-300">
      <span className="text-secandari text-3xl  flex">
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-primary font-Nunito-font my-4 text-start">
        {title}
      </h3>
      <p className="text-brand text-sm font-normal font-Opensans text-start md:w-full sm:w-[90%] w-[95%]">
        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet.
      </p>
    </div>
  );
};

export default FeatureItem2
