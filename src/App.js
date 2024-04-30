import React from 'react';
import './styles.css';
import Quiz from './components/Quiz';
import RandomHeart from './components/RandomHeart';

function App() {
  return (
    <div className="App" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Render the hearts alongside your existing content */}
      {[...Array(5)].map((_, i) => (
        <RandomHeart key={i} />
      ))}
      <h1>Happy birthday sweetheart I love you so much, Lets play a quiz!</h1>
      <Quiz />
    </div>
  );
}

export default App;