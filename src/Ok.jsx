import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Ok = () => {
    const title = document.getElementById('title');
    useEffect(() => {
        title.innerHTML = 'Redirecting...';
    }, [title])
    return (
        <Redirect to='/react-rick/1' />
    );
}

export default Ok;