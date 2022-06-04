//////////////////////////////// Single Product  ////////////////////////////////

const Product = [
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo Switch',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni ab facilis recusandae tempore veniam aperiam deleniti consequuntur fugit odio eveniet ea saepe animi neque itaque excepturi, vitae corrupti nihil sequi numquam accusamus. Quas possimus maxime laboriosam beatae architecto accusantium?',
    images: [
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    ],
    price: 55999,
    category: 'console',
    company: 'nintendo',
    colors: ['#f00', '#0f0', '#00f'],
    stars: 5,
    reveiws: 90,
    featured: true,
    shipping: true,
    onSale: true,
    onSalePercent: 10,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi magni ab facilis recusandae tempore veniam aperiam deleniti consequuntur fugit odio eveniet ea saepe animi neque itaque excepturi, vitae corrupti nihil sequi numquam accusamus. Quas possimus maxime laboriosam beatae architecto accusantium?',
    images: [
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    ],
    price: 69999,
    category: 'console',
    company: 'microsoft',
    colors: ['#f00', '#0f0', '#00f'],
    stars: 5,
    reveiws: 90,
    featured: true,
    shipping: true,
    onSale: true,
    onSalePercent: 10,
  },
];
//////////////////////////////// Single Product ////////////////////////////////

//////////////////////////////// Products Array ////////////////////////////////
const Products = [
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    category: 'console',
    company: 'nintendo',
    featured: true,
    shipping: true,
    onSale: true,
    onSalePercent: 10,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console',
    image:
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    price: 69999,
    category: 'console',
    company: 'microsoft',
    shipping: true,
    onSale: true,
    onSalePercent: 10,
  },
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    category: 'console',
    company: 'nintendo',
    featured: true,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console',
    image:
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    price: 69999,
    category: 'console',
    company: 'microsoft',
  },
];
//////////////////////////////// Products Array ////////////////////////////////

//////////////////////////////// Home Arrays ////////////////////////////////
const OnSaleProducts = [
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo aSwitch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    category: 'console',
    company: 'nintendo',
    featured: true,
    shipping: true,
    onSale: true,
    onSalePercent: 10,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console X',
    image:
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    price: 69999,
    category: 'console',
    company: 'microsoft',
    shipping: true,
    onSale: true,
    onSalePercent: 10,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console 360',
    image:
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    price: 69999,
    category: 'console',
    company: 'microsoft',
    shipping: true,
    onSale: true,
    onSalePercent: 10,
  },
];
const BestSellerProducts = [
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    category: 'console',
    company: 'nintendo',
    featured: true,
    shipping: true,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console',
    image:
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    price: 69999,
    category: 'console',
    company: 'microsoft',
    shipping: true,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console',
    image:
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    price: 69999,
    category: 'console',
    company: 'microsoft',
    shipping: true,
  },
];
const FeaturedProducts = [
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo Switch S',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    category: 'console',
    company: 'nintendo',
    featured: true,
    shipping: true,
  },
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo Switch 6S',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    category: 'console',
    company: 'nintendo',
    featured: true,
    shipping: true,
  },
  {
    id: 'recRoQD1w0ItHzafo',
    name: 'Xbox Console 1',
    image:
      'https://dl.airtable.com/.attachments/f4cc2a25ca64ee8b9b8c3112552a88ee/8a4885b2/pexels-bryce-carithers-8782574.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=94fbc13cfae062e5',
    price: 69999,
    category: 'console',
    company: 'microsoft',
    shipping: true,
  },
];
//////////////////////////////// Home Arrays ////////////////////////////////

//////////////////////////////// Dashboard Arrays ////////////////////////////////
const TotalRevenue = [
  //mon -> Month fron 1 to 12
  // profite -> price to be formated
  { id: '964', name: 'Jan', profit: 12354, productsSold: '50' },
  { id: '563', name: 'Feb', profit: 12934, productsSold: '5' },
  { id: '524', name: 'March', profit: 16554, productsSold: '150' },
  { id: '554', name: 'April', profit: 17454, productsSold: '180' },
  { id: '568', name: 'May', profit: 12654, productsSold: '46' },
  { id: '598', name: 'June', profit: 20654, productsSold: '46' },
];

const StatisticsArray = [
  { id: '563', name: 'sales', value: '350' },
  { id: '958', name: 'profit', value: '200' },
  { id: '558', name: 'customers', value: '600' },
  { id: '548', name: 'products', value: '900' },
];
const OrdersDataArray = [
  {
    id: '563',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'fulfiled',
  },
  {
    id: '552',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'canceld',
  },
  {
    id: '658',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'fulfiled',
  },
  {
    id: '528',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'canceld',
  },
  {
    id: '678',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'fulfiled',
  },
  {
    id: '763',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'pending',
  },
  {
    id: '572',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'fulfiled',
  },
  {
    id: '657',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'pending',
  },
  {
    id: '568',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'fulfiled',
  },
  {
    id: '778',
    Num: 1,
    customer: 'ahmed',
    orderData: '11-12-2022',
    status: 'fulfiled',
  },
];
const ProductsDataArray = [
  {
    id: 'recrGXTSQghJI9Htq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    salePrice: 49999,
    sales: 555,
    category: 'console',
    company: 'nintendo',
  },
  {
    id: 'rerGXTSQghJI9Htq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    salePrice: 49999,
    sales: 555,
    category: 'console',
    company: 'nintendo',
  },
  {
    id: 'recrGXTSQghJI9Hq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    salePrice: 49999,
    sales: 555,
    category: 'console',
    company: 'nintendo',
  },
  {
    id: 'recrGTSQghJI9Htq',
    name: 'Nitendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    salePrice: 49999,
    sales: 555,
    category: 'console',
    company: 'nintendo',
  },
  {
    id: 'recrGXTSQJI9Htq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    salePrice: 49999,
    sales: 555,
    category: 'console',
    company: 'nintendo',
  },
  {
    id: 'recrGXTSQghJ9Htq',
    name: 'Nintendo Switch',
    image:
      'https://dl.airtable.com/.attachments/838c50315f31354b64538c6b1340dbcd/8a8ef525/pexels-polina-tankilevitch-4523017.jpg?ts=1653686651&userId=usr5Bo1z3DLd6Njfo&cs=a161c7039bc771f7',
    price: 55999,
    salePrice: 49999,
    sales: 555,
    category: 'console',
    company: 'nintendo',
  },
];
//////////////////////////////// Dashboard Arrays ////////////////////////////////

//////////////////////////////// Orders Arrays ////////////////////////////////
const ordersArray = [
  {
    id: '563',
    number: 1,
    cost: 16500,
    orderData: '11-12-2022',
    statues: 'Shipped',
  },
  {
    id: '552',
    number: 3,
    cost: 16500,
    orderData: '11-12-2022',
    statues: 'Shipped',
  },
  {
    id: '658',
    number: 4,
    cost: 16500,
    orderData: '11-12-2022',
    statues: 'Shipped',
  },
  {
    id: '528',
    number: 15,
    cost: 16500,
    orderData: '11-12-2022',
    statues: 'Dilverd',
  },
  {
    id: '578',
    number: 19,
    cost: 16500,
    orderData: '11-12-2022',
    statues: 'Pending',
  },
];
//////////////////////////////// Orders Arrays ////////////////////////////////
export {
  Product,
  Products,
  OnSaleProducts,
  BestSellerProducts,
  FeaturedProducts,
  TotalRevenue,
  ordersArray,
  StatisticsArray,
  OrdersDataArray,
  ProductsDataArray,
};
// For Moke Data use these 2 Links

// For Products Array
//https://gamerzone391.netlify.app/.netlify/functions/productsAPI

// For Single Products
//https://gamerzone391.netlify.app/.netlify/functions/singelProductAPI?id=
