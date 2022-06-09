import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  
  const [imge, setImage] = useState("");

  const uploadImage = async e =>{
    e.preventDefault();
    console.log("Upload Imagem");
    console.log(imge);
  }
  return (
    <div className="App">
      <div className="App">
        <div className="main">
          <div className="center">
              <div className="menu">
                <div className="logo">
                  <h3>Lista de poste</h3>
                </div>


              <div className="imagem">
                <form onSubmit={uploadImage}>
                  <input type="file" name='image' onChange={e => setImage(e.target.files[0])}></input><br></br>
                  
                  <button type="submit">Postar</button>
                  <button className='red'>EXCLUIR</button>
                </form>
              </div>
              </div>              
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default App;
