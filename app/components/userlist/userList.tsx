import {useState, useEffect, use} from "react";

  interface User {
  id: number;
  name: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => setUsers(data)).catch(error => setError(error.message)).finally(() => setLoading(false))},[])
    
    if (loading) {
    return <div>Загрузка пользователей...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }
  
    return (<>
    <ul>
        {users.map(({id, name}) => (
            <li key={id}><p>{name}</p></li>
        ))}
    </ul>
    </>  );
}
 
export default UserList;