### Product return

#### EndPoint /products/:id

<code>
  {
    id: 'recA0TuFMnJFgPdu1',
    name: string,
    images: [
      {
        id: 'attijcapQEy4Lc64N',
        url: Link -> 'https://dl.airtable.com/.attachments/94efb8a9b4425a9ffb9e927a6d88beff/d2f7df26/pexels-pavel-danilyuk-7776214.jpg?ts=1654428955&userId=usr5Bo1z3DLd6Njfo&cs=72da14cdd1d280c9',

        filename: 'pexels-pavel-danilyuk-7776214.jpg',  ????
      }
    ],
    price: number  -> price in cents,
    colors: array of hex Colors -> ['#ffffff', '#dc143c'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nisi accusamus non, iusto neque vel!',
    stock: number,
    category: string,    ????
    company: string,    ????
    stars: float [0-5] ,            ????
    featured: bool,         ????
    onSale: bool,           ????
    reviews: number,          ????

},
<code>

### Products return

#### EndPoint /products

<code>
    [{product},...]
<code>

### Order return

<code>
   {
    orderId: string,
    orderNumber: number,
    userId: string,
    orderDate: date || string,
    price: number,
    status: string,  -> of only these values []
    cartId: string
  },
<code>

### Order return

#### EndPoint /orders/:userId

<code>
    [{order},...]
<code>

### user return

<code>
 {
    id: string,
    firstName: string,
    lastName: string,
    address: String,                         ????
    phone: string,                           ????
    profileImage:string -> Link For image,   ????
    password: string,
  },
<code>

### Cart return

#### EndPoint /cart/:userId && cartId

<code>
    {
        id:string,
        userId:string,
        cartItems:array of cart items ->
        [
            {
                itemId:string,
                amount:number
                color:string
                product:{product}
            }
        ]
    }
<code>
