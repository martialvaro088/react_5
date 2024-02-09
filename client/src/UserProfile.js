import React from 'react';
import { useState } from 'react';

const UserProfile = ({ usuario, initialFollowing }) => {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }


    return (
        <div>
            <header id='header'>
                <h1>Perfil de Usuario: {usuario.nombre}</h1>
                <img id='bicho' src='bicho-logo.png' alt='bicho'></img>
            </header>
            <div>
                <section id="info">
                    <img id='fotoUsuario' src='foto.jpg' alt='bicho'></img>
                    <p>Nombre: {usuario.nombre}</p>
                    <p>Edad: {usuario.edad}</p>
                    <p>Correo electrónico: {usuario.email}</p>
                    <video id='video' controls width="640" height="360">
                        <source src="video.mp4" type="video/mp4"></source>
                    </video>
                    <p id='pie'>Página oficial del bicho</p>
                </section>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {text}
                        <span className='tw-followCard-stopFollow'></span>
                    </button>
                </aside>
            </div>
        </div>
    );
};

export default UserProfile;
