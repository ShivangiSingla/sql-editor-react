
import {getJsonHeaders, getTableData} from '../utils';
import '../App.css';
import { dummyOutputMapping } from '../constants';

const Output = (props) => {
  const { selectedQuery }= props;
  const table = selectedQuery !== undefined ? dummyOutputMapping[selectedQuery] || null : null;
  if(selectedQuery === undefined) return;

  return (
    <div className="outputTable">
    <div>
      <div style={{fontSize: '16px', fontWeight: 700, paddingTop: '10px'}}>Output: </div>
    {table ? <table className="dataTable">
    <tr>{getJsonHeaders(table).map((ele) => <th>{ele}</th>)}</tr>
    {getTableData(table).map((ele) => <tr>
      {ele.map((val) => <td className="outputTd">{val}</td>)}
      </tr>)}
      </table> : null}
      </div>
      </div>
      );
    }
    
export default Output;