import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-red-400'>
            <ul className='flex w-full justify-between my-3'>
                <li>Logo</li>
                <li>Navegación1</li>
                <li>Navegación2</li>
                <li>Navegación3</li>
                <li className='px-2'>
                    <Link to='/login'>
                        <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
                            Iniciar Sesión
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
