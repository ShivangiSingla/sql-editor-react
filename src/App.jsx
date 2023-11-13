import './App.css';
import QueryEditor from './Components/QueryEditor';
import Schema from './Components/Schema';
import Tables from './Components/Tables';
import { useState } from 'react';

const App = () => {
  
  const [showSchema, setShowSchema] = useState(true);
  const [showTables, setShowTables] = useState(true);
  const [selectedQuery, setSelectedQuery] = useState(0);
  const editorWidth = showSchema ? showTables ? '45%' : '80%' : showTables? '65%' : '100%';
  return (
    <div className="App">
    {showSchema ? <Schema onQueryChange={(event) => setSelectedQuery(event.target.value)}/> : null}
    <div className="mainDiv" style={{ width : editorWidth}}>
    <button onClick={() => setShowSchema((prev) => !prev)} className="leftArrow"> { showSchema ? '<' : '>' } </button>
    <button onClick={() => setShowTables((prev) => !prev)} className="rightArrow"> { showTables ? '>' : '<' } </button>
    <QueryEditor selectedQuery={selectedQuery} />
    </div>
    {showTables ? <Tables /> : null }
    </div>
    );
  }
  export default App;
