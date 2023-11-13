export const getJsonHeaders = (jsonArray) => {
    const obj = jsonArray[0];
    return Object.keys(obj);
}

export const getTableData = (jsonArray) => {
    const headers = getJsonHeaders(jsonArray);
    const rows = [];
    jsonArray.forEach(element => {
        const row = [];
        for(let i = 0; i < headers.length ; i++){
            row.push(element[headers[i]]);
        }
        rows.push(row);
    });
    return rows;
}

export const jsonArrayToCSV = (jsonArray) => {
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(jsonArray[0])
    const csv = [
      header.join(','), // header row first
      ...jsonArray.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    ].join('\r\n')
    
    return csv;
}