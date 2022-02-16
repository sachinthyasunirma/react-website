import React,{useState} from 'react'
import {FaUserAlt} from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io';
import {RiSearch2Line} from 'react-icons/ri';

function Navbar() {
    function MobileNav(){
      const [isDropDownOpen, setIsDropDownOpen] = useState(false);
      const [user, setUser] = useState({});
        return(
          <>
            <div className='flex w-full items-center justify-between lg:hidden'>
              <div className='w-28'>
                <img src='https://joesescapadehome.files.wordpress.com/2019/01/5nE4S.jpg' alt='logo' className='w-20 h-full'></img>
                {/* <span className='font-sans text-blueLight-500 text-2xl font-bold border-double border-4 border-blueLight-500 px-2 rounded-md'>SASIELIGHT</span> */}
              </div>
              <div className='flex items-center gap-3 relative'>
                <button className='bg-textLightColor-500 text-light-50 py-2 px-2 rounded-full text-sm font-bold'>Use App</button>
                {user?.fullName ?(
                  <>
                  <div onClick={()=>setIsDropDownOpen((prev)=>!prev)} className='border-gray-300 text-gray-500 w-20 h-20 rounded-full'>
                      <img src='' alt='' className='w-full h-full rounded-full object-cover'></img>
                  </div>
                  {isDropDownOpen && (
                    <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                      <button>Sign Out</button>
                    </div>
                  )}
                  </>
                ):(
                  <>
                  <span onClick={()=>setIsDropDownOpen((prev)=>!prev)} className="border p-2 border-gray-300 text-gray-500 rounded-full mr-2 border-blueLight-500">
                    <FaUserAlt className='w-full h-full text-textDarkr-700' />
                  </span>
                  {isDropDownOpen && (
                    <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-auto flex flex-col gap-2'>
                      <button className=''>Sign In</button>
                      <button>Sign Out</button>
                    </div>
                  )}
                  </>
                )}
              </div>
            </div>
          </>
        )
    }
    // function LargeNav(){
    //   return()
    // }
  return (
    <>
        <nav className='py-2 flex bg-white shadow-md lg:shadow-none w-full items-center'>
            <MobileNav />
            {/* <LargeNav /> */}
        </nav>
    </>
  )
}

export default Navbar