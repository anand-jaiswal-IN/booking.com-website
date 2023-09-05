import '../css/header.css';

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <nav className="flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2xl">
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
        <div className="header-content py-20">
          <h1 className="text-[3rem] font-bold">Find your next stay</h1>
          <p className="text-xl">
            Search low prices on hotels, homes and much more...
          </p>
        </div>
        <div className="booking-form w-[100%] pt-10 text-slate-600">
          <form action="">
            <div className="main-booking-form">
              <input
                type="text"
                name="place"
                id=""
                placeholder="Where are you going?"
              />
              <input
                type="text"
                name="date-check-in"
                id=""
                placeholder="Check-in-out-date"
              />
              <input
                type="text"
                name="date-check-out"
                id=""
                placeholder="Check-out-date"
              />
              <input
                type="number"
                name="people"
                id=""
                placeholder="Number of peoples"
              />
              <button type="submit">Search</button>
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