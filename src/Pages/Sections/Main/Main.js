import { useNavigate } from "react-router-dom";
import React from "react"

import Image from "../../../assets/res.jpg"
import pages from "../../../Utils/pages";
import "./Main.css";
import Button from "../../../Components/Button/Button";




function Main(){

    const navigate = useNavigate()

    const onClickReserve = () => {
        navigate(pages.get("reservations").path)

    }
   
    return(
        <div className="main-background">

        <div className="main">

       
        <div>
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p>
        Set within an 18th century restored building, Little Lemon is a restaurant which encompasses a varietal menu of 
        Mediterranean tasting dishes, grills, pasta, and one of the best pizzas in the city.
        </p>

       <Button title= {"Make a Reservation"} onClick={onClickReserve} />
       

        </div>            


            <img 
                className="image" 
                src={Image}
                alt="Restaurant food"
                height={200}
                width={200}
             />


       
    </div>
    </div>

        
    )
}


export default Main;