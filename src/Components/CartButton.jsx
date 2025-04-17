import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Chip,
  Divider,
} from "@mui/material";
import Add from '../../resources/icons/add.svg';


const CartButton = () => {
  return (
    <div>
        <Box mt={2} display="flex" alignItems="center" gap={2}>
            <input type="number" min="1" defaultValue={1} style={{ width: 35 }} />PCE
            <Button variant="contained" color="error">
                <img src={Add} width="20" height="20" alt="cart" />
              Add to cart
            </Button>
          </Box>
    </div>
  )
}

export default CartButton
