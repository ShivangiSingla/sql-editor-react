import {getJsonHeaders} from '../utils';
import {categories, regions, orders, queryOptions} from '../constants';
import '../App.css';

const datasource = [{name: 'Categories', data: categories}, {name: 'Regions', data: regions},{name: 'Orders', data: orders}];
const Schema = (props) => {
  const { onQueryChange } = props;
    return (
      <div className="schema">
        <h3 className="heading">Schema</h3>
        <div>
        <ul type="square">{datasource.map((table) => <div>
            <li><h4>{table.name}</h4></li>
            <ul>{getJsonHeaders(table.data).map((ele) => <li>{ele}</li>)}</ul>
          </div>)}</ul>
        </div>
        <h3 className='heading'>Dummy Queries</h3>
        <select onChange={onQueryChange} defaultValue={0}>
          {queryOptions.map((ele) => <option value={ele.value} key={ele.value}>{ele.name}</option>)}
        </select>
      </div>
    );
  }
  
export default Schema;