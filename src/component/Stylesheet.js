import React from 'react';
import './myStyle.css'
const Stylesheet = (props) => {
    let classname = props.primary ? 'primary': ''
    return (
        <div>
          <h1 className = {`${classname} font-sz`}>Stylesheets</h1>  
        </div>
    );
}

export default Stylesheet;
