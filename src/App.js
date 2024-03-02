
//Home Work is to Style it
import { useState } from "react";
import "./App.css";

function App() {
  const [formData,setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"India",
    streetAddress:"",city:"",State:"",PostelCode:"",Comments:false,
    Candidates:false,Offers:false,PushNotification:""
   } )

    function changeHandler(event){
       const {name,value,checked,type} = event.target;
       setFormData( (prev) => ({...prev,[name]: type === "checkbox" ? checked:value}))
    }


   
    
    function SubmitHandler(event){
        event.preventDefault();
        console.log("finally the details of Users");
        console.log(formData);
    }



  return (
<div className='flex flex-col items-center'>
  <form onSubmit={SubmitHandler}>
  <label htmlFor="firatName">First Name</label>
  <br></br><br></br>
  <input type = "text"
   name = "firstName" 
   id = "firatName" 
   placeholder="enter The first name"
    value={formData.firstName} 
    onChange={changeHandler}
    className="outline"
  />

<br></br> <br></br>
<label htmlFor="lastName">Last Name</label>
<br></br> <br></br>
<input type = "text"
   name = "lastName" 
   id = "lastName" 
   placeholder="Enter The last name"
    value={formData.lastName} 
    onChange={changeHandler}
    className="outline"
  />
  <br></br><br></br>
 <label htmlFor="email">Email</label>
 <br></br> <br></br>
 <input type = "emial"
   name = "email"
   id = "email" 
   placeholder="abhi@emil"
    value={formData.email} 
    onChange={changeHandler}
    className="outline"
  />
  <br></br><br></br>
  <label htmlFor="country">Country</label>
<br></br><br></br>
  <select
  id = "country"
 name = "country"
  value={formData.country} 
  onChange={changeHandler}
   className="outline">
    <option>India</option>
    <option>United States</option>
    <option>Japan</option>
    <option>Australia</option>
    <option>France</option>
    <option>Brazil</option>
  </select>
  <br></br><br></br>

  <input type = "text"
   name = "lastName" 
   id = "lastName" 
   placeholder="Enter The last name"
    value={formData.lastName} 
    onChange={changeHandler}
    className="outline"
  />
  <br></br><br></br>




<label htmlFor="streetAddress">street Address</label>
  <br></br><br></br>
  <input type = "text"
   name = "streetAddress" 
   id = "streetAddress" 
   placeholder="C-922 Soth Block Hostel c"
    value={formData.streetAddress} 
    onChange={changeHandler}
    className="outline"
  />
  <br></br><br></br>

<label htmlFor="city">city</label>
  <br></br><br></br>
  <input type = "text"
   name = "city" 
   id = "city" 
   placeholder="GopalGanj"
    value={formData.city} 
    onChange={changeHandler}
    className="outline"
  />

<br></br><br></br>
<label htmlFor="State">State</label>
  <br></br><br></br>
  <input type = "text"
   name = "State" 
   id = "State" 
   placeholder="   Bihar"
    value={formData.State} 
    onChange={changeHandler}
    className="outline"
  />

<br></br><br></br>
<label htmlFor="PostelCode">PostelCode</label>
  <br></br><br></br>
  <input type = "text"
   name = "PostelCode" 
   id = "PostelCode" 
   placeholder="92201703100"
    value={formData.PostelCode} 
    onChange={changeHandler}
    className="outline"
  />
  <br></br><br></br>

  <fieldset >
  <legend>By Email</legend>



  <br></br>
  <div className="flex ">
  <input
   type="checkbox"
   id= "Comments"
   name="Comments"
   checked={formData.Comments}
   onChange={changeHandler} 
   />
   <div>
    <label htmlFor="Comments">Comments</label>
    <p> Get notified when somones posts a comment on a posting.</p>
    </div>
  </div>

  <br></br>
  <div className="flex ">
  <input
type="checkbox"
   id= "Candidates"
   name="Candidates"
   checked={formData.Candidates}
   onChange={changeHandler} 
   />
   <div>
    <label htmlFor="Candidates">Candidates</label>
    <p>Get notified when a candidate applies for  job</p>
    </div>
  </div>
  



  <br></br>
  <div className="flex ">
  <input
  type="checkbox"
   id= "Offers"
   name="Offers"
   checked={formData.Offers}
   onChange={changeHandler} 
   />
   <div>
    <label htmlFor="Offers">Offers</label>
    <p>Get notified when a candidate accepts or rejects Offer an offer</p>
    </div>
  </div>
</fieldset>





<fieldset>
  <legend>
  Push Your Notifiaction
  <p>These Are delivered via SMS to your mobile phone.</p>
  <br></br><br></br>
  <input
   type = "radio"
   id = "pushEverything"
   name="PushNotification"//name should be same soo that we will be able  to select one radioo button at  a time
   value="Everything"
   onChange={changeHandler} 
  />


  <label htmlFor="pushEverything">
    Everything
  </label>
  <br></br><br></br>
  <input
   type = "radio"
   id = "pushEmail"
   name="PushNotification"//name should be same soo that we will be able  to select one radioo button at  a time
   value="Same As Email"
   onChange={changeHandler} 
  />
  <label htmlFor="pushEmail">
  Same As Email
  </label>



<br></br><br></br>
  <input
   type = "radio"
   id = "pushNothing"
   name="PushNotification"//name should be same soo that we will be able  to select one radioo button at  a time
   value="No push Notifiaction"
   onChange={changeHandler} 
  />
  <label htmlFor="pushNothing">
  No push Notifiaction
  </label>
  </legend>
</fieldset>

<br></br><br></br>
<button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
   Save</button>
  </form>
</div>
  );
}





export default App;
