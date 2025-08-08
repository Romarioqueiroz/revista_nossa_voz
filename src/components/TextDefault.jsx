const TextDefault = ({ title, subtitle, text, buttonText }) => {
  return (
    <div className="flex flex-col justify-center items-start w-1/2 border border-blue-500 ">
      <h3 className=" text-4xl font-bold text-cyan-600">{title}</h3>
      <h4 className="text-4xl font-extralight text-yellow-400">{subtitle}</h4>
      <p className="flex flex-row py-3 mr-20">{text}</p>
      <div className="py-5">
        <button className="bg-cyan-600 py-2 px-12 text-amber-50">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TextDefault;
