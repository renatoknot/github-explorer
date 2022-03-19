import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47463666?v=4"
            alt="Github Avatar"
          />
          <div>
            <strong>renatoknot/movieland-app</strong>
            <p>
              Movieland is a mini project to search for movies, using React.js I
              learned to work with the api of the OMDb website (it's free)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47463666?v=4"
            alt="Github Avatar"
          />
          <div>
            <strong>renatoknot/movieland-app</strong>
            <p>
              Movieland is a mini project to search for movies, using React.js I
              learned to work with the api of the OMDb website (it's free)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47463666?v=4"
            alt="Github Avatar"
          />
          <div>
            <strong>renatoknot/movieland-app</strong>
            <p>
              Movieland is a mini project to search for movies, using React.js I
              learned to work with the api of the OMDb website (it's free)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
