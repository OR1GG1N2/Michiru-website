const NavBar = () => {
    return (
        <header>
            <div className="hidden md:block mt-6 h-full w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 border border-gray-800 rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <div className="space-x-7">
                        <a className="text-[#C5C5C5] hover:text-white font-medium transition duration-300 ease-in-out" href="#">
                            Home
                        </a>
                        <a className="text-[#C5C5C5] cursor-no-drop font-medium relative transition duration-300 ease-in-out" >
                            WIKI
                            <span className="top-0 right-0 align-top gam text-[0.5rem]">Soon</span>
                        </a>


                    </div>
               
                    <a className="flex-grow text-center text-pink-500 font-bold" href="#">Michiru</a>
                    <div className="flex items-center space-x-4">
                        <a className="invisible text- hover:text-white font-medium transition duration-300 ease-in-out" href="#">
                            Invite
                        </a>
                        <a className="text-[#C5C5C5] hover:text-indigo-600 font-medium flex items-center transition duration-300 ease-in-out" href="https://cutt.ly/michiru_bot">
                            Invite
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-1"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" x2="21" y1="14" y2="3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
