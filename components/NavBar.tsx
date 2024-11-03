import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ITWorld.io</h1>
          <nav>
            <ul className=" text-base flex space-x-4">
              <li>
                <Link className="hover:text-gray-400" href="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="/registration">
                  Registration
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar;