import React from 'react';

const Form = ({setUser, users}) => {
    const handleAdduser = (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};
        e.preventDefault();

        // Post mehod
        
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(data => {
            const newUser = [...users, data];
            setUser(newUser)
            console.log('Success', data)
        })
    }

    return (
        <div>
           <form onSubmit={handleAdduser}>
               <input type="text" name='name' placeholder='Name'/> <br />
               <input type="text" name='email' placeholder='Email'/> <br />
               <input type="submit" value="Add User" />

           </form>
        </div>
    );
};

export default Form;