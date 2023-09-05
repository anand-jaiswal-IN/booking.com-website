import "../css/explore.css";

function ExplorePlace(props) {
  return (
    <>
      <div className="w-[20%] pb-4">
        <div className="h-[220px] w-[100%]">
          <img
            className="rounded-md object-cover w-[100%] h-[100%]"
            src={props.place.imgUrl}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[1.2rem] font-bold">{props.place.placeName}</h3>
          <p className="text-sm text-slate-600">
            {props.place.noOfProperties} Properties
          </p>
        </div>
      </div>
    </>
  );
}

function Explore() {
  const placesToExplore = [
    {
      placeName: "Goa",
      noOfProperties: 5234,
      imgUrl:
        "https://images.pexels.com/photos/4429324/pexels-photo-4429324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      placeName: "Delhi",
      noOfProperties: 2926,
      imgUrl:
        "https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      placeName: "Mumbai",
      noOfProperties: 1651,
      imgUrl:
        "https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      placeName: "Jaipur",
      noOfProperties: 1412,
      imgUrl:
        "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      placeName: "Bangalore",
      noOfProperties: 2047,
      imgUrl:
        "https://images.pexels.com/photos/17083659/pexels-photo-17083659/free-photo-of-golden-statue-in-vidhana-soudha-in-bangalore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      placeName: "Udaipur",
      noOfProperties: 2047,
      imgUrl:
        "https://images.pexels.com/photos/8898720/pexels-photo-8898720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      placeName: "Lonavla",
      noOfProperties: 3047,
      imgUrl:
        "https://www.solethreads.com/cdn/shop/articles/Featured_lonavala.jpg?v=1640925767",
    },
    {
      placeName : 'Pudducherry',
      noOfProperties : 1054,
      imgUrl : 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/07/puducherry-sea.jpg?fit=1024%2C682&ssl=1'
    }
  ];
  return (
    <section name="explore" className="mt-[3rem]">
      <h1 className="font-bold text-2xl">Explore India</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="explore-container flex mt-5 w-[100%] flex-wrap">
        {placesToExplore.map((place) => (
          <ExplorePlace place={place} />
        ))}
      </div>
    </section>
  );
}

export default Explore;
