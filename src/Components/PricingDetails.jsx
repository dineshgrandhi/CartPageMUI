import React from 'react'
import {
    Box,
    Typography,
    Grid,
    Button,
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
import data from '../../resources/data/data.json';
import { renderPrice } from '../utils/price';
import '../styles.css';

const PricingDetails = () => {
    return (
        <Box px={2} py={4} bgcolor="#f5f5f5">

            <Grid container spacing={2} mt={4}>
                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="subtitle2" color="error" gutterBottom>
                            DETAILS
                        </Typography>
                        <Divider sx={{ mb: 1 }} />

                        <Typography variant="subtitle2">Features</Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                            <li><strong className="listLabel">Feature XYZ:</strong> Lorem ipsum dolor sit amet</li>
                            <li><strong className="listLabel">Feature ABC:</strong> Lorem ipsum dolor sit tempor incididunt</li>
                        </Box>

                        <Typography variant="subtitle2" mt={2}>
                            Attachments
                        </Typography>
                        <Box display="flex" flexDirection="column" gap={0.5} mt={1}>
                            <Link target="_blank" rel="noopener" href={data?.article?.attachments[0]?.file_link}>📄 Data Sheet 101</Link>
                            <Link target="_blank" rel="noopener" href={data?.article?.attachments[1]?.file_link}>📄 Fact Sheet 4711</Link>
                        </Box>

                        <Typography variant="subtitle2" mt={2}>
                            Keywords
                        </Typography>
                        <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                            {data?.article?.keywords.map((kw) => (
                                <Chip key={kw} label={kw} size="small" />
                            ))}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} sx={{flex: 0.5}} >
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="subtitle2" color="error" gutterBottom>
                            PRICING & SHIPPING
                        </Typography>
                        <Divider sx={{ mb: 1 }} />
                        <Box component="ul" sx={{}}>
                            <li><strong className="listLabel">Minimum order:</strong> {`${data?.article?.minimum_order_quantity} PCE`}</li>
                            <li><strong className="listLabel">Shipping:</strong> {renderPrice(data?.article?.transport_costs)}</li>
                            <li><strong className="listLabel">Delivery:</strong> {`${data?.article?.delivery_time} days`}</li>
                        </Box>

                        <Typography variant="subtitle2" mt={2}>
                            Price breaks
                        </Typography>
                        <List dense>
                            {Object.keys(data?.article?.price_breaks).map((key) =>
                            (<>
                                <Divider sx={{}} />
                                <ListItem disableGutters>
                                    <ListItemText primary={`ex ${key} PCE`} />
                                    <Typography variant="body2">{renderPrice(data?.article?.price_breaks[key])}</Typography>
                                </ListItem>
                            </>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PricingDetails
