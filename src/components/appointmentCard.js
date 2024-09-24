import React from "react";
import './appointmentcard.css'
const AppointmentCard = (props)=>{
    const data = props.products
    console.log(data)
    return(
        <div id='appoint'>
            {
                data.map((d)=>(
                    <div id="">
                        <div>
                            <img src={d.photo}/>
                        </div>
                        <div>
                            <p>{d.name}</p>
                            <p>{d.price}</p>
                        </div>
                        
                        <div>
                            <button>Book Appointment</button>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default AppointmentCard;