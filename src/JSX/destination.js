import '../css/destination.css';
const regions = [
    { "name": "Bihar", "noOfProperties": 761, "url": "#" },
    { "name": "Ras Al Khaimah", "noOfProperties": 113, "url": "#" },
    { "name": "Bali", "noOfProperties": 12694, "url": "#" },
    { "name": "Phuket Province", "noOfProperties": 5495, "url": "#" },
    { "name": "Zanzibar", "noOfProperties": 835, "url": "#" },
    { "name": "Cornwall", "noOfProperties": 5277, "url": "#" },
    { "name": "Lake District", "noOfProperties": 2404, "url": "#" },
    { "name": "Tenerife", "noOfProperties": 9607, "url": "#" },
    { "name": "Hawaii", "noOfProperties": 5515, "url": "#" },
    { "name": "Uttar Pradesh", "noOfProperties": 4377, "url": "#" },
    { "name": "Mykonos", "noOfProperties": 1453, "url": "#" },
    { "name": "Texel", "noOfProperties": 410, "url": "#" },
    { "name": "Ibiza", "noOfProperties": 1641, "url": "#" },
    { "name": "Guernsey", "noOfProperties": 61, "url": "#" },
    { "name": "England", "noOfProperties": 73991, "url": "#" },
    { "name": "Jersey", "noOfProperties": 89, "url": "#" },
    { "name": "Isle of Wight", "noOfProperties": 934, "url": "#" },
    { "name": "Bora Bora", "noOfProperties": 59, "url": "#" },
    { "name": "Santorini", "noOfProperties": 1763, "url": "#" },
    { "name": "Heathrow Terminal 2", "noOfProperties": 4292, "url": "#" },
    { "name": "Burj Al Arab", "noOfProperties": 3684, "url": "#" },
    { "name": "Universal Studios Orlando", "noOfProperties": 327, "url": "#" },
    { "name": "Comal River Tubing", "noOfProperties": 327, "url": "#" },
    { "name": "Guadalupe River Tubing", "noOfProperties": 1385, "url": "#" },
    { "name": "Times Square", "noOfProperties": 765, "url": "#" },
    { "name": "Ocean City Boardwalk", "noOfProperties": 1, "url": "#" },
    { "name": "Al Maha Wildlife Reserve", "noOfProperties": 7559, "url": "#" },
    { "name": "Disneyland Paris", "noOfProperties": 75, "url": "#" },
    { "name": "Niagara Falls State Park", "noOfProperties": 9, "url": "#" },
    { "name": "Portmeirion", "noOfProperties": 670, "url": "#" },
    { "name": "River Walk", "noOfProperties": 7559, "url": "#" },
    { "name": "Eiffel Tower", "noOfProperties": 21, "url": "#" },
    { "name": "State Park", "noOfProperties": 14509, "url": "#" },
    { "name": "The Shard", "noOfProperties": 43, "url": "#" },
    { "name": "Kalahari Waterpark Resort", "noOfProperties": 63, "url": "#" },
    { "name": "Heathrow Terminal 5", "noOfProperties": 14509, "url": "#" },
    { "name": "Wembley Stadium", "noOfProperties": 247, "url": "#" },
    { "name": "Disneyland", "noOfProperties": 14509, "url": "#" },
    { "name": "O2 Arena", "noOfProperties": 89, "url": "#" }
]
const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata ",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Navi Mumbai",
    "Allahabad",
    "Howrah",
    "Ranchi",
    "Jabalpur",
    "Gwalior",
    "Coimbatore",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Kota"
]
const placesOfInterest = [
    { "name": "Disneyland Paris", "noOfProperties": 7559, "url": "#" },
    { "name": "Heathrow Terminal 5", "noOfProperties": 63, "url": "#" },
    { "name": "Niagara Falls State Park", "noOfProperties": 75, "url": "#" },
    { "name": "Portmeirion", "noOfProperties": 9, "url": "#" },
    { "name": "Eiffel Tower", "noOfProperties": 7559, "url": "#" },
    { "name": "Disneyland", "noOfProperties": 247, "url": "#" },
    { "name": "Wembley Stadium", "noOfProperties": 14509, "url": "#" },
    { "name": "Burj Al Arab", "noOfProperties": 4292, "url": "#" },
    { "name": "Ocean City Boardwalk", "noOfProperties": 765, "url": "#" },
    { "name": "Kalahari Waterpark Resort", "noOfProperties": 43, "url": "#" },
    { "name": "Guadalupe River Tubing", "noOfProperties": 327, "url": "#" },
    { "name": "The Shard", "noOfProperties": 14509, "url": "#" },
    { "name": "State Park", "noOfProperties": 21, "url": "#" },
    { "name": "Universal Studios Orlando", "noOfProperties": 3684, "url": "#" },
    { "name": "Times Square", "noOfProperties": 1385, "url": "#" },
    { "name": "Comal River Tubing", "noOfProperties": 327, "url": "#" },
    { "name": "Heathrow Terminal 2", "noOfProperties": 564, "url": "#" },
    { "name": "Al Maha Wildlife Reserve", "noOfProperties": 1, "url": "#" },
    { "name": "O2 Arena", "noOfProperties": 14509, "url": "#" },
    { "name": "River Walk", "noOfProperties": 670, "url": "#" }
]

function Regions(props) {
    return (
        <li className="w-[25%] mb-4">
            <a href={props.region.url} className="text-sm hover:border-b-2 hover:border-slate-400">{props.region.name}</a>
            <br />
            <span className="text-[15px]">{props.region.noOfProperties} properties</span>
        </li>
    )
}
function Cities(props) {
    return (
        <li className="w-[25%] mb-4 text-sm">
            {props.city}
        </li>
    )
}
function PlacesOfInterest(props) {
    return (
        <li className="w-[25%] mb-4">
            <a href={props.placeOfInterest.url} className="text-sm hover:border-b-2 hover:border-slate-400">{props.placeOfInterest.name}</a>
            <br />
            <span className="text-[15px]">{props.placeOfInterest.noOfProperties} properties</span>
        </li>
    )
}
function Destination() {
    return (
        <section className="pt-5" name="destination">
            <h1 className="text-xl font-bold">Destinations we love</h1>
            <div className="pt-3">
                <button onClick={showRegions} className="px-5 py-1 mr-2 rounded-2xl activeDestinationBtn border-2 border-slate-300" id="showRegionsBtn">Regions</button>
                <button onClick={showCitites} className="px-5 py-1 mr-2 rounded-2xl border-2 border-slate-300" id="showCitiesBtn">Cities</button>
                <button onClick={showPlacesOfInterest} className="px-5 py-1 mr-2 rounded-2xl border-2 border-slate-300" id="showPlaceInterestBtn"> Places of interest</button>
            </div>
            <div className="regions-section mt-5">
                <ul className="flex flex-wrap">
                    {regions.map(region => <Regions region={region} />)}
                </ul>
            </div>

            <div className="cities-section mt-5 hidden">
                <ul className="flex flex-wrap">
                    {cities.map(city => <Cities city={city} />)}
                </ul>
            </div>

            <div className="placeOfInterest-section mt-5 hidden">
                <ul className="flex flex-wrap">
                    {placesOfInterest.map(placeOfInterest => <PlacesOfInterest placeOfInterest={placeOfInterest} />)}
                </ul>
            </div>
        </section>
    )
}

export default Destination;

var [regionSection, citiesSection, placeOfInterestSection] = [0, 0, 0];
var [showRegionsBtn, showCitiesBtn, showPlaceInterestBtn] = [0, 0, 0];

window.addEventListener('load', function () {

    [regionSection, citiesSection, placeOfInterestSection] = [
        document.querySelector('.regions-section'),
        document.querySelector('.cities-section'),
        document.querySelector('.placeOfInterest-section')
    ];

    [showRegionsBtn, showCitiesBtn, showPlaceInterestBtn] = [
        document.getElementById('showRegionsBtn'),
        document.getElementById('showCitiesBtn'),
        document.getElementById('showPlaceInterestBtn'),
    ]
})

function showRegions() {
    regionSection.classList.remove('hidden');
    citiesSection.classList.add('hidden');
    placeOfInterestSection.classList.add('hidden');

    showRegionsBtn.classList.add('activeDestinationBtn');
    showCitiesBtn.classList.remove('activeDestinationBtn');
    showPlaceInterestBtn.classList.remove('activeDestinationBtn');

}
function showCitites() {
    regionSection.classList.add('hidden');
    citiesSection.classList.remove('hidden');
    placeOfInterestSection.classList.add('hidden');

    showRegionsBtn.classList.remove('activeDestinationBtn');
    showCitiesBtn.classList.add('activeDestinationBtn');
    showPlaceInterestBtn.classList.remove('activeDestinationBtn');
}
function showPlacesOfInterest() {
    regionSection.classList.add('hidden');
    citiesSection.classList.add('hidden');
    placeOfInterestSection.classList.remove('hidden');
    
    showRegionsBtn.classList.remove('activeDestinationBtn');
    showCitiesBtn.classList.remove('activeDestinationBtn');
    showPlaceInterestBtn.classList.add('activeDestinationBtn');
}
