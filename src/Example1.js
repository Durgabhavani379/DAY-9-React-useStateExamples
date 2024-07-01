import React,{useState} from 'react';

const Example1 = () => {
    const[data,changeData]=useState(false);
    const handle=()=>{
        changeData(!data);
    }
    return (
        <div>
           <hr></hr>
           <h1>Example of UseState</h1>
            <button onClick={handle}>{data===true ? "hide":"show"}</button>
            { data && (
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqusapien.
            </div>  )
            }
            <hr></hr>
        </div>
       
    );
};

export default Example1;