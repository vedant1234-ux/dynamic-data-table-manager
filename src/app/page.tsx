'use client';

import DataTable from '@/components/DataTable';
import TableToolbar from '@/components/TableToolbar';
import ThemeToggle from '@/components/ThemeToggle';
import { Box, Container, Paper, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dynamic Data Table Manager
        </Typography>
        <ThemeToggle />
      </Box>

      <Paper sx={{ p: 3 }}>
        <TableToolbar />
        <DataTable />
      </Paper>
    </Container>
  );
}
