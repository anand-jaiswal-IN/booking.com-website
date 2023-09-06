function ItemProperty(props) {
  return (
    <div className="md:w-[25%] w-[50%] shadow-lg cursor-pointer hover:shadow-2xl absolute top-0 h-[100%] px-1">
      <div className="overflow-hidden h-[200px]">
        <img
          src={props.property.imgUrl}
          alt=""
          className="hover:scale-110 transition-all object-cover width-[100%] h-[100%] m-auto"
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold text-black">{props.property.hotelName}</h2>
        <p className="text-slate-600 mb-2">{props.property.location}</p>
        <p className="text-slate-600 text-sm mb-2">
          <span className="bg-indigo-900 px-1 mr-1 text-white rounded-sm">
            {props.property.rating}
          </span>
          {props.property.comment}, {props.property.reviewNumbered} reviews
        </p>
        <p className="text-slate-600">
          Starting from{" "}
          <span className="font-bold text-black">
            ₹ {props.property.startingPrice}
          </span>
        </p>
        <a
          href={props.property.exploreUrl}
          className="inline-block py-1 px-2 bg-slate-800 text-white rounded-md my-3"
        >
          Explore
        </a>
      </div>
    </div>
  );
}
const properties = [
  {
    imgUrl:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hotelName: "Hotel XYZ",
    location: "Location Here",
    rating: 7.8,
    comment: "Good",
    reviewNumbered: 324,
    startingPrice: 2000,
    exploreUrl: "#",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hotelName: "Hotel XYZ",
    location: "Location Here",
    rating: 8.8,
    comment: "Excillent",
    reviewNumbered: 512,
    startingPrice: 2500,
    exploreUrl: "#",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600",
    hotelName: "Hotel XYZ",
    location: "Location Here",
    rating: 5.4,
    comment: "Awesome",
    reviewNumbered: 421,
    startingPrice: 3200,
    exploreUrl: "#",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/971001/pexels-photo-971001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hotelName: "Hotel XYZ",
    location: "Location Here",
    rating: 6.4,
    comment: "Gorgious",
    reviewNumbered: 7214,
    startingPrice: 4150,
    exploreUrl: "#",
  },

  {
    imgUrl:
      "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=600",
    hotelName: "Hotel XYZ",
    location: "Location Here",
    rating: 8.1,
    comment: "Generic",
    reviewNumbered: 2034,
    startingPrice: 6100,
    exploreUrl: "#",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hotelName: "Hotel XYZ",
    location: "Location Here",
    rating: 7.2,
    comment: "Cool",
    reviewNumbered: 564,
    startingPrice: 6000,
    exploreUrl: "#",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hotelName: "Hotel XYZ",
    location: "Location Here",
    rating: 7.7,
    comment: "Nice rooms",
    reviewNumbered: 974,
    startingPrice: 6150,
    exploreUrl: "#",
  },
];
function Property() {
  return (
    <>
      <section name="property" className="pt-5">
        <h1 className="font-bold text-xl">Stay at our top unique properties</h1>
        <p>From castles and villas to boats and igloos, we've got it all</p>

        <div className="property-container mt-5 relative overflow-hidden">
          <div className="property-container-wrapper relative md:h-[450px] h-[500px] transition-transform">
            {properties.map((property, index) => (
              <ItemProperty property={property} index={index} />
            ))}
          </div>
          <div id="property-container-sliderBtn" className="">
            <button
              onClick={() => slideLeft()}
              className="absolute left-0 z-10 top-[25%] bg-red-700 shadow-2xl p-2 text-white text-2xl"
            >
              &larr;
            </button>
            <button
              onClick={() => slideRight()}
              className="absolute right-0 z-10 top-[25%] bg-red-700 shadow-2xl p-2 text-white text-2xl"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Property;

var propertyContainerWrapper = 0;
var propertyContainerWrapperItems = 0;
var [translateX, maxTranslateX, minTranslateX] = [
  0,
  (properties.length - 4) * 25,
  (properties.length - 4) * 25 * -1,
];

console.log(maxTranslateX);
console.log(minTranslateX);

window.addEventListener("load", function () {
  propertyContainerWrapper = document.querySelector(
    ".property-container-wrapper"
  );
  propertyContainerWrapperItems = propertyContainerWrapper.children;

  for (let index = 0; index < propertyContainerWrapperItems.length; index++) {
    const element = propertyContainerWrapperItems[index];
    element.style.left = index * 25 + "%";
  }
});

function slideLeft() {
  if (translateX >= 0) {
    translateX = minTranslateX;
  } else {
    translateX += 25;
  }

  propertyContainerWrapper.style.transform = `translateX(${translateX}%)`;
}

function slideRight() {
  if (translateX <= minTranslateX) {
    translateX = 0;
  } else {
    translateX -= 25;
  }
  propertyContainerWrapper.style.transform = `translateX(${translateX}%)`;
}
