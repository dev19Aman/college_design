
import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight} from 'react-icons/ai';
const Main = () => {
  return (
    <>
        <Root >
          <MainPage>
    <FirstContainer>
                <Heading >
                  <span>Maharaja Agrasen University</span>
                </Heading>
                <Para>
                    <p>
                    Maharaja Agrasen University established in the year 2013, was inaugurated by Shri Pranab Mukerjee, 
                    Hon’ble President of India. It aspires to become the University of first choice for potential students, teaching and 
                    research community and recognized for providing excellent opportunities for global success. MAU wishes to be acknowledged as a value-based campus where students, faculty and staff are creatively and actively engaged in scholarly activities of relevance to the community at large. Mission of MAU is to contribute to the society through imparting vibrant, innovative learning and research at the highest international levels opportunities for global success. 
                    </p>
                    <p className="mt-2">
MAU wishes to be acknowledged as a value-based campus where students, faculty and staff are creatively and actively engaged in 
scholarly activities of relevance to the community at large by providing intellectual environment built on a commitment of free and open enquiry.  
                    </p>
                </Para>
                <ViewButton className="bg-red-500 font-bold rounded-full flex justify-end items-center gap-1">

       Admission Details
       <div className="bg-white text-red-500 items-center px-2 py-2 rounded-full " >
<AiOutlineArrowRight fontSize={25} />
            </div>
        </ViewButton>
                  </FirstContainer>
                  <ImageContainer>
              {/* <img src="/images/image 2.png" className="bg-cover object-center"/> */}
        </ImageContainer>
          </MainPage>
        </Root>
   
    </>
  );
};

export default Main;

const Root = styled.div`
/* height:70vh ; */
padding:5rem 0;
`;
const Para = styled.p`
color: black;
font-size: 1.1rem;
margin-top: 1rem;
`
const Heading = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.3rem;
  color: black;
font-weight: 900;
width: 50%;
line-height: 3rem;
`;
const MainPage = styled.div`
  display: flex;
  /* padding:0 10rem; */
/* justify-content:space-evenly; */
justify-content:space-between;

`;

// const ImageContainer = styled.div`
// background-image: url("/images/image 2.png");
// background-size: cover;
// object-fit:cover ;
// width: 1000px;
// background-color: green;
// border-radius: 5px;
// `;
const FirstContainer = styled.div`
width:60% ;
`
const ImageContainer = styled.div`
 background-image: url("/images/image 2.png");
  /* background:url("");     */
  background-repeat:no-repeat ;
  background-size:cover;
  background-color:green ;
  /* /* width: 460px; */
  /* height: 400px;  */
  min-width:65vmin ;
box-shadow: 40px;
border-radius: 1rem;
`;
const ViewButton = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 900;
  width: 24%; 
  margin-top: 1rem;
  font-weight:800;
  padding:0.5rem 0.5rem;
`