import React from 'react';
import Chip from '@mui/material/Chip';

interface Colors {
  progress: string;
  completed: string;
  failed: string;
}

const StatusBadge = ({ status, children }: { status: string }) => {
  const colors: Colors = {
    progress: '#fbc02d', 
    completed: '#4caf50', 
    failed: '#f44336',
  };

  return (
    <Chip
      label={children}
      sx={{ backgroundColor: colors[status.toLowerCase()], color: '#fff' }}
      variant='filled'
    />
  );
};

export default StatusBadge