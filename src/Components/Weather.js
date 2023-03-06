import React from "react";
const Weather=(props)=>{
    return(
        <div className="info">
            {
                props.temperature && 
                <p className="info-key">Temperature : 
                    <span className="info-value">{props.temperature} °C</span> 
                </p>
            }
            {
                props.city && 
                <p className="info-key">City : 
                    <span className="info-value">{props.city}</span>
                </p>
            }
            {
                props.country && 
                <p className="info-key">Country : 
                    <span className="info-value">{props.country}</span>
                </p>
            }
            {
                props.humidity && 
                <p className="info-key">Humidity : 
                    <span className="info-value">{props.humidity}</span>
                </p>
            }
            {
                props.description && 
                <p className="info-key">Description : 
                    <span className="info-value">{props.description}</span>
                </p>
            }
            {
                props.error && 
                <p className="info-key">Error : 
                    <span className="info-value">{props.error}</span>
                </p>
            }
        </div>
    )
}
export default Weather;