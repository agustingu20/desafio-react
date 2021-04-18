import './App.css';
import Card from './Components/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import Formulario from "./Components/Formulario";


function App() {
  return (
    <div>
      <Card
        titulo="Mortal Kombat"
        imagen="https://imagenes.milenio.com/zZmiS3PZPdNpjZfjoZ_rv4S0kvA=/936x566/https://www.milenio.com/uploads/media/2021/02/18/estrenan-trailer-pelicula-mortal-kombat.jpg"
        descripcion='Mortal Kombat is a mysterious, intergalactic tournament of ancient martial arts. Shaolin Monk Liu Kang, from Earth, gets invited as a competitor.'
        puntaje="Puntaje: 5/5"
      />
      <Formulario />
    </div>

  );
}

export default App;
