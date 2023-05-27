import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';





export default function Nav() {

//   <div className='w-12 ml-5'>
//   <img src='./logo.png'></img>
// </div>
// <div className='mr-20 text-center'>
//   <div className='text-2xl ml-2 font-bold text-white'>PUTATOE</div>
//   <div className='text-xs font-medium text-white'>one solution</div>
// </div>
{/* <div className='flex justify-center '>
<div className='m-2'>
<FontAwesomeIcon icon={faComments} size='xl' style={{color: "#ffffff" }} className='' />
 
</div>
<div className='m-2'>
<FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#ffffff",}} />
</div>
<div className='m-2'>
<FontAwesomeIcon icon={faBell} size="xl" style={{color: "#ffffff",}} />
</div>
</div> */}

  return (

    <div>
      <div className='flex p-2 w-full fixed top-0' style={{ backgroundColor: "#00838f" }}>
       
        <div className=' mr-4 flex justify-center'>

          <form>
           
              <div class=" bg-white flex justify-center m-2 p-1">
                 <button type="submit" className='' >
                    <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="none" stroke="#00838f" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            
                  </button>
                <input type="search" id="search-dropdown" className="text-xs p-2 ml-4  w-52" placeholder="Search for products..." required />
                 
              </div>

          
          </form>
        </div>
     
       <div className='flex justify-center items-center '>
       <FontAwesomeIcon icon={faMicrophone} size="xl" style={{color: "#ffffff",}} />
       </div>
    


      </div>
   

   <div className='bg-white fixed bottom-0 w-full flex justify-center items-center'>
    <div className='flex-col text-center m-2 ml-0 mr-3'>
      <div className=''>
   <FontAwesomeIcon icon={faHouse} size='2xl' style={{color: "#00838f",}} />
   </div>
  <div className='text-lg' style={{color:"#00838f"}}>
    Home
    </div>
   </div>
   <div className='flex-col text-center  m-2 mr-3'>
      <div className=''>
   <FontAwesomeIcon icon={faUser} size='2xl' style={{color: "#00838f",}} />
   </div>
  <div className='text-lg' style={{color:"#00838f"}}>
    User
    </div>
   </div>
   <div style={{backgroundColor:"#06b1c1"}} className=' m-2 p-1 mr-3'>
   <img src='./logo.png' className='w-16'></img>
   </div>

   <div className='flex-col text-center mr-0 ml-3 m-2'>
      <div className=''>
      <FontAwesomeIcon icon={faRectangleList} size='2xl' style={{color: "#00838f",}} />   </div>
  <div className='text-lg' style={{color:"#00838f"}}>
    User
    </div>
   </div>
   <div className='flex-col text-center  m-2 mr-3'>
      <div className=''>
      <FontAwesomeIcon icon={faCommentDots} size='2xl' style={{color: "#00838f",}} />  
       </div>
  <div className='text-lg' style={{color:"#00838f"}}>
    Chat
    </div>
   </div>
   </div>
    </div>

    
  )
}
