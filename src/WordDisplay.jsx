import React from 'react';

const WordDisplay = ({ word, isVisible }) => {
  return <>{isVisible && <p>{word}</p>}</>;
};

export default WordDisplay;
