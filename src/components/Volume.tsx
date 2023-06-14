import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Volume = () => {
  const [volume, setVolume] = React.useState('1000');

  const handleChange = (event: SelectChangeEvent) => {
    setVolume(event.target.value as string);
  };

  return (
    <FormControl className='mt-1' sx={{ minWidth: 235 }} size='small'>
      <InputLabel id='volume'>Volume</InputLabel>
      <Select
        labelId='volume'
        id='demo-simple-select'
        value={volume}
        label='Volume'
        onChange={handleChange}
      >
        <MenuItem value={1000}>1000</MenuItem>
        <MenuItem value={2000}>2000</MenuItem>
        <MenuItem value={3000}>3000</MenuItem>
        <MenuItem value={4000}>4000</MenuItem>
        <MenuItem value={5000}>5000</MenuItem>
        <MenuItem value={6000}>6000</MenuItem>
        <MenuItem value={7000}>7000</MenuItem>
        <MenuItem value={8000}>8000</MenuItem>
        <MenuItem value={9000}>9000</MenuItem>
        <MenuItem value={10000}>10000</MenuItem>
        <MenuItem value={15000}>15000</MenuItem>
        <MenuItem value={20000}>20000</MenuItem>
        <MenuItem value={30000}>30000</MenuItem>
        <MenuItem value={40000}>40000</MenuItem>
        <MenuItem value={50000}>50000</MenuItem>
        <MenuItem value={60000}>60000</MenuItem>
        <MenuItem value={80000}>80000</MenuItem>
        <MenuItem value={100000}>100000</MenuItem>
        <MenuItem value={125000}>125000</MenuItem>
        <MenuItem value={150000}>150000</MenuItem>
        <MenuItem value={175000}>175000</MenuItem>
        <MenuItem value={200000}>200000</MenuItem>
        <MenuItem value={300000}>300000</MenuItem>
        <MenuItem value={400000}>400000</MenuItem>
        <MenuItem value={500000}>500000</MenuItem>
        <MenuItem value={1000000}>1000000</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Volume;
