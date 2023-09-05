import './css/explore.css';

function Explore() {
  return (
    <section name="explore" className="mt-[3rem]">
      <h1 className="font-bold text-2xl">Explore India</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="explore-container flex justify-around mt-5">
        <div className="w-[20%]">
          <div className="w-[200px] h-[200px]">
            <img
              className="rounded-md object-cover w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/4429324/pexels-photo-4429324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h3 className="text-[1.2rem] font-bold">Goa</h3>
          <p className="text-sm text-slate-600">5,253 Properties</p>
        </div>
        <div className="w-[20%]">
          <div className="w-[200px] h-[200px]">
            <img
              className="rounded-md object-cover w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h3 className="text-[1.2rem] font-bold">Delhi</h3>
          <p className="text-sm text-slate-600">2,926 Properties</p>
        </div>
        <div className="w-[20%]">
          <div className="w-[200px] h-[200px]">
            <img
              className="rounded-md object-cover w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h3 className="text-[1.2rem] font-bold">Mumbai</h3>
          <p className="text-sm text-slate-600">1,651 Properties</p>
        </div>
        <div className="w-[20%]">
          <div className="w-[200px] h-[200px]">
            <img
              className="rounded-md object-cover w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h3 className="text-[1.2rem] font-bold">Jaipur</h3>
          <p className="text-sm text-slate-600">1,412 Properties</p>
        </div>
        <div className="w-[20%]">
          <div className="w-[200px] h-[200px]">
            <img
              className="rounded-md object-cover w-[100%] h-[100%]"
              src="https://images.pexels.com/photos/17083659/pexels-photo-17083659/free-photo-of-golden-statue-in-vidhana-soudha-in-bangalore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h3 className="text-[1.2rem] font-bold">Bangalore</h3>
          <p className="text-sm text-slate-600">2,047 Properties</p>
        </div>
      </div>
    </section>
  );
}

export default Explore;