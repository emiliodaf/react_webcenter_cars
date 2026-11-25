import logo from '../../assets/logo.svg'
import { Container } from '../../components/container'
import { Link } from 'react-router'
import { Input } from '../../components/input'

export function Login() {
 
  return (
  <Container>
    <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
      <Link to="/" className='mb-6 max-w-sm w-full'>
      <img src={logo} 
      alt="Logo"
      className='w-full'
       />
     </Link>

      <form className='bg-white max-w-xl w-full rounded-lg'>
        <Input type="email" 
               placeholder="Digite seu e-mail" 
               name="email"/>

        </form>
         
      

   </div>
  </Container>
   
  )
}
