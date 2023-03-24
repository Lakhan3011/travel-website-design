import AppsIcon from "@material-ui/icons/Apps";
import TravelOptions from "../components/TravelOptions";

function AppRight() {
  return (
    <div className="p-10">
      <header className="flex justify-between p-10">
        <AppsIcon className="mt-2" />
        <div className="flex items-center">
          <p className="link">Stories</p>
          <p className="link">Gallery</p>
          <img
            className="h-10 w-10 rounded-2xl"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          />
        </div>
      </header>
      <h1 className="text-blue font-semibold text-3xl">Discover</h1>
      <div className="flex w-80 justify-between mt-10">
        <p className="text-orange text-lg font-semibold border-b-[2px] cursor-pointer ">
          Popular
        </p>
        <p className="text-gray text-lg font-semibold hover:border-b-[2px] hover:text-orange delay-75 duration-100 cursor-pointer">
          Adventure
        </p>
        <p className="text-gray text-lg font-semibold hover:border-b-[2px] hover:text-orange delay-75 duration-100 cursor-pointer">
          Tour
        </p>
      </div>
      <div className="flex overflow-scroll hidescrollbar mt-5">
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1536048810607-3dc7f86981cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="river"
        />
      </div>
      <h1 className="text-blue font-semibold text-4xl">Types of Travel</h1>
      <div className="flex justify-evenly mt-5">
        <TravelOptions emoji="⭐" title="Luxury" active />
        <TravelOptions emoji="🦁" title="Safari" />
        <TravelOptions emoji="🚂" title="Train" />
        <TravelOptions emoji="👪" title="Family" />
        <TravelOptions emoji="👼" title="Alone" />
      </div>
    </div>
  );
}

export default AppRight;
