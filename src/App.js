import './App.css';
import { useEffect, useState } from 'react';
import Form from './componants/Form';

function App() {
  const [users, setUser] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))

  }, [])
  return (
    <div className="App">
      <h1>User: {users.length}</h1>
      <p>
      {
        users.map(user => <p key={user.id}>{user.name}</p>)
      }
      </p>
      <Form setUser={setUser} user={users}></Form>
      </div>
  );
}

export default App;
