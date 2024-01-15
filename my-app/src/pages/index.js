import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import NavBar from '@/components/navigation';


export default function index() {
  return (
    <div id='wrapper'>
      <NavBar></NavBar>
      <div class=" absolute -z-10 inset-x-0 m-auto opacity-15  h-screen max-w-2/3 bg-gradient-to-tr from-[#058AEA] via-[#15151B] to-[#95B637] blur-[118px]"></div>
    <div id='Main-Content'>
      {/* <div id='background' className='absolute -z-10 opacity-10 blur-3xl'>
      <div class="w-80 h-80 items-center bg-[#058AEA] rounded-full "></div>
      <div class="w-80 h-80 items-stretch bg-[#95B637] rounded-full "></div>
      
      </div> */}
       

       <div className=''>
       <h1 className=' text-center mt-40 text-6xl font-bold '>Best free music discord <p></p><a className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Michiru Music bot</a></h1>
       <div  className='text-center opacity-50'>Based on <a href='https://github.com/hmes98318/Music-Disc' className='border-b'>Music-Disc</a></div>
       <div className='flex justify-center items-center mt-7'>
       <a className="text-[#C5C5C5] w-fit py-5 px-16 hover:bg-indigo-600 border-4 border-indigo-900 transition duration-300 ease-in-out rounded-lg font-medium flex items-center" href="https://cutt.ly/michiru_bot">
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
    </div>
  );
}