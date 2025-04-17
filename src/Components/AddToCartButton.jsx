import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import Add from '../../resources/icons/add.svg';
import data from '../../resources/data/data.json';

const AddToCartButton = ({ setCartItems, itemsRef }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      const noOfItems = itemsRef?.current?.value || 1;
      setCartItems((items) => items + parseInt(noOfItems));
      setLoading(false);
    }, 3000);
  };

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={
        loading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <img
            src={Add}
            width="20"
            height="20"
            alt="Add"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        )
      }
      disabled={loading}
      onClick={handleClick}
    >
      {loading ? 'Adding...' : 'Add to cart'}
    </Button>
  );
};

export default AddToCartButton;
