import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../componnets/AppContext';
import { getAllLocalStorage } from '../services/storage';

const Conta = () => {
    const navigate = useNavigate();
    const params = useParams();

    const {isLoggedIn} = useContext(AppContext);
    const { id } = params;

    
    !isLoggedIn && navigate('/');

    return (
        <>
            <p>id: {id}</p>
        </>
    )
}

export default Conta;