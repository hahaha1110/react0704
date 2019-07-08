import React from 'react'


const ClockDigial = (props) => {
    let thisStyle = {
        margin : '200px'
    }
    return(
        <div style = {thisStyle}>
            {props.time}
        </div>
    );
}
export default ClockDigial;