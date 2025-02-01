
const FeatureItem = ({ icon, title, }) => {
  return (
    <div className="p-8 shadow rounded-2xl scale-95 hover:scale-100 duration-300">
      <span className="text-secandari text-3xl text-end justify-end flex">
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-primary font-Nunito-font my-4">
        {title}
      </h3>
      <p className="text-brand text-sm font-normal font-Opensans">
        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet.
      </p>
    </div>
  );
};

export default FeatureItem
