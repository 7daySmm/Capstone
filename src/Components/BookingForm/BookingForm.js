import React from "react";
import { useState } from "react";
import Button from "../../Components/Button/Button";
import "./BookingForm.css"





const BookingForm = ({
    onFormSubmit,
    isFormSubmitted,
    availableTimes,
    dispatchOnDateChange

    }) => {

 const defaultTime = availableTimes[0];
        

    const [formData, setFormData] = useState({
        date : "",
        time: defaultTime,
        people : "",
        occasion: ""

    })

    

   

    function handelInputChange(e){

        if(e.target.name === 'date'){
            dispatchOnDateChange(e.target.value)
        }

       setFormData( {
        ...formData,
        [e.target.name]: e.target.value,
       });

    };

    const minGuset = 1;
    const maxGuset = 10;

    return(
       
        <form onSubmit={(e) => onFormSubmit(e, formData)}>

            <div className="reservation-container">
                <label htmlFor="date" className="ccontainter-item-title">
                    Date
                </label>

                <input 
                    type="date"
                    id="date"
                    name="date"
                    onChange={handelInputChange}
                    className = {isFormSubmitted && !formData.date ? "error": ""}
                />  

                 


            </div>

            <div className="reservation-container" >

                <label htmlFor="time" className="containter-item-title">
                    Time
                </label>

                <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handelInputChange}
                    className={isFormSubmitted && !formData.date ? "error" : ""}
                    >
                        {availableTimes.map(time =>
                            <option key={time}>
                                {time}
                            </option>
                        )}


                </select>
                    
             </div> 

         

             <div className="reservation-container">

                <label htmlFor="people" className="containter-item-title">
                    Number Of People
                </label>

                <input
                    type="number"
                    id="people"
                    name="people"
                    min={minGuset}
                    max={maxGuset}
                    onChange={handelInputChange}
                    className={isFormSubmitted && !formData.date ? "error" : ""}
                />    

             </div>

             <div className="reservation-container">

                <label htmlFor="occation" className="containter-item-title">
                    Occasion

                            
                </label>
                <select
                    id="occasion"
                    name="occasion"
                    onChange={handelInputChange}
                    className={isFormSubmitted && !formData.date ? "error" : ""}


                >
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                    <option value="other">Retirement</option>




                </select>

             </div>

             <div className="reservation-button">
                <Button title="Book a table" type = "submit" />

                

             </div>


        </form>
        
    )
}



export default BookingForm
