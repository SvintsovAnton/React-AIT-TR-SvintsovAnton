import './styles.css'

function Button({ name,foto, type = "button", onClick = () => {} }) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
      { foto && <img className='pictureInButton' src ={foto}/>}
    </button>
  );
}

export default Button;