import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router';
import { FiUser, FiLogIn } from 'react-icons/fi';

export function Header () {

const signed = false;
const loadingAuth = false;


    return(
        <div className='W-full flex items-center justify-center h-16 bg-white drop-shadow'>
            <header className='flex w-full max-w-7xl items-center justify-between px-4 mx-auto'>
                <Link to ='/'>
                 
                 <img src={logoImg}
                 alt="Logo do Site" />

                </Link>
                
                {!loadingAuth && signed &&(
                <Link to= "/dashboad">
                   <div className='border-2 rounded-full p-1 border-grey-900'>
                    <FiUser size = {24} color='#000'/>
                   </div>
                </Link>
                )}

                  {!loadingAuth && !signed &&(
                <Link to= "/login">
                   <FiLogIn size = {24} color='#000'/>
                </Link>
                )}
            </header>
        </div>
    )
}