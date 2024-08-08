import React from "react";
import { links } from "../../constant/Navlinks";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-green text-white sticky flex items-center top-0 w-full py-3">
      <nav className=" flex items-center justify-between px-10 w-full h-full gap-20">
        <div className="flex items-center">
          <span className="text-3xl font-semibold">Task-List</span>
        </div>

        <div className="felx flex-col lg:block hidden space-y-4">
          <div className="flex items-center">
            <select
              name="Companies"
              id="comp"
              className="bg-pink text-black outline-none p-2 rounded-s-md "
            >
              <option value="Company">Companies</option>
              <option value="Sher">Sher</option>
            </select>

            <input
              type="text"
              placeholder=""
              className="outline-none bg-slate-50 text-green h-[2.278rem] rounded-e-md p-2 w-full "
            ></input>
          </div>
          <div className="flex flex-wrap  gap-7 md:gap-5 uppercase">
            {links.map((item) => {
              return (
                <Link key={item.id} to='/' >
                  <span
                    className={`${
                      item.submenu ? "font-semibold" : "font-thin"
                    } tracking-wide text-xs flex items-center justify-center gap-1`}
                  >
                    {item.title}
                    {item.submenu ? <IoIosArrowDown className="text-sm" /> : ""}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="flex  flex-col">
              <span className="font-semibold text-lg">FirstName Surname</span>
              <span>company name</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-white">

            </div>
          </div>
          <div className='px-2 flex text-xl items-center justify-center gap-5'>
            
            <div className='relative cursor-pointer'>
                 <MdOutlineMessage/>
                <div className='absolute -top-2 -right-2 w-4 h-4 flex items-center text-xs justify-center bg-red-500 rounded-full'>4</div>
            </div>
            
            <div className='relative cursor-pointer'>
                 <LuCalendarDays />
            </div>
            
            <div className='relative cursor-pointer'>

            <FaRegBell className='cursor-pointer'/>
            <div className='absolute -top-2 -right-2 w-4 h-4 flex items-center text-xs justify-center bg-red-500 rounded-full'>1</div>  
            </div>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
