import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import Nav from '../components/Nav';
import { useAuth } from '../authentication/auth';



interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const [err, setErr] = React.useState<boolean>(false);
  const { login, token } = useAuth();
  const { handleSubmit, register } = useForm<LoginData>();
  const onSubmit = async (data: LoginData) => {
    setErr(false)
    const res = await login(data.email, data.password)
    setErr(!res)
  };
  if(token){
    return <Redirect to='/'/>
  }

  return (
    <>
      <Nav />
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input type="email" {...register('email')} />

          <label>Password</label>
          <input type="password"   {...register('password')} />

          <button className='btn' type='submit'>Login</button>

          <Link style={{ color: '#000', fontSize: 17, textDecoration: 'none' }} to="/register"> Register </Link>
        </form>
      </div>

    </>

  );
};
