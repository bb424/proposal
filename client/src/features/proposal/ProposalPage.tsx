import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { NavLink } from "react-router-dom";

function createData(
  projectNumber: string,
  customerName: string,
  endUserName: string,
  scopeName: string,
  priceNumber: number,
  proposalStatus: string,
  riskStatus: boolean,
  safetyStatus: boolean,
  riskLetter: string,

) {
  return { projectNumber, customerName, endUserName, scopeName, priceNumber, proposalStatus, riskStatus, safetyStatus, riskLetter };
}

const rows = [
  createData('012345.000.00', 'Duke Energy Florida', 'Duke Energy Florida', "Bartow GSU Upgrade", 250000.00, "Open", true, true, 'C'),
  createData('035421.000.00', 'AEP', 'AEP', "Breaker Replacements", 550000.00, "In Approval", true, false, 'B'),
  createData('025410.000.00', 'FPL', 'FPL', "Blueframe", 275000.00, "Submitted", false, false, ''),
  createData('092210.000.00', 'Dominion', 'Dominion', "Staff Augmentation", 3200000.00, "In Approval", false, true, ''),
  createData('023145.000.00', 'Duke Energy Florida', 'Duke Energy Florida', "Bartow Gen Upgrade", 1250000.00, "Open", true, false, 'D'),
];


export default function ProposalPage() {
  return (
    <>
      <h1>Proposal Page</h1>
      <h3>Active Opportunities from VantagePoint</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project Number</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>End User</TableCell>
              <TableCell>Scope</TableCell>
              <TableCell>Estimated Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.projectNumber}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  {row.projectNumber}
                </TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.endUserName}</TableCell>
                <TableCell>{row.scopeName}</TableCell>
                <TableCell>{row.priceNumber}</TableCell>
                <TableCell>
                  <div>

                    <Button variant="contained" color="primary" component={NavLink} to='/catalog'>Create Proposal</Button>

                  </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3>Existing Proposals</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell align='center'>Project Number</TableCell>
              <TableCell align='center'>Customer</TableCell>
              <TableCell align='center'>End User</TableCell>
              <TableCell align='center'>Scope</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Risk</TableCell>
              <TableCell align='center'>Safety</TableCell>
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
                <TableCell>{row.priceNumber}</TableCell>
                <TableCell>{row.proposalStatus}</TableCell>
                <TableCell align='center'>
                  {row.riskStatus ? row.riskLetter : <AddIcon />}
                </TableCell>
                <TableCell align='center'>
                  {row.safetyStatus ? <VisibilityIcon /> : <AddIcon />}
                </TableCell>
                <TableCell>
                  <div>
                    <Button variant="contained" color="success">View</Button>
                    <Button variant="contained" color="primary">Edit</Button>
                    <Button variant="contained" color="error">Archive</Button>
                  </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3>Archived Proposals</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell>Project Number</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>End User</TableCell>
              <TableCell>Scope</TableCell>
              <TableCell>Price</TableCell><TableCell>Status</TableCell>
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
                <TableCell>{row.priceNumber}</TableCell>
                <TableCell>Archived</TableCell>
                <TableCell>
                  <div>
                    <Button variant="contained" color="success">View</Button>
                    <Button variant="contained" color="primary">Move to Active</Button>

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