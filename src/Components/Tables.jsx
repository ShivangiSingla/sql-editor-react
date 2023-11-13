
import {getJsonHeaders, getTableData} from '../utils';
import {categories, regions, orders} from '../constants';
import '../App.css';

const datasource = [categories, regions, orders];
const Tables = () => {
  
  return (
    <div className="tables">
    <h3 className="heading">Database</h3>
    <div>
    {datasource.map((table) => <table className="dataTable">
    <tr>{getJsonHeaders(table).map((ele) => <th>{ele}</th>)}</tr>
    {getTableData(table).map((ele) => <tr>
      {ele.map((val) => <td className="dataTd">{val}</td>)}
      </tr>)}
      </table>)}
      </div>
      </div>
      );
    }
    
export default Tables;