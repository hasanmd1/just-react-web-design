import images from './images';

const Food = [
    {
        title: 'Roast Chicken',
        price: '$56',
        tag: 'CZ | Plate Serving',
    },
    {
        title: 'Pasta',
        price: '$59',
        tag: 'CZ | Plate Serving',
    },
    {
        title: 'Burger',
        price: '$44',
        tag: 'AU | Piece-Plate Serving',
    },

    {
        title: 'Chef Special',
        price: '$71',
        tag: 'CA | Plate Serving',
    },
    {
        title: 'Pizza',
        price: '$26',
        tag: 'IT | Piece-Plate serving',
    },
];

const coffee = [
    {
        title: 'Cappuccino',
        price: '$20',
        tag: 'Jacobs Bean | coffee | 30 ml',
    },
    {
        title: "Espresso",
        price: '$16',
        tag: 'Coffee | Single Espresso | Double Espresso',
    },
    {
        title: 'Cold Coffee',
        price: '$10',
        tag: 'Cold Coffee | Single | Double | Sugar',
    },
    {
        title: 'Old Fashioned',
        price: '$31',
        tag: 'Coffee | Glass | Sugar',
    },
    {
        title: 'Americano',
        price: '$20',
        tag: 'Coffee | Chef Special | Single | Double',
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

export default {Food, coffee, awards};