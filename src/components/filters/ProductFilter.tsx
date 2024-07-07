import React from 'react';
import { FormControlLabel, Checkbox, Box } from '@mui/material';

interface ProductFilterProps {
  selectedTypes: string[];
  handleTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uniqueTypes: string[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedTypes,
  handleTypeChange,
  uniqueTypes,
}) => {
  return (
    <Box sx={{ marginBottom: '20px' }}>
      {uniqueTypes.map((type) => (
        <FormControlLabel
          key={type}
          control={
            <Checkbox
              checked={selectedTypes.includes(type)}
              onChange={handleTypeChange}
              value={type}
            />
          }
          label={type}
        />
      ))}
    </Box>
  );
};

export default ProductFilter;
