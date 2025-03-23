import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Header() {
    const [isLogin , setIsLogin]=useState(false);
    const navigate = useNavigate();

   function handleLogin(){
        navigate(`/Login`);
        setIsLogin(false);
   }
   function handleLogOut(){
    setIsLogin(true);
   }


  return (
    <>
    <nav className='w-full   mt-5'>
        <div className='flex flex-col sm:flex-row justify-between  item-center '>
        <div><img src='./Question.png' className='w-auto h-15 ml-10 sm:h-8 lg:h-12' /></div>
        <div className='flex gap-3 sm:gap-15 justify-center item-center font-semibold sm:text-2xl  sm:font-extrabold '>
            <Link to="/"><h4>Home</h4></Link>
            <Link to="/profile"> <h4>Profile</h4></Link>
            <Link to="/question"><h4>Questions</h4></Link>
            <Link to="/contact"> <h4>Contact</h4></Link>
        </div>
        <div className='mr-20'>
           {isLogin ? <button onClick={handleLogin}>Login</button> : <button onClick={handleLogOut}>Log Out</button> } 

        </div>
        </div>
    </nav>
    </>
  )
}
// import React from 'react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
  
//   function handleLogin() {
//     navigate('/Login');
//   }
  
//   function handleLogout() {
//     setIsLoggedIn(false);
//     // You might want to add additional logout logic here
//   }
  
//   return (
//     <nav className="w-full px-4 py-3 md:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img 
//             src="./Question.png" 
//             alt="Logo" 
//             className="h-8 w-auto sm:h-10 md:h-12" 
//           />
//         </div>
        
//         {/* Navigation Links */}
//         <div className="flex items-center gap-1 md:gap-6 text-sm md:text-base font-semibold">
//           <Link to="/" className="px-2 py-1 hover:text-blue-600 transition-colors">
//             Home
//           </Link>
//           <Link to="/profile" className="px-2 py-1 hover:text-blue-600 transition-colors">
//             Profile
//           </Link>
//           <Link to="/question" className="px-2 py-1 hover:text-blue-600 transition-colors">
//             Questions
//           </Link>
//           <Link to="/contact" className="px-2 py-1 hover:text-blue-600 transition-colors">
//             Contact
//           </Link>
//         </div>
        
//         {/* Login/Logout Button */}
//         <div>
//           {isLoggedIn ? (
//             <button 
//               onClick={handleLogout}
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm md:text-base"
//             >
//               Log Out
//             </button>
//           ) : (
//             <button 
//               onClick={handleLogin}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm md:text-base"
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }