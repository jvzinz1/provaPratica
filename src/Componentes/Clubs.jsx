import React, { useEffect, useState } from 'react';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('https://api.cartola.globo.com/clubes');
        const data = await response.json();
        setClubs(Object.values(data));
      } catch (error) {
        console.error('Erro ao buscar os clubes:', error);
      }
    };

    fetchClubs();
  }, []);

  return (
    <div class="clubs">
      <h1>Clubes</h1>
      <div>
        {clubs.map(club => (
          <div key={club.id}>
            <img src={club.escudos['60x60']} alt={club.nome} />
            <h2>{club.nome}</h2>
            <p>{club.apelido}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs