import '../css/footer.css';

function Footer() {
    return (

        <footer className='bg-slate-800 px-[100px] pt-5 text-slate-300'>
            <div className="flex justify-between items-center">
                <div>
                    <a href="">
                        <img src="/img/logo.png" alt="" className="inline" />
                    </a>
                </div>
                <div className="footer-social-media-menu">
                    <ul>
                        <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className='flex footer-menu py-5'>
                <ul className='w-[20%]'>
                    <li>Get connected</li>
                    <li><a href="">Link1</a></li>
                    <li><a href="">Link2</a></li>
                    <li><a href="">Link3</a></li>
                    <li><a href="">Link4</a></li>
                    <li><a href="">Link5</a></li>
                </ul>
                <ul className='w-[20%]'>
                    <li>Resources</li>
                    <li><a href="">Link1</a></li>
                    <li><a href="">Link2</a></li>
                    <li><a href="">Link3</a></li>
                    <li><a href="">Link4</a></li>
                    <li><a href="">Link5</a></li>
                </ul>
                <ul className='w-[20%]'>
                    <li>Prices</li>
                    <li><a href="">Link1</a></li>
                    <li><a href="">Link2</a></li>
                    <li><a href="">Link3</a></li>
                    <li><a href="">Link4</a></li>
                    <li><a href="">Link5</a></li>
                </ul>
                <ul className='w-[20%]'>
                    <li>Developers</li>
                    <li><a href="">Link1</a></li>
                    <li><a href="">Link2</a></li>
                    <li><a href="">Link3</a></li>
                    <li><a href="">Link4</a></li>
                    <li><a href="">Link5</a></li>
                    <li><a href="">Link6</a></li>
                    <li><a href="">Link7</a></li>
                </ul>
                <ul className='w-[20%]'>
                    <li>Company</li>
                    <li><a href="">Link1</a></li>
                    <li><a href="">Link2</a></li>
                    <li><a href="">Link3</a></li>
                    <li><a href="">Link4</a></li>
                    <li><a href="">Link5</a></li>
                </ul>
            </div>
            <hr />
            <div className='flex justify-between items-center'>
                <div>
                    <p>
                        <span className='pr-3'>&copy; 2020 CodeX</span>
                        <a href="" className='inline-block p-3'>Terms</a>
                        <a href="" className='inline-block p-3'>Privacy</a>
                    </p>
                </div>

                <div>
                    <p className='uppercase text-[10px] font-bold border-[1px] border-blue-300 inline-block px-3 py-1 rounded-lg'>Made by anand jaiswal</p>
                </div>
            </div>
        </footer>

    )
}
export default Footer;