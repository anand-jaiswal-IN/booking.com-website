import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="header-wrapper md:px-[5rem] relative px-4">
        <nav className="flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2xl ">
              Booking.com
            </a>
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <button>INR</button>
              </li>
              <li>
                <button>Eng</button>
              </li>
              <li>
                <button>
                  <i className="fa-regular fa-circle-question" />
                </button>
              </li>
              <li>
                <button>List your property</button>
              </li>
              <li>
                <button id="registerBtn">Register</button>
              </li>
              <li>
                <button id="signinBtn">Sign in</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="sub-nav mt-1">
          <ul className="text-slate-200">
            <li>
              <a href="">Stays</a>
            </li>
            <li>
              <a href="">Flights</a>
            </li>
            <li>
              <a href="">Flight + Hotel</a>
            </li>
            <li>
              <a href="">Car rentals</a>
            </li>
            <li>
              <a href="">Attraction</a>
            </li>
            <li>
              <a href="">Airport taxis</a>
            </li>
          </ul>
        </div>
        <div className="header-content md:py-20 py-10">
          <h1 className="md:text-[3rem] text-[2rem] font-bold">
            Find your next stay
          </h1>
          <p className="md:text-xl text-[0.7rem]">
            Search low prices on hotels, homes and much more...
          </p>
        </div>
        <div className="booking-form w-[100%] md:pt-10 text-slate-600 md:px-20 px-0 md:absolute left-0 md:bottom-[-100px] md:py-0 pb-3">
          <form action="">
            <div className="main-booking-form bg-orange-500 rounded-lg md:p-2 p-1 text-black justify-center md:flex">
              <input
                type="text"
                name="place"
                id=""
                placeholder="Where are you going?"
                className="md:mb-0 mb-1 focus:outline-none mr-2 bg-white py-2 px-5 text-[0.8rem] w-[100%]"
              />
              <input
                type="text"
                name="date-check-in"
                id=""
                placeholder="Check-in-out-date"
                className="md:mb-0 mb-1 focus:outline-none mr-2 bg-white py-2 px-5 text-[0.8rem] w-[100%]"
              />
              <input
                type="text"
                name="date-check-out"
                id=""
                placeholder="Check-out-date"
                className="md:mb-0 mb-1 focus:outline-none mr-2 bg-white py-2 px-5 text-[0.8rem] w-[100%]"
              />
              <input
                type="number"
                name="people"
                id=""
                placeholder="Number of peoples"
                className="md:mb-0 mb-1 focus:outline-none mr-2 bg-white py-2 px-5 text-[0.8rem] w-[100%]"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md"
              >
                Search
              </button>
            </div>
            <input
              className="mt-5"
              type="checkbox"
              name="traveling-for-work"
              id=""
            />{" "}
            I'm travelling for work
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
// export {header};
