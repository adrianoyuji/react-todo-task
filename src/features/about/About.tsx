import React from "react";

const About = () => {
  return (
    <section className="container">
      <h2>About</h2>
      <p>
        Chore Tracker is a simple note-taking web app. It was developed as a
        React, Redux and TypeScript code challenge!
      </p>
      <span>Main features:</span>
      <ul>
        <li>Show a list of chores;</li>
        <li>Create a new chore;</li>
        <li>Edit a chore;</li>
        <li>Delete a chore;</li>
        <li>All actions communicates with the API.</li>
      </ul>
      <span>Other functionalities:</span>
      <ul>
        <li>Supports routing;</li>
        <li>Delete confirmation dialog;</li>
        <li>SCSS's BEM methodology;</li>
        <li>Mobile friendly;</li>
      </ul>
      <p>
        Developed by{" "}
        <a href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/">
          Adriano Yuji
        </a>
        .
      </p>
      <p>
        Github repository:{" "}
        <a href="https://github.com/adrianoyuji/react-todo-task">Click here</a>!
      </p>
    </section>
  );
};

export default React.memo(About);
