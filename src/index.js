// const bodyElement = document.querySelector(`body`);
// bodyElement.textContent = `Hello, world!`;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films';

const init = () => {
  ReactDOM.render(
      <App films={films}/>,
      document.querySelector(`#root`)
  );
};

init();
