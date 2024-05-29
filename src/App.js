import React, { useState, useEffect } from 'react';
import './App.css';

// Composant réutilisable pour afficher une liste d'éléments
const ListComponent = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <img src={item.url} alt={`Cat ${index}`} /> 
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const jsonData = await response.json();
        setApiData(jsonData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Liste des chats</h1>
      {/* Affichage des données récupérées */}
      <ListComponent data={apiData} /> {/* Correction ici : passer directement apiData */}
    </div>
  );
};

export default App;
