import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
    const title = document.getElementById('title');
    let [character, setCharacter] = useState({
        name: '',
        image: '',
        status: ''
    });
    let [loading, isLoading] = useState(true);
    async function getFetch(url) {
        const response = await fetch(url);
        const data = await response.json();

        setCharacter(character = data.results.find(myCharacter => myCharacter.created === props.match.params.created));
        isLoading(loading = false);
    }
    useEffect(
        () => {
            getFetch(`https://rickandmortyapi.com/api/character/?page=${props.match.params.page}`);
            if (loading) {
                title.innerHTML = 'getting character...';
            } else {
                title.innerHTML = character.name;
            }
        },
        [props, title, character.name, loading]
    )
    return (
        <>
            {loading ? <h1>Loading...</h1> :
                <><img src={character.image} alt={character.name} />
                <h1>{character.name}</h1>
                <h2>{character.status}</h2></>
            }
            <Link to={`/${props.match.params.page}`}><button>go to the main page</button></Link>
        </>
    );
}

export default Character;