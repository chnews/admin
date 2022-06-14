import React from 'react'
import { useState } from 'react';
import { APP_NAME, API } from '../config';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'; 
import Link from 'next/link';
import Router from 'next/router';
import {signout, isAuth} from '../actions/auth'
import Sidebar from './Sidebar';






const Header = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(isOpen);
    // };

  return (
//     <>
//     <div style={{position: "fixed", top: "0", width: "100%"}}>
//   <Navbar
//     color="secondary"
//     expand="md"
//     light
//   >
//     <Link href="/dashboard">
//         <NavbarBrand style={{color: "white"}}>
//             <a>{APP_NAME}</a>
//         </NavbarBrand>
//     </Link>
//     <NavbarToggler />
//     <Collapse navbar>
//       <Nav
//         className="me-auto"
//         navbar
//       >
       
//       </Nav>
//       {!isAuth() && (
//       <Link href="/signin">
//           <NavLink style={{cursor:'pointer'}}>
//                Sign in
//             </NavLink>
//       </Link>
//       )}
//       {!isAuth() && (
//       <Link href="/signup">
//           <NavLink style={{cursor:'pointer'}}>
//                Sign up
//             </NavLink>
//       </Link>
//       )}
//         {/* {isAuth() && (
//         <Link href="/signin">
//             <NavLink style={{cursor:'pointer'}} onClick={() => signout(() => Router.push('/signin'))}>
//                  Sign out
//             </NavLink>
//         </Link>
//         )} */}

//         {isAuth() && isAuth().role === 0 && (
//           <Link href="/user">
//             <NavLink style={{color: 'white'}}>
//                  {`${isAuth().username}`}
//             </NavLink>
//           </Link>
//         )}

//         {isAuth() && isAuth().role === 1 && (
//           <Link href="/admin">
//             <NavLink style={{color: 'white'}}>
//                  {`${isAuth().username}`}
//             </NavLink>
//           </Link>
//         )}

          

//         <UncontrolledDropdown
         
//         >
//           <DropdownToggle
//             nav
            
//           >
//             <img
//               src={`${API}/user/photo/${isAuth()?.username}`}
//               className="img img-fluid rounded-circle"
//               style={{ maxHeight: '30px', maxWidth: '100%' }}
//               alt="user profile"
//           />
//           </DropdownToggle>
//           <DropdownMenu right>
//             <div>
//             <span style={{marginLeft: '20px'}}>
//             {`${isAuth()?.name}`}
//             </span>
//             </div>
//             <DropdownItem divider />
//             <DropdownItem>
//             {isAuth() && isAuth().role === 0 && (
//               <Link href="/user">
//                   Dashboard
//               </Link>
//             )}
//             {isAuth() && isAuth().role === 1 && (
//               <Link href="/admin">
//                   Dashboard
//               </Link>
//             )}
//             </DropdownItem>
//             <DropdownItem>
//             <Link href="/user/update">
//                   Profile
//               </Link>
//             </DropdownItem>

//             <DropdownItem>
//             {isAuth() && (
//             <span onClick={() => signout(() => Router.push('/signin'))}>
//               Sign out
//             </span>
//             )}
//             </DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
         
      
//     </Collapse>
//   </Navbar>
// </div>








// </>


<>
 {/*NAVBAR*/}
    {/*===================================================*/}
    <div className ='mb-5' >
    <header id="navbar" style={{position: "fixed"}}>
      <div id="navbar-container" className="boxed">
        {/*Brand logo & name*/}
        {/*================================*/}
        <div className="navbar-header">
          {isAuth() && isAuth().role === 1 && (
            <Link href="/admin">
              <a className="navbar-brand">
                <div className="brand-title">
                  <span className="brand-text text-white">Chlaman News</span>
                </div>
              </a>
            </Link>
          )}

          {isAuth() && isAuth().role === 0 && (
            <Link href="/user">
              <a className="navbar-brand">
                <div className="brand-title">
                  <span className="brand-text text-white">Chlaman News</span>
                </div>
              </a>
            </Link>
          )}
        </div>
        
        <div className="navbar-content">
          
          <ul className="nav navbar-top-links">
            <li>
              <h5 className='text-white' style={{marginTop: "22px"}}>
              {`${isAuth()?.username}`}
              </h5>
            </li>
           
            
           
            <li id="dropdown-user" className="dropdown">
                <span className="ic-user pull-right">
                
              <UncontrolledDropdown>
               
           <DropdownToggle
             nav
           >
            <img
               src={`${API}/user/photo/${isAuth()?.username}`}
               className="img img-fluid rounded-circle mb-3"
               style={{ maxHeight: '30px', maxWidth: '100%' }}
               alt="profile image"
           />
           </DropdownToggle>
           <DropdownMenu right>
             <div>
             <span style={{marginLeft: '20px'}}>
             {`${isAuth()?.name}`}
             </span>
             </div>
             <DropdownItem divider />
             <DropdownItem>
             {isAuth() && isAuth().role === 0 && (
               <Link href="/user">
                   Dashboard
               </Link>
             )}
             {isAuth() && isAuth().role === 1 && (
               <Link href="/admin">
                   Dashboard
               </Link>
             )}
             </DropdownItem>
             <DropdownItem>
             <Link href="/user/update">
                   Profile
               </Link>
             </DropdownItem>

             <DropdownItem>
             {isAuth() && (
             <span onClick={() => signout(() => Router.push('/signin'))}>
               Sign out
             </span>
             )}
             </DropdownItem>
           </DropdownMenu>
         </UncontrolledDropdown>
                  
               
                </span>
              
             
              
            </li>
            
          </ul>
        </div>
      </div>
         
      
    </header>
    </div>


</>
  )
}

export default Header