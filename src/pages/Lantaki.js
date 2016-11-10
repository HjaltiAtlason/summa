import React from 'react';

const Lantaki = (props) => {
    return (
        <div>
             <p> Hérna er Lántaki að gera það gott</p>
            {props.children} 
            
        </div>
    );
};

export default Lantaki;

