import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App(props) {
  const title = document.getElementById('title');
  let [dataState, setData] = useState({
    data: {
      results: [],
    },
    error: null,
    loading: true,
  });
  const page = parseInt(props.match.params.page);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData({
        data: data,
        loading: false,
      });
    } catch (error) {
      setData({
        error: error,
        loading: false,
      });
    }
  }
  useEffect(() => {
    fetchData(`https://rickandmortyapi.com/api/character/?page=${page}`);
    if (dataState.loading) {
      title.innerHTML = 'Loading...';
    } else {
      title.innerHTML = `Rick and Morty | page: ${page}`;
    }
  }, [page, title, dataState]);
  return (
    <div className="App">
      {dataState.loading && <h1>loading...</h1>}
      {dataState.error && <h1>Error: {dataState.error}</h1>}
      {!dataState.loading && <ul>
        {dataState.data.results.map(character => <Link to={`/react-rick/${page}/${character.created}`}><li><img src={character.image} alt={character.name} /><h1>{character.name}</h1></li></Link>)}
      </ul>}
      {!dataState.loading && page > 1 && <Link to={`/react-rick/${page - 1}`}><button>prev page</button></Link>}
      {!dataState.loading && page < 34 && <Link to={`/react-rick/${page + 1}`}><button>next page</button></Link>}
    </div>
  );
}

export default App;
