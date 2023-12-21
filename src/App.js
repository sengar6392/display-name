import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [fullName, setFullName] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    if (firstName && lastName) setFullName(`${firstName} ${lastName}`);
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default App;
