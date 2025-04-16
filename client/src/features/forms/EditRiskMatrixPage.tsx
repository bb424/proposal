import { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';

const severity = [
  'Minimal',
  'Moderate',
  'Significant',
  'Severe',
  'Critical',
  'N/A',
];

const probability = [
  'Very Low',
  'Low',
  'Moderate',
  'High',
  'Very High',
  'N/A',
];
const severityLevels = {
  'Minimal': 1,
  'Moderate': 2,
  'Significant': 3,
  'Severe': 4,
  'Critical': 5,
  'N/A': 0,
};

const probabilityLevels = {
  'Very Low': 1,
  'Low': 2,
  'Moderate': 3,
  'High': 4,
  'Very High': 5,
  'N/A': 0,
};
const risks = [
  { type: 'Customer', description: 'History of non-payment', severity: 'Moderate', probability: 'Very Low' },
  { type: 'Scope', description: 'History of scope creep', severity: 'Moderate', probability: 'Very Low' },
  { type: 'Budget', description: 'High dollar project', severity: 'Moderate', probability: 'Very Low' },
  { type: 'Safety', description: 'Dangerous work conditions', severity: 'Moderate', probability: 'Very Low' },
  { type: 'Schedule', description: 'No time to do work', severity: 'Moderate', probability: 'Very Low' },
  { type: 'Technical', description: 'First time doing this', severity: 'Moderate', probability: 'Very Low' },
  { type: 'Logistics', description: 'Impossible to complete', severity: 'Moderate', probability: 'Very Low' },
];
const calculateRiskScore = (
  severity: keyof typeof severityLevels,
  probability: keyof typeof probabilityLevels,
) => {
  const severityScore = severityLevels[severity] || 0;
  const probabilityScore = probabilityLevels[probability] || 0;
  const totalScore = severityScore + probabilityScore;

  if (totalScore < 4) return 'Level D';
  if (totalScore >= 5 && totalScore <= 6) return 'Level C';
  if (totalScore >= 7 && totalScore <= 8) return 'Level B';
  return 'Level A';
};
export default function EditRiskMatrix() {
  const [riskData, setRiskData] = useState(risks);

  const handleChange = (
    index: number,
    field: keyof typeof risks[number],
    value: string
  ) => {
    const updatedRisks = [...riskData];
    updatedRisks[index][field] = value;
    setRiskData(updatedRisks);
  };

  return (
    <>
      <h1>Edit Risk Matrix</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ height: '30px' }}>
              <TableCell>Risk Type</TableCell>
              <TableCell>Risk Description</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Probability</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {riskData.map((risk, index) => (
              <TableRow key={index}>
                <TableCell>{risk.type}</TableCell>
                <TableCell>{risk.description}</TableCell>
                <TableCell>
                  <Select
                    value={risk.severity}
                    onChange={(e) =>
                      handleChange(index, 'severity', e.target.value)
                    }
                  >
                    {severity.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    value={risk.probability}
                    onChange={(e) =>
                      handleChange(index, 'probability', e.target.value)
                    }
                  >
                    {probability.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  {calculateRiskScore(
                    risk.severity as keyof typeof severityLevels,
                    risk.probability as keyof typeof probabilityLevels
                  )}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box component="div" display='flex' alignItems='center'>
        <Button variant="contained" color="success">Submit</Button>
      </Box>
    </>
  );
}