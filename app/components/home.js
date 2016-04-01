import React from 'react';
import ReactRouter from 'react-router';
import {Link} from "react-router";
import MainContainer from "../containers/mainContainer";
import WorkPlacesContainer from "../containers/WorkPlacesContainer";

class Home extends React.Component{
    render() {
        return(
            <MainContainer>
                <WorkPlacesContainer/>
            </MainContainer>
        )
    }
};

export default Home;
