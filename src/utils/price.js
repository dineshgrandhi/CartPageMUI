import data from '../../resources/data/data.json';

export const renderPrice = (price, currency = data?.article?.currency) => {
    return `${price.toFixed(2).replace('.', ',')} ${currency}`;
}