import { useEffect } from "react";
import "./Form.css";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";


function Form() {
 const {
   register,
   handleSubmit,
   formState: { errors, isSubmitSuccessful },
   reset,
 } = useForm();


 const onSubmit = (dataForm) => {
   console.log(dataForm);
 };


 useEffect(() => {
   if (isSubmitSuccessful) {
     setTimeout(() => {
       reset();
     }, 3000);
   }
 }, [isSubmitSuccessful, reset]);


 return (
   <>
     <div className="formLogin">
       <form
         onSubmit={handleSubmit(onSubmit)}
         method="post"
         id="form1"
         noValidate
       >
         <label htmlFor="username">
           <b>Name:</b>
         </label>
         <input
           type="text"
           {...register("username", {
             required: true,
             pattern: /^[a-zA-Z0-9_]{3,20}$/,
            })}
            id="username"
          />
          {errors.username && <p>Username is required and must be valid</p>}
 
 
          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
            id="email"
          />
          {errors.email && <p>Email is required and must be valid</p>}
 
 
          <label htmlFor="psw">
            <b>Password:</b>
          </label>
          <input
            type="password"
            {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/ })}
            id="psw"
          />
          {errors.password && <p>Password is not valid</p>}
          <Button size="big" type="submit" />
          {isSubmitSuccessful && (
          <div className="popup">
            <p>Form submitted successfully!</p>
          </div>
        )}
        </form>
      </div>
    </>
  );
 }
 
 
 export default Form;