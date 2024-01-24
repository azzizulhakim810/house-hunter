const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <div
        className="hero h-[100dvh] -mt-[98px] relative"
        style={{
          backgroundImage: "url(https://i.ibb.co/gVgWp9T/home-1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" relative text-center w-11/12">
          <div className="absolute w-full top-28">
            {/* <h1 className="mb-0 text-base md:text-base tracking-wider font-medium text-white">
              WELCOME TO OUR
            </h1>
            <p className="mb-10 uppercase text-white lg:text-6xl md:text-5xl text-3xl font-bold">
              OPINIOx COMMUNITY
            </p> */}

            {/* Search Field  */}
            <form
              // onSubmit={handleSearch}
              className="w-10/12 lg:w-10/12 mx-auto rounded bg-black p-10"
            >
              <div className="flex justify-between gap-3">
                {/* City  */}
                <select
                  className="py-3 px-4 rounded text-md font-medium outline-none border-r-8 border-white w-1/3"
                  name="city"
                  id="city"
                >
                  <option value="">City</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="khulna">Khulna</option>
                  <option value="rongpur">Rongpur</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="bogura">Bogura</option>
                  <option value="cumilla">Cumilla</option>
                  <option value="pabna">Pabna</option>
                </select>
                {/* Bedrooms  */}
                <select
                  className="py-3 px-4 rounded text-md font-medium outline-none border-r-8 border-white w-1/3"
                  name="bedrooms"
                  id="bedrooms"
                >
                  <option value="">Bedrooms</option>
                  <option value="b1">Bedrooms at least 1</option>
                  <option value="b2">Bedrooms at least 2</option>
                  <option value="b3">Bedrooms at least 3</option>
                  <option value="b4">Bedrooms at least 4</option>
                  <option value="b5">Bedrooms at least 5 or more</option>
                </select>
                {/* Room Size  */}
                <select
                  className="py-3 px-4 rounded text-md font-medium outline-none  border-r-8 border-white  w-1/3"
                  name="room-size"
                  id="room-size"
                >
                  <option value="">Room Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              {/* Second Row  */}
              <div className="mt-4 flex justify-between items-center gap-3">
                {/* Availability  */}
                <div className="w-1/3 flex justify-start">
                  <label
                    className="text-lg text-white font-medium"
                    htmlFor="availability"
                  >
                    Availability:
                  </label>
                  <input
                    className="w-5 ml-4"
                    type="checkbox"
                    id="availability"
                  />
                </div>
                {/* Price  */}
                <div className="w-1/3  flex justify-start">
                  <label
                    className="text-lg text-white font-medium"
                    htmlFor="rentRange"
                  >
                    Rent Per Month:
                  </label>
                  <input
                    className=""
                    type="range"
                    id="rentRange"
                    min="0"
                    max="5000"
                  />
                </div>
                <div className="w-1/3  flex justify-end">
                  <button className="bg-[#EB6753] hover:bg-white  text-white hover:text-[#EB6753] rounded border-none md:text-sm text-xs px-8 py-[12px] font-bold">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
