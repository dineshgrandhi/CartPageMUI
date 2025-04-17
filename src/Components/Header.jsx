import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material";
import Badge from '@mui/material/Badge';
import CartIcon from '../../resources/icons/cart.svg';
import FactsSoft from '../../resources/icons/facts-soft.svg';
import Favorite from '../../resources/icons/favorite.svg';
import data from '../../resources/data/data.json';
import { renderPrice } from '../utils/price';
import '../styles.css';

const Header = ({cartItems}) => {
    return (
        <div className='headerBar'>
            <div style={{ flex: '1' }}>
                <Typography variant="h6" color="error" gutterBottom>
                    {data?.article?.title}
                </Typography>
            </div>
            <div>
                <img src={Favorite} width="25" height="25" alt="cart" />
            </div>
            <div>
                <img src={FactsSoft} width="25" height="25" alt="cart" />
            </div>
            <div>
                <Badge badgeContent={cartItems} color="error">
                    <Box
                        component="img"
                        src={CartIcon}
                        alt="Cart"
                        sx={{ width: 25, height: 25 }}
                    />
                </Badge>
            </div>
        </div>
    )
}

export default Header
