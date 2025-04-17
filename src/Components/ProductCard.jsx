import React from 'react'
import {
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Package from '../../resources/icons/package.svg';
import data from '../../resources/data/data.json';
import Discount from '../../resources/icons/discount.svg';
import { renderPrice } from '../utils/price';
import '../styles.css';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({cartItems, itemsRef, setCartItems}) => {
  return (
    <div className="gridContainer">
        <div className="subImgs">
          {[1, 2].map((i) => (
            <Grid item key={i}>
              <Paper variant="outlined" sx={{ p: 1, display: "flex", justifyContent: "center", height: 110, marginBottom: '10px' }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <img src={Package} alt="Sub Images" width={40} height={40} />
                </Box>
              </Paper>
            </Grid>
          ))}
        </div>
        <div className="mainImgs">
          <Paper variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src={Package} alt="Main Product" height={150} />
            </Box>
          </Paper>
        </div>
        <div className="prdctData">
          <Typography sx={{
            whiteSpace: 'normal',
            wordBreak: 'break-word',
          }} variant="h6">
            {data?.article?.description_short}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            by <Box component="href" color="primary.main">{data?.article?.supplier_name}</Box>
          </Typography>

          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              star <= 3 ? <StarIcon key={star} fontSize="small" color="warning" /> : <StarBorderIcon key={star} fontSize="small" />
            ))}
          </Box>

          <Typography variant="h6">
            {renderPrice(data?.article?.price)}
            <Typography component="span" variant="body2" sx={{ ml: 1 }}>
              {`+ ${renderPrice(data?.article?.transport_costs)}`} <img src={Discount} width="20" height="20" alt="discount" />
            </Typography>
          </Typography>
          <Typography variant="caption">{`all prices incl. ${data?.article?.vat_percent} % taxes`}</Typography>

          <Box mt={2} display="flex" alignItems="center" gap={2}>
            <input
              type="number"
              defaultValue={1}
              inputProps={{ min: 1 }}
              size="small"
              style={{ width: 80, padding:'10px' }}
              ref={itemsRef}
            />
            <AddToCartButton setCartItems={setCartItems} itemsRef={itemsRef} />
          </Box>
        </div>
      </div>
  )
}

export default ProductCard
