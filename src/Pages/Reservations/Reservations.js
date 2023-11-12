import BookingForm from "../../Components/BookingForm/BookingForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import pages from "../../Utils/pages";
import { fetchAPI } from "../../Utils/Api";
import { useReducer } from "react";
import ConfirmedBooking from "../../Components/ConfirmedBooking/ConfirmedBooking";
import "./Reservations.css"


function Reservations(){
    const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false)


   

    const handelFormSubmit = (e, formData )=>{
        e.preventDefault();
        setIsFormSubmitted(true);
        const areAllInputsFilled = Object.values(formData).every(
            (value)=> value
        )

        if(areAllInputsFilled){
            setIsConfirmed(true)
        }
    };



   const setTimes = (availableTimes, date )=> {
        const response = fetchAPI(new Date(date));
        return response.length !== 0 ? response : availableTimes;

    }

   

    

    const [availableTimes, dispatchOnDateChange] = useReducer(setTimes, []);

    
  

    return(
        <div data-testid="reservations-component" className="reservation">
        <div className="reservation-card">
            <h1 className="reservation-title">Reservation</h1>
            <BookingForm 
            
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            onFormSubmit={handelFormSubmit}
            isFormSubmitted={isFormSubmitted}
            
            
            
            />

        </div>

        {isConfirmed && (

            <ConfirmedBooking 

                onClose ={() => {
                    setIsConfirmed(false);
                    navigate(pages.get("home").path)
                }}

                title="Reservation Completed!"
                
                description="Thank you for choosing Little Lemon! Your reservation has been successfully made. 
                             You will receive a confirmation email with the details of your reservation.
                            We are excited to see you soon!"
            
            
            />

        )}

         
            
        </div>
    )

}

export default Reservations;