import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const CollectionTable = ({ data, schema, onAdd }) => {
  // Validate that data is an array and not undefined before mapping
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div>
        <p>No data available</p>
        <Button variant="contained" color="primary" onClick={onAdd}>Add</Button>
      </div>
    );
  }

  // Extract column headers from the schema
  const columns = schema.columns;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex}>{row[column.field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={onAdd}>Add</Button>
    </div>
  );
};

export default CollectionTable;


// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const CollectionTable = ({ data, schema, onAdd }) => {
//   // Extract column headers from the schema
//   const columns = Object.keys(schema);

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell key={index}>{column}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row, rowIndex) => (
//               <TableRow key={rowIndex}>
//                 {columns.map((column, columnIndex) => (
//                   <TableCell key={columnIndex}>{row[column]}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Button variant="contained" color="primary" onClick={onAdd}>Add</Button>
//     </div>
//   );
// };

// export default CollectionTable;
