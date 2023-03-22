function TravelOptions({ emoji, title, active }) {
  return (
    <div
      className={
        active
          ? "bg-orange h-28 w-16 rounded-full items-center justify-center shadow-lg text-white"
          : "bg-white h-28 w-16 rounded-full items-center justify-center shadow-lg hover:bg-orange cursor-pointer text-black hover:text-white duration-150 delay-150"
      }
    >
      <p className="bg-lightGray rounded-full p-1  m-4 w-8 h-8">{emoji}</p>
      <p className="m-3">{title}</p>
    </div>
  );
}

export default TravelOptions;
