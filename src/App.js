import { useState } from "react";
import ArticleTitle from "./components/ArticleTitle";
import ChangeName from "./components/ChangeName";
import UserContext from "./contexts/userContext";

export default function App() {
  const [user, setUser] = useState({ name: "Santhosh", role: "developer" });
  const handleNameChange = () => {
    if (user.name === "Santhosh") {
      setUser({ name: "Kohli", role: "cricketer" });
    } else {
      setUser({ name: "Santhosh", role: "developer" });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: user,
        changeName: handleNameChange
      }}
    >
      <div className="App">
        <ArticleTitle />
        <br />
        <ChangeName />
      </div>
    </UserContext.Provider>
  );
}
