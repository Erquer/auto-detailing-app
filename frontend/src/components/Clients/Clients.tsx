import React from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/slices/userSlice/user";


const Clients: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div>

            <button onClick={()=>{
                dispatch(loginUser('Smok', 'Wawelski'));
            }}>Click</button>
        </div>
    );
}

export default Clients;