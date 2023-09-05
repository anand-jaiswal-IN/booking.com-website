function ItemProperty(props) {
    return (
        <div className="w-[25%] shadow-lg cursor-pointer hover:shadow-2xl p-2 pl-0 rounded-lg">
            <div className="overflow-hidden h-[200px]">
                <img src={props.property.imgUrl} alt="" className="hover:scale-110 transition-all object-cover width-[100%] h-[100%] m-auto" />
            </div>
            <div className="p-2">
                <h2 className="font-bold text-black">{props.property.hotelName}</h2>
                <p className="text-slate-600 mb-2">{props.property.location}</p>
                <p className="text-slate-600 text-sm mb-2">
                    <span className="bg-indigo-900 px-1 mr-1 text-white rounded-sm">{props.property.rating}</span>
                    {props.property.comment},  {props.property.reviewNumbered} reviews
                </p>
                <p className="text-slate-600">
                    Starting from <span className="font-bold text-black">₹ {props.property.startingPrice}</span>
                </p>
                <a href={props.property.exploreUrl} className="inline-block py-1 px-2 bg-slate-800 text-white rounded-md my-3">Explore</a>
            </div>
        </div>
    )
}

function Property() {
    const properties = [
        {
            imgUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            hotelName : 'Hotel XYZ',
            location: 'Location Here',
            rating: 7.8,
            comment:'Good',
            reviewNumbered : 324,
            startingPrice: 2000,
            exploreUrl: '#'
        },
        {
            imgUrl: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            hotelName : 'Hotel XYZ',
            location: 'Location Here',
            rating: 8.8,
            comment:'Excillent',
            reviewNumbered : 512,
            startingPrice: 2500,
            exploreUrl: '#'
        },
        {
            imgUrl: 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600',
            hotelName : 'Hotel XYZ',
            location: 'Location Here',
            rating: 5.4,
            comment:'Awesome',
            reviewNumbered : 421,
            startingPrice: 3200,
            exploreUrl: '#'
        },
        {
            imgUrl: 'https://images.pexels.com/photos/971001/pexels-photo-971001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            hotelName : 'Hotel XYZ',
            location: 'Location Here',
            rating: 6.4,
            comment:'Gorgious',
            reviewNumbered : 7214,
            startingPrice: 4150,
            exploreUrl: '#'
        },
        
        {
            imgUrl: 'https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            hotelName : 'Hotel XYZ',
            location: 'Location Here',
            rating: 9.1,
            comment:'Cool',
            reviewNumbered : 1024,
            startingPrice: 5300,
            exploreUrl: '#'
        },

    ]
    return (
        <section name="property" className="pt-5">
            <h1 className="font-bold text-xl">Stay at our top unique properties</h1>
            <p>
                From castles and villas to boats and igloos, we've got it all</p>

            <div className="container-property flex pt-4 flex-wrap">
                {
                    properties.map((property) => <ItemProperty property={property} />)
                }
            </div>
        </section>
    )
}
export default Property;