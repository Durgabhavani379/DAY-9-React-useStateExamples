import React,{useState} from 'react';

const Example2 = () => {
    const[firstname,setName]=useState("bhavani");
    const[firstemail,setEmail]=useState("vdurgabhavani@gmail.com");
    const[firstPassword,setPassword]=useState("");
    /* const changeName=(e)=>{
      setName(e.target.value);
      
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value);
        
     }
     const changePassword=(e)=>{
       setPassword(e.target.value);
        */
     //}
    //  after submmiting the details it still shows the details bescause of we preventing event
     const handleEvent=(e)=>{
        e.preventDefault();
        let userObj={
            names:firstname,
            emails:firstemail,
            passwords:firstPassword
        }
        console.log(userObj);
     }
    return (
        <div>
            <form onSubmit={handleEvent}>
            <h1>Example of UseState for form handling</h1>
            <div className="content">
                <input type="text" placeholder='name' name="firstname" id="name"  onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="content">
                <input type="email" placeholder='email' name="firstemail" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="content">
                <input type="password" placeholder='password' name="firstPassword" id="password"  onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
        
    );
};

export default Example2;