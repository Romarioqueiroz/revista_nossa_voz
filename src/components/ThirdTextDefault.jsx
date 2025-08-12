const ThirdTextDefault = ({
  title,
  subtitle,
  text,
  buttonText,
  titleColor,
  buttonColor,
  subtitleColor,
}) => {
  return (
    <div className="flex flex-col justify-center w-1/2">
      <div className="flex flex-col justify-center items-start pr-4">
        <h3 className={`text-4xl font-bold ${titleColor}`}>{title}</h3>
        <h4 className={`text-4xl font-extralight ${subtitleColor}`}>
          {subtitle}
        </h4>
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="py-3 mr-20">{text}</p>
        <div className="py-5">
          <button className={`${buttonColor} py-2 px-12 text-amber-50`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdTextDefault;
