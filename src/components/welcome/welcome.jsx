import PropTypes from 'prop-types';  // noter manuellement
import style from './welcome.module.css';
import classnames from 'classnames'
import { Fragment } from 'react';
const Welcome = (props) => {
    const { firstname, lastname, number } = props;
    return (
        <>
            <p> Kombinen voor
                <br />
                <span className={style.name}>
                    {firstname}  {lastname} (-_-)
                </span>
            </p>
            <p> votre numero est
                <br />
                <span className={style.number}>
                    {number}
                </span>
            </p>
            <p>Testez-vous ☺</p>
        </>
    );
};

Welcome.defaultProps = {  ///Cette syntaxe te permet de mettre part defaut une propriété en mode defaut  et donc automatiquement il le met la value du number 
    number: 42
};
Welcome.propTypes = {  // prop-Types doit etre installer pour le typage et utilisé de cette façon!!!
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string,
    number: PropTypes.number,
};

export default Welcome;
