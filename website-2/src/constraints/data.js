import images from './images';

const wines = [
    {
        title: 'Chapel Hill Shiraz',
        price: '$56',
        tag: 'AU | Bottle',
    },
    {
        title: 'Catena Malbee',
        price: '$59',
        tag: 'AU | Bottle',
    },
    {
        title: 'La Vieilw Rose',
        price: '$44',
        tag: 'FR | 750 ml',
    },

    {
        title: 'Rhino Pale Ale',
        price: '$31',
        tag: 'CA | 750 ml',
    },
    {
        title: 'Irish Guinness',
        price: '$26',
        tag: 'IE | 750 ml',
    },
];

const cocktails = [
    {
        title: 'Aperol Sprtiz',
        price: '$20',
        tag: 'Aperol | villa Marchesi prosecco | soda | 30 ml',
    },
    {
        title: "Dark 'N' Stormy",
        price: '$16',
        tag: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
        title: 'Daiquiri',
        price: '$10',
        tag: 'Rum | Citrus juice | Sugar',
    },
    {
        title: 'Old Fashioned',
        price: '$31',
        tag: 'Bourbon | Brown sugar | Angostura Bitters',
    },
    {
        title: 'Negoni',
        price: '$20',
        tag: 'Gin | Sweet Vermouth | Compari | Orange garnish',
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: 'Bib Gourmond',
        subtitle: 'Award recived on date 56/98/3027',
    },
    {
        imgUrl: images.award01,
        title: 'Rising Star',
        subtitle: 'Award recived on date 65/98/3037',
    },
    {
        imgUrl: images.award05,
        title: 'AA Hospitality',
        subtitle: 'Award recived on date 56/98/3067',
    },

    {
        imgUrl: images.award03,
        title: 'Outstanding Chef',
        subtitle: 'Award recived on date 56/98/3187',
    },
];

export default {wines, cocktails, awards};