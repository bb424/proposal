import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function createData(
    projectNumber: string,
    customerName: string,
    endUserName: string,
    scopeName: string,
    priceNumber: number,
    riskLevel: string,
  ) {
    return { projectNumber, customerName, endUserName, scopeName, priceNumber, riskLevel };
  }
  
  const rows = [
    createData('012345.000.00', 'Duke Energy Florida', 'Duke Energy Florida', "Bartow GSU Upgrade", 250000.00, "Level B"),
    createData('035421.000.00', 'AEP', 'AEP', "Breaker Replacements", 550000.00, "Level C"),
    createData('025410.000.00', 'FPL', 'FPL', "Blueframe", 275000.00, "Level A"),
    createData('092210.000.00', 'Dominion', 'Dominion', "Staff Augmentation", 3200000.00, "Level D"),
    createData('023145.000.00', 'Duke Energy Florida', 'Duke Energy Florida', "Bartow Gen Upgrade", 1250000.00, "Level B"),
  ];

export default function SiteSafetyPage() {
  return (
    <>
    <h3>Site Safety Plan</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Number</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>End User</TableCell>
            <TableCell>Scope</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Energized?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.projectNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.projectNumber}
              </TableCell>
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.endUserName}</TableCell>
              <TableCell>{row.scopeName}</TableCell>
              <TableCell>{row.riskLevel}</TableCell>
              
              <TableCell>
                <div>
                  
                <Button variant="contained" color="success" component={NavLink} to= '/forms/site-safety-plan/saeftyplanedit'>Create</Button>
                <Button variant="contained" color="primary" component={NavLink} to= '/forms/site-safety-plan/saeftyplanedit'>Update</Button>  
                
                </div>
                </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}