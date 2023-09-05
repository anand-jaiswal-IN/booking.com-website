import '../css/offers.css';

function Offers() {
  return (
    <section name="offers" className="mt-[8rem]">
      <h1 className="text-2xl font-bold">Offers</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, facere!
      </p>
      <div className="offers-container flex justify-center content-center mt-5">
        <div className="flex items-center rounded-md w-[50%] p-3">
          <div className="pr-3">
            <p className="font-bold text-xs">
              Your home away from home - for your entire extended stay
            </p>
            <p className="text-xs pt-2">
              Choose from properties that are perfect for working, relaxing or a
              bit of both
            </p>
            <a
              href=""
              className="text-xs px-2 py-1 text-white bg-indigo-600 mt-2 inline-block hover:bg-indigo-700"
            >
              Find a Stay
            </a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center ml-2 rounded-md w-[50%] p-3">
          <div className="pr-3 pr-0]">
            <p className="font-bold text-xs">
              Your home away from home - for your entire extended stay
            </p>
            <p className="text-xs pt-2">
              Choose from properties that are perfect for working, relaxing or a
              bit of both
            </p>
            <a
              href=""
              className="text-xs px-2 py-1 text-white bg-indigo-600 mt-2 inline-block hover:bg-indigo-700"
            >
              Find a Stay
            </a>
          </div>
          <div>
            <img
              className="bg-cover"
              src="https://images.pexels.com/photos/1305603/pexels-photo-1305603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;