import React from "react"
import "./Button.css"

const Button = ({title, onClick, type})=> {
    

    const handelClick = (e) => {
        if(type !== 'submit'){
            e.preventDefault()
        }
      

        if(onClick){
            onClick(e)
        }

    
      
    };

    return(
        <button 
          type={type}
        
          className="button"
          onClick={handelClick}
        >

            {title}



        </button>
    );

};



export default Button;