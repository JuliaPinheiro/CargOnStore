import React, { useState } from 'react';
import {
  Button,
  Menu,
  FormControlLabel,
  Checkbox,
  Box,
  List,
  ListItem,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '8px',
        marginBottom: '20px',
      }}
    >
      <Button
        variant='outlined'
        onClick={handleClick}
        sx={{
          color: 'black',
          borderColor: 'black',
          borderRadius: '16px',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'white',
          },
        }}
        endIcon={<ArrowDropDownIcon />}
        aria-haspopup='true'
        aria-label='Filtrar por categoria'
      >
        Filtrar por categoria
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            padding: 0,
          },
        }}
      >
        <List sx={{ padding: 0, minWidth: '200px' }}>
          {uniqueTypes.map((type) => (
            <ListItem key={type} disableGutters>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedTypes.includes(type)}
                    onChange={handleTypeChange}
                    value={type}
                    sx={{
                      color: 'black',
                      '&.Mui-checked': {
                        color: 'black',
                      },
                    }}
                  />
                }
                label={type}
                sx={{
                  width: '100%',
                  margin: 0,
                  padding: '0 16px',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
};

export default ProductFilter;
