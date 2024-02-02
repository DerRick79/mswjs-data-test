import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users').then(v => {
        setUsers(JSON.parse(v.data));
    })
  }, [] )
  
  return (
    <div>
      { users.map(v => 
        <p key={v['id']}>
          {v['firstName']}
        </p>
      ) }
    </div>
  );
}

export default App;
