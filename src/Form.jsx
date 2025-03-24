import { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        terms: false,
        gender: ''
    });
    const onChangeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
        
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ name: '', email: '', phone: '', terms: false, gender: '' });
        
    }
   

    return(
        <>
        <form onSubmit={onSubmitHandler}>
            <label for="name">Name:</label><br/>
            <input onChange={onChangeHandler} type="text" id="name" name="name" /><br/>
            <label for="email">Email:</label><br/>
            <input onChange={onChangeHandler} type="email" id="email" name="email" /><br/>
            <label for="phone">Phone:</label><br/>
            <input onChange={onChangeHandler} type="tel" id="phone" name="phone" /><br/>
            <input onChange={onChangeHandler} type="checkbox" id="terms" name="terms" />
            <label for="terms">I agree to the terms and conditions</label><br/>
            <label for="gender">Gender</label><br/>
            <input onChange={onChangeHandler} type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label><br/>
            <input onChange={onChangeHandler} type="radio" id="male" name="gender" value="female" />
            <label for="male">Female</label><br/>
            <input onChange={onChangeHandler} type="radio" id="male" name="gender" value="other" />
            <label for="male">Other</label><br/>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )

}
export default Form;