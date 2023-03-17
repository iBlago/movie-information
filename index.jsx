const movie = {
 language: "English",
 genre: "Horror",
 name: "The Haunting of the Bly Manor",
 image: "https://mimo.app/i/haunting_poster.png",
};

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

 constructor(props) {
  super(props);
 }

 render() {
  return (
    <div>
      <h1>Movie Info</h1>
      <h3>{this.props.movie.name}</h3>
      <ul>
       <li>Genre: {this.props.movie.genre}</li>
       <li>Language: {this.props.movie.language}</li>
      </ul>
      <img 
       src={this.props.movie.image}
       alt={this.props.movie.name} 
      />
      <form>
       <label for='rating'>I rate this movie:</label>
       <select id='rating' name='rating'>
        <option value='5'>5</option>
        <option value='4'>4</option>
        <option value='3'>3</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
       </select>
      </form>
    </div>
  );
 }

}

ReactDOM.render(
 <App 
  movie={movie}
 />,
 document.getElementById("root")
);

export { App };
