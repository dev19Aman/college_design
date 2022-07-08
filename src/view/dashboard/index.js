import React from 'react'
import styled from "styled-components";
import Header from '../../components/header';
import Main from '../../components/main';
import AboutConference from '../../components/main/aboutConference';
import Speaker from '../../components/main/speakers';

const Dashboard = () => {
  return (
    <Root >
<ComponentContainer >
<Header/>
<Main/>
<AboutConference/>
<Speaker/>
        </ComponentContainer>
    </Root>
  )
}

export default Dashboard
const Root = styled.div`
background-color: #F5F5F5;
width: 100%;
`
const ComponentContainer = styled.div`
width: 80vw;
margin: auto;

`