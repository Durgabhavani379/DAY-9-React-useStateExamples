import React,{useState} from'react';
import UseState2 from './UseState2';
import Example1 from './Example1';
import Example2 from './Example2';

function App() {

  // const[count,setcount]=useState(0);
  // const increment=()=>{
  //   return(setcount(count+1));
  // }
  // const decrement=()=>{
  //   return(setcount(count-1));
  // }

  const dataObj={
    firstname:"emma",
    lastname:"watson",
    age:22
  }
  const [data,changedata]=useState(dataObj);
  const changeFirstName=()=>{
    return changedata({
      ...data,
      firstname:prompt("Enter the first name")
    })
  }
  const changeLastName=()=>{
    return changedata({
      ...data,
      lastname:prompt("Enter the last name")
    })
  }
  const changeAge=()=>{
    return changedata({
      ...data,
      age:prompt("Enter the age")
    })
  }
  
  return (
    <>
   <section className="container">
      {/* <div className="counter">
        <h1>Counter App</h1>
      </div>
      <div className="buttons">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      </div> */}
      <h1>The firstname:{data.firstname}</h1><button onClick={changeFirstName}>Change firstname</button>
      <h1>the lastname:{data.lastname}</h1><button onClick={changeLastName}>Change lastname</button>
      <h1>the age:{data.age}</h1><button onClick={changeAge}>Change Age</button>
      
   </section>
   <article>
    <UseState2/>
   </article>
   <article>
        <Example1/>
   </article>
   <article>
    <Example2/>
   </article>
   </>
  );
}

export default App;
