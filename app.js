import { useState } from "react";
import "./styles.css";

const users = [
  { id: 1, name: "Luka", active: true },
  { id: 2, name: "Ana", active: false },
  { id: 3, name: "Mark", active: true },
  { id: 4, name: "Petra", active: false },
];

export default function App() {
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  const filteredUsers = showActiveOnly
    ? users.filter((user) => user.active)
    : users;

  const handleReset = () => {
    setShowActiveOnly(false);
  };

  return (
    <div className="app">
      <h1>Users</h1>

      <label>
        <input
          type="checkbox"
          checked={showActiveOnly}
          onChange={() => setShowActiveOnly((prev) => !prev)}
        />
        Show only active users
      </label>

      <button onClick={handleReset}>Reset</button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} {user.active ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}
