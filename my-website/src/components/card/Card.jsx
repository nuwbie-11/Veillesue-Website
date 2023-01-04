import React from 'react';


const Card = props =>{


    return (
        // <div>
        //     p
        // </div>
        <div className="grid place-items-center rounded transition ease-in-out font-bold hover:scale-110 duration 300 w-64" style={
            {
                width:"254px",
                height:"254px",
                backgroundColor: props.bgColor
            }
        }>
            <a href={"https://github.com/nuwbie-11/"+props.outerLink} target="_blank" rel="noreferrer">
                <img src={"images/"+props.url} alt="" className="object-scale-down" />
            </a>
        </div>
    );
}

Card.defaultProps = {
    url: "images/",
    bgColor: "#DF7861",
    outerLink: "",
}


export default Card;