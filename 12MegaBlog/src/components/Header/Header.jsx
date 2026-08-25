import React from "react";
import LogoutBtn from "./LogoutBtn";
import Container from "../container/Container";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <header className="bg-white shadow-md py-4 border-b border-gray-200"> 
      <Container>
        <nav className='flex'>
          <div className='mr-4 inline-flex items-center'>
            <Link to="/">
              <Logo width="70px" />
            </Link>
          
          </div>
          <ul className='flex items-center space-x-4'>
            {navItems.map((item) => (
              item.active ? (
                <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
              ) : null
            ))}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>

      </Container>

    </header>

    )
}

export default Header