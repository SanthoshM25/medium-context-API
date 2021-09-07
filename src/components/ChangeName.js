import { useContext } from "react";
import UserContext from "../contexts/userContext";

export default function ChangeName() {
  const user = useContext(UserContext);

  return <button onClick={user.changeName}>Change Name</button>;
}
