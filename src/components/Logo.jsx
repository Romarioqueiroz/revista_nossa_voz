const Logo = ({ divColor }) => {
  return (
    <div>
      <div className={`${divColor} h-6 w-48`}></div>
      <h1 className="font-extrabold  text-6xl text-white -mt-1 tracking-[-4px]">
        NOSSA
      </h1>
      <h1 className="font-extrabold  text-8xl text-white -mt-5 tracking-[-7px] ">
        VOZ
      </h1>
      <div className={`${divColor} h-6 w-48`}>
        <p className=" font-light text-center text-white">lorem ipsum</p>
      </div>
    </div>
  );
};

export default Logo;
