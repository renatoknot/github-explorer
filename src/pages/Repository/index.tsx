import React from "react";
import { useParams, Link } from "react-router-dom";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Header, RepositoryInfo, Issues } from "./styles";
import logoImg from "../../assets/logo.svg";

const Repository: React.FC = () => {
  const { repositoryOwner, repositoryName } = useParams();

  const repositoryFullName = `${repositoryOwner}/${repositoryName}`;

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/47463666?v=4"
            alt="Renatoknot"
          />
          <div>
            <strong>Renatoknot/movieland-app</strong>
            <p>Descrição do Repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>teste</strong>
            <p>teste</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
