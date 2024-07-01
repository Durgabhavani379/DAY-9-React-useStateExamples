import React,{useState} from 'react';

const UseState2 = () => {
   const dataObj=[
    { 
     id:"abc", 
     firstname:"emma",
     lastname:"watson",
     age:20
    },
    {
         id:"def",
      firstname:"durga",
     lastname:"bhavani",
     age:21
    },
    {
         id:"ghi",
     firstname:"hello",
     lastname:"world",
     age:22
    }
   ]
    const[data,setData]=useState(dataObj);
     const deleteItem=(GivenId)=>{
         const filterdata=data.filter((eachItem)=>{
              return eachItem.id!==GivenId;
              
        })
        setData(filterdata);
     }
    return (
       
        <section className="container">
            <hr></hr>
            <ul className="unordered-list">
            {data.map((item,index)=>{  
                const{firstname,lastname,age,id}=item;              
               return (   
                  <li key={index}>
                    <h1>My firstname is{firstname}</h1>
                    <h1>My Lastname is {lastname}</h1>
                    <h1>My age is {age}</h1>
                    <button onClick={()=>deleteItem(id)}>DeleteMe</button>
                </li>);
                
            })}
                
                </ul>
                
        </section>
    );
};

export default UseState2;