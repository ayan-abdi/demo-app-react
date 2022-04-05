import PropTypes from 'prop-types';
const First = (props) => {
    const { name, age } = props;
    return (
        <>
            <div>

                <h1>Hello EveryOne</h1>
                <p>Je vous présente Mr {name}</p>
                <p> Indiquer nous votre {age}</p>

            </div>
        </>
    );
};

First.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default First;