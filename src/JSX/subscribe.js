function Subscribe() {
    return (
        <div className="bg-indigo-900 text-white py-4 text-center">
            <h1 className="text-[2rem] font-bold">Save Time, save money!</h1>
            <p>Sign up and we'll send the best deals to you</p>
            <div className="mt-3">
                <form action="">
                    <input type="email" name="" id="" className="py-1 px-2 text-black focus:outline-0" placeholder="Email Address"/>
                    <input type="submit" value="Subscribe" className="bg-blue-600 py-1 px-3 cursor-pointer hover:bg-blue-800" />
                </form>
            </div>
        </div>
    )
}
export default Subscribe;