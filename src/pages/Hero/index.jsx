import React from "react";
import {Link} from "react-router-dom";
import {Header} from "semantic-ui-react";

const Hero = () => {
    return (
        <div id={"home"}>
            <Header size='huge'>A Book Reader</Header>
            <Header size='tiny'>start to explore the world now</Header>
            <Link to={"/shop"}>
                <button>go to shop</button>
            </Link>
        </div>
    )
};

export default Hero
