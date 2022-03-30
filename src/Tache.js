import './Tache.css'



function Tache(props) {

    return (
        <div className='tacheToDo'>
            <div><p>{props.tache}</p></div>
            {props.onRemove ?
                <div > <button id="butSupp" onClick={() => props.onRemove(props.tache)}>Supprimer</button> </div> : null}
            {props.onModify ?
                <div ><button id="butMod" onClick={() => props.onModify(props.tache)}>Terminer</button></div> : null}
        </div>


    );
}

export default Tache;