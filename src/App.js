import Tache from './Tache';
import './App.css';
import { useState } from "react";

function App() {

  const [nameTache, setnameTache] = useState('');
  const [listTache, setlistTache] = useState([]);
  const [listeDone, setListeDone] = useState([]);

  function handleChange(e) {
    setnameTache(e.target.value);
  }

  const handleClick = () => {
    console.log("click");
    const newlist = listTache.concat(nameTache);
    setlistTache(newlist);
    setnameTache("");
  };

  const handleClickRemove = (tacheToRemove) => {
    console.log("click");
    const newlist = listTache.filter(item => item !== tacheToRemove);
    setlistTache(newlist);

  };

  const handleClickModify = (tacheToModify) => {
    handleClickRemove(tacheToModify);
    const newlisteDone = listeDone.concat(tacheToModify);

    setListeDone(newlisteDone);

  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='title'> <h1>ToDoList avec React</h1></div>

        <div className='inputTache'>
          <div id="input">
            <input type="text" value={nameTache} onChange={handleChange} />
          </div>

          <div id="button">
            <button id="myButton" onClick={handleClick}>Ajouter</button>
          </div>

        </div>
      </header>

      <div id="myDiv">

        <ol className='listToDo'>

          <h3>LIST DES TACHES A EFFECTUER</h3>
          {listTache.map((task, index) => <li key={index}><Tache tache={task} onRemove={handleClickRemove} onModify={handleClickModify}></Tache></li>)}

        </ol>

        <ol className='listDone'>
          <h3>LIST DES TACHES TERMINES</h3>
          {listeDone.map((task, index) => <li key={index}><Tache tache={task}></Tache></li>)}
        </ol>
      </div>


    </div>
  );
}

export default App;
