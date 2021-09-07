import { Fragment, useContext } from "react";
import UserContext from "../contexts/userContext";

export default function ArticleContent() {
  const user = useContext(UserContext);
  return <Fragment>{`And he is a ${user.user.role}`}</Fragment>;
}
