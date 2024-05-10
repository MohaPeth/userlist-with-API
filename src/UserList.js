import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard'; // Importation du composant UserCard

const UserList = () => {
  // Déclaration de deux états : listOfUsers pour stocker la liste des utilisateurs et error pour gérer les erreurs
  const [listOfUsers, setListOfUsers] = useState([]);
  const [error, setError] = useState(null); // useState pour gérer les erreurs

  // Utilisation de useEffect pour effectuer une requête HTTP lorsque le composant est monté
  useEffect(() => {
    // Utilisation d'Axios pour envoyer une requête GET à l'API jsonplaceholder pour récupérer la liste des utilisateurs
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response => {
        // Mise à jour de l'état listOfUsers avec les données des utilisateurs récupérées
        setListOfUsers(response.data);
      })
     .catch(error => {
        console.error(error); // Affichage de l'erreur dans la console
        setError(error); // Enregistrement de l'erreur dans l'état error
      });
  }, []); // Le tableau vide en tant que deuxième argument signifie que ce code ne s'exécutera qu'une seule fois après le premier rendu

  // Vérifie s'il y a une erreur et affiche si elle existe
  if (error) {
    return <div>Une erreur s'est produite : {error.message}</div>; // Affichage du message d'erreur s'il y a une erreur
  }

  // Rendu de la liste des utilisateurs sous forme de cartes 
  return (
    <div>
      {listOfUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList; 
