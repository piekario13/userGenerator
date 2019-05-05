import React from 'react';

const ButtonFletchUsers = (props) => {
    return (
        <button style={{
            padding: '20px',
            border: '1px solid #000',
            backgroundColor: '#fff',
            margin: '20px'
        }}
            onClick={props.click}>Dodaj użytkownika</button>
    );
}

export default ButtonFletchUsers;