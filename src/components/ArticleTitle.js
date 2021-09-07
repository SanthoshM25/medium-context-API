import { Fragment, useContext } from "react";
import ArticleContent from "./ArticleContent";
import UserContext from "../contexts/userContext";

export default function ArticleTitle() {
  const user = useContext(UserContext);
  return (
    <Fragment>
      {`The Author of this article is ${user.user.name}`}
      <br />
      <ArticleContent />
    </Fragment>
  );
}
