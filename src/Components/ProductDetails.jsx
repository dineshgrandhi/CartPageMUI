import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material";
import data from '../../resources/data/data.json';
import '../styles.css';

const ProductDetails = () => {
    return (
        <Box mt={6} sx={{ maxWidth: '80%' }}>
            <Typography color="error" variant="h6">Description</Typography>
            <Typography variant="body2" mt={2}>
                {data?.article?.description_long}
            </Typography>
        </Box>
    )
}

export default ProductDetails
