import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [state, setState] = useState(0)
    const data = images[state]

    const handleBackClick = () => {
        if (state == 0) {
            setState(2)
        }
        else {
            setState(state -1)
        }
    }

    const handleForwardClick = () => {
        if (state == 2) {
            setState(0)
        }
        else {
            setState(state +1)
        }
    }

    return (

        <div className="container">

            <ArrowBackIosIcon className="arrows" onClick={handleBackClick} />

            <div className="details" >
                <div>
                    <h2>{data.title}</h2>
                </div>
                <div>
                    <h3>{data.subtitle}</h3>
                </div>

            </div>

            <img src={data.img} alt="" />

            <ArrowForwardIosIcon className="arrows" onClick={handleForwardClick} />

        </div>
    )
}

export default Carousel;