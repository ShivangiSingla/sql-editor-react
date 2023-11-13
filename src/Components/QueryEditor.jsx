import Output from "./Output";
import '../App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { queryOptions, dummyOutputMapping } from '../constants';
import { jsonArrayToCSV } from '../utils';
import { useEffect, useState } from "react";
var timeout = null;
var interval = null;
const QueryEditor = (props) => {
  const { selectedQuery } = props;
  const [outputQuery, setOutputQuery] = useState(undefined);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    if(timeout){
      cancelSelectedQuery();
    }
  }, [selectedQuery]);

  const getSelectedQuery = () => {
    const query =  queryOptions.find((ele) => ele.value?.toString() === selectedQuery?.toString());
    return query?.name;
  }

  const runSelectedQuery = () => {
    setIsRunning(true);
    setTimer(0);
    timeout = setTimeout(() => {
      setOutputQuery(selectedQuery);
      setIsRunning(false);
      clearInterval(interval);
    }, 3000);
    interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1);
  }

  const cancelSelectedQuery = () => {
    clearTimeout(timeout);
    clearInterval(interval);
    setOutputQuery(undefined);
    setTimer(0);
    setIsRunning(false);
  }

  const downloadOutput = () => {
    const jsonArray = selectedQuery !== undefined ? dummyOutputMapping[selectedQuery] || null : null;
    const csv = jsonArrayToCSV(jsonArray);
    const csvContent = `data:text/csv;charset=utf-8,${csv}`;
    const encodedURI = encodeURI(csvContent);
    window.open(encodedURI);
  }
    return (
      <div className="queryEditor">
        <div className="inputBox">
          <h3 className="heading" style={{ marginTop: '10px' }}>Input</h3>
          <AceEditor
          placeholder="Type your query here..."
          defaultValue={getSelectedQuery()}
          value={getSelectedQuery()}
          style={{ height: 'calc(100% - 50px)', width: '100%'}}
          mode="mysql"
          theme="monokai"
          name="QUERY_EDITOR"
          fontSize="14px"
          editorProps={{ $blockScrolling: true }}/>
        </div>
        <div className="actionRow">
          <div>
          <button className="actionButtons" disabled={isRunning} onClick={runSelectedQuery}>Run</button>
          <button className="actionButtons" onClick={downloadOutput}>Download CSV</button>
          {isRunning && <button className="actionButtons" onClick={cancelSelectedQuery}>Cancel</button>}
          </div>
          <div>
            {isRunning ? 'Executing: ' + timer + 'ms': null}
            {!isRunning && outputQuery !== undefined ? 'Execution Time: ' + timer + 'ms' : null}
          </div>
        </div>
        <Output selectedQuery={outputQuery} />
      </div>
    );
  }
  
export default QueryEditor;