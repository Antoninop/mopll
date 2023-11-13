import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import UserInput from './UserInput';

const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Game = () => {
  const initialWordsArray = [
    'Bonjour',
    'Chat',
    'Lumière',
    'Avion',
    'Étoile',
    'Maison',
    'Chanson',
    'Plage',
    'Arbre',
    'Joie',
    'Montagne',
    'Rivière',
    'Cascade',
    'Ordinateur',
    'Rêve',
    'Bouquet',
    'Ciel',
    'Aventure',
    'Magie',
    'Fleur',
    'Océan',
    'Forêt',
    'Feu',
    'Vent',
    'Liberté',
    'Harmonie',
    'Douceur',
    'Énergie',
    'Exploration',
    'Voyage',
    'Cascade',
    'Éclat',
    'Rire',
    'Réflexion',
    'Rêverie',
    'Silence',
    'Émeraude',
    'Symphonie',
    'Poésie',
    'Inspiration',
    'Sérénité',
    'Évasion',
    'Merveille',
    'Fantaisie',
    'Univers',
    'Équilibre',
    'Charme',
    'Énigme',
    'Puzzle',
    'Réalité',
    'Papillon',
    'Éphémère',
    'Infini',
    'Cascade',
    'Éclat',
    'Aventure',
    'Voyage',
    'Sourire',
    'Arc-en-ciel',
    'Cascade',
    'Éclat',
    'Aventure',
    'Voyage',
    'Sourire',
    'Arc-en-ciel',
    'Essence',
    'Étoilé',
    'Abondance',
    'Festin',
    'Sagesse',
    'Mystère',
    'Sérénade',
    'Trésor',
    'Enchantement',
    'Caresse',
    'Cascade',
    'Éclat',
    'Aventure',
    'Voyage',
    'Sourire',
    'Arc-en-ciel',
    'Essence',
    'Étoilé',
    'Abondance',
    'Festin',
    'Sagesse',
    'Mystère',
    'Sérénade',
    'Trésor',
    'Enchantement',
    'Caresse',
    'Lueur',
    'Cascade',
    'Éclat',
    'Aventure',
    'Voyage',
    'Sourire',
    'Arc-en-ciel',
    'Essence',
    'Étoilé',
    'Abondance',
    'Festin',
    'Sagesse',
    'Mystère',
    'Sérénade',
    'Trésor',
    'Enchantement',
    'Caresse',
  ];
  
  const [wordsArray, setWordsArray] = useState(shuffleArray(initialWordsArray));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [incorrectInputs, setIncorrectInputs] = useState([]);

  const handleClick = () => {
    setIsClicked(true);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
    setUserInput('');
    setIsCorrect(false);
    setIncorrectInputs([]);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && userInput !== '') {
      const userInputLowerCase = userInput.toLowerCase();
      const currentWordLowerCase = wordsArray[currentWordIndex].toLowerCase();
      const userInputWithoutAccents = removeAccents(userInputLowerCase);
      const currentWordWithoutAccents = removeAccents(currentWordLowerCase);

      if (userInputWithoutAccents === currentWordWithoutAccents) {
        setIsCorrect(true);
      } else {
        setIncorrectInputs((prevInputs) => [...prevInputs, userInput]);
      }
      setUserInput('');
    }
  };

  useEffect(() => {
    setWordsArray(shuffleArray(initialWordsArray));
  }, [isClicked]);

  return (
    <div className='game'>
      <button onClick={handleClick}>Cliquez-moi</button>
      <WordDisplay word={wordsArray[currentWordIndex]} isVisible={isClicked} />
      <UserInput
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isCorrect}
      />
      {isCorrect && <p>Bravo! Vous avez deviné le mot correctement.</p>}
      {incorrectInputs.length > 0 && (
        <p>Saisies incorrectes : {incorrectInputs.join(', ')}</p>
      )}
    </div>
  );
};

export default Game;
