import React from "react";
import styled from "styled-components";
const Speaker = () => {
  return (
    <>
        <Root >
        <span className="font-bold text-red-500 uppercase tex-3xl">who's speaking</span>
                <Heading >
                  <span>key note speakers</span>
                </Heading>
          <MainPage>
          <BoxContainer>
  <div className=" text-white w-full bg-red-500 bg-opacity-75 text-left pl-3">
    <Title className="font-extrabold text-3xl  capitalize">dr.s ramaprabhu</Title>
    <span className="text-yellow-700 capitalize">ITT madras,india</span>
</div>    

    </BoxContainer>
    <BoxContainer>
  <div className=" text-white w-full bg-red-100 text-left pl-3">
    <Title className="font-extrabold text-3xl  capitalize">dr.s ramaprabhu</Title>
    <span className="text-yellow-700 capitalize">ITT madras,india</span>
</div>    

    </BoxContainer>
    <BoxContainer>
  <div className=" text-white w-full bg-red-100 text-left pl-3">
    <Title className="font-extrabold text-3xl capitalize">dr.s ramaprabhu</Title>
    <span className="text-yellow-700 capitalize">ITT madras,india</span>
</div>    

    </BoxContainer>
    <BoxContainer>
  <div className=" text-white w-full bg-red-100 text-left pl-3">
    <Title className="font-extrabold text-3xl  capitalize">dr.s ramaprabhu</Title>
    <span className="text-yellow-700 capitalize">ITT madras,india</span>
</div>    

    </BoxContainer>
    
          </MainPage>
        </Root>
   
    </>
  );
};

export default Speaker;

const Root = styled.div`
/* height:70vh ; */
padding:5rem 0;
`;
const Title = styled.p`
color: white;
font-size: 1.1rem;
`
const Heading = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.3rem;
  color: black;
font-weight: 900;
line-height: 3rem;
text-transform:uppercase ;
`;
const MainPage = styled.div`
  display: grid;
  grid-template-columns :auto auto auto auto ;
  gap:3rem ;
`;

const ImageContainer = styled.div`
  /* background:url("");     */
  background-repeat:no-repeat ;
  background-size:cover;
  background-color:green ;
  min-width:60vmin ;
box-shadow: 40px;
border-radius: 1rem;
`;
const BoxContainer = styled.div`
  background: #3c1e49;
width:100% ;
height:20rem ;
  display: flex;
  align-items: flex-end;
box-shadow: 40px;
border-radius: 10px;
background-image: url("/images/image 2.png");

`;