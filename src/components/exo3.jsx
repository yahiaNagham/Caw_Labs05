import { useState } from "react";

export function Exercise3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUsers([...users, { username, password }]);
      setUsername("");
      setPassword("");
    }
  };

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div style={{border: "1px solid #ccc", padding: "10px", marginBottom: "20px"}}>
      <h2>Exercise 3</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.password}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
