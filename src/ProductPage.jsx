import React, { useRef } from "react";
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
  TextField
} from "@mui/material";
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CartIcon from '../resources/icons/cart.svg';
import FactsSoft from '../resources/icons/facts-soft.svg';
import Favorite from '../resources/icons/favorite.svg';
import Package from '../resources/icons/package.svg';
import Add from '../resources/icons/add.svg';
import CheckIcon from "@mui/icons-material/Check";
import data from '../resources/data/data.json';
import Discount from '../resources/icons/discount.svg';
import Header from "./Components/header";
import './styles.css';
import ProductCard from "./Components/ProductCard";
import ProductDetails from "./Components/ProductDetails";
import PricingDetails from "./Components/PricingDetails";



const ProductPage = () => {
  const [cartItems, setCartItems] = React.useState(data?.cart?.items);
  const itemsRef = useRef('');
  return (
    <Box>
      <Header cartItems={cartItems} />
      <ProductCard cartItems={cartItems} itemsRef={itemsRef} setCartItems={setCartItems} />
      <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, marginTop: 4 }}>
        <ProductDetails />
        <PricingDetails />
      </Box>
    </Box>
  );
};

export default ProductPage;
