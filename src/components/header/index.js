import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";   

const Header = () => {
  return (
    <Root>

    <nav className="flex items-center justify-between bg-transparent p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={process.env.PUBLIC_URL + "/images/image 3.png"}
          className=""
        />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
          {/* <FadeMenu /> */}
          Menu
        </button>
      </div>
      <div className="hidden w-full lg:flex lg:items-center lg:w-auto gap-2">
        <div className="text-sm flex  gap-10 justify-center align-bottom ">
          <Link
            className=""
          >
            Home
          </Link>
          <Link
          >
         About
          </Link>
          <Link
            className=""
          >
            Speaker
          </Link>
          <Link
            className=""
          >
            Dates
          </Link>
          <Link
            className=""
          >
            Pre Conference
          </Link>
        </div>
            <button className="ml-3 text-lg bg-white hover:text-white hover:bg-red-500 text-red-500 font-extrabold py-1 px-2 rounded-full border border-red-500">
          Buy Ticket
        </button>
      </div>
    </nav>
    </Root>

  );
};

export default Header;
const Root = styled.div`
  width: 100%;
`;
const Link = tw.li`
block  font-bold lg:inline-block lg:mt-0 text-black hover:text-white  text-lg

`