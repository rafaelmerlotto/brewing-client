import * as React from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from "react-router-dom";
import Nav from "../components/Nav";


interface DataRegister {
    name: string
    email: string;
    password: string;
}

export const Register = () => {

    const [registed, setRegisted] = React.useState<boolean>(false);
  
    const { handleSubmit, register } = useForm<DataRegister>();
    const onSubmit = async (data: DataRegister) => {
       console.log(data)
    }
    

    return (
        <>
            <Nav/>

            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>Name</label>
                    <input type="name"  {...register('name')} />

                    <label>Email</label>
                    <input type="email" {...register('email')} />

                    <label>Password</label>
                    <input type="password" {...register('password')} />

                    <button className="btn" type="submit">Register</button>

                    <Link style={{ color: '#000', fontSize: 17, textDecoration: 'none' }} to="/login"> Login </Link>
                </form>

            </div>
        </>


    );
};
