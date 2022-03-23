import React from "react";
import { useParams } from "react-router-dom";

const Repository: React.FC = () => {
  const { repositoryOwner, repositoryName } = useParams();

  const repositoryFullName = `${repositoryOwner}/${repositoryName}`;

  return <h1>Repository: {repositoryFullName}</h1>;
};

export default Repository;
