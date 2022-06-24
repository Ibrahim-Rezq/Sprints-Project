# Sprints_Online_Store

## Descrption

An ecommerce website for all your gaming needs from consoles to accessories

## Softwares used

-   ### VSCode "IDE"
-   ### Github "Source control"
-   ### Trello "Tasks manager"
-   ### Slack "Communication"

## BackEnd

# Sprints' Online Store Backend API (Django):

## Introduction ##

This is a REST API for an E-commerce website that interacts with any Frontend.

---
## Setup ##
### Database config ###
The API backend connects with sqlite database, but any other database can be used instead in case of production.
### Database Schema ###
***Schema.png*** is located in the root folder.
### Start ###
Clone the repo:  ***git clone*** **https://github.com/Ahmed-Abdelgawad-Dev/Sprints_Online_Store.git**
Use a virtual environment that you prefere.Could be pipenv | venv | conda. 
Install the required packages:
```shell
pip install -r requirements.txt
```
Apply migrations:
```shell
python manage.py migrate
```
Create an admin user:
```shell
python manage.py createsuperuser
```
Run the server:
```shell
python manage.py runserver
```
### Environment variables ###

**.env is required  and must be inside .git ignore for security.**
Here python dotenv package is used, feel free to use any other solution, also put any other credentials here like api secrets key ...etc.
Example for the required `.env` :.
```dotenv
SECRET_KEY=django-insecure-9kr=#(!7bp2n65^e4i!5vm6e_3ux3qd7nb0jc2j@i7jyhw)6qa
DATABASE=....etc
```
### Release port 8000 if needed: Unix based OS ###
`sudo lsof -t -i tcp:8000 | xargs kill -9
`
---
## Endpoints ##

```http request
        'users/'
        POST: 'login/' 
        GET:  'get_user/'
        GET:  'get_users/'
        PUT:  'update_user/'# Sprints_Online_Store

## Descrption

An ecommerce website for all your gaming needs from consoles to accessories

## Softwares used

-   ### VSCode "IDE"
-   ### Github "Source control"
-   ### Trello "Tasks manager"
-   ### Slack "Communication"


## Sprints' Online Store Backend API (Django):

## Introduction ##

This is a REST API for an E-commerce website that interacts with any Frontend.

---
## Setup ##
### Database config ###
The API backend connects with sqlite database, but any other database can be used instead in case of production.
### Database Schema ###
***Schema.png*** is located in the root folder.
### Start ###
Clone the repo:  ***git clone*** **https://github.com/Ibrahim-Rezq/Sprints-Project.git**

Use a virtual environment that you prefere.Could be pipenv | venv | conda. 

Install the required packages:
```shell
pip install -r requirements.txt
```
Apply migrations:
```shell
python manage.py migrate
```
Create an admin user:
```shell
python manage.py createsuperuser
```
Run the server:
```shell
python manage.py runserver
```
### Environment variables ###

**.env is required  and must be inside .git ignore for security.**
Here python dotenv package is used, feel free to use any other solution, also put any other credentials here like api secrets key ...etc.
Example for the required `.env` :.
```dotenv
SECRET_KEY=django-insecure-9kr=#(!7bp2n65^e4i!5vm6e_3ux3qd7nb0jc2j@i7jyhw)6qa
DATABASE=....etc
```
### Release port 8000 if needed: Unix based OS ###
`sudo lsof -t -i tcp:8000 | xargs kill -9
`
---
## Endpoints ##

```http request
        'users/'
        POST: 'login/' 
        GET:  'get_user/'
        GET:  'get_users/'
        PUT:  'update_user/'
        POST: 'register_user/'

        'products/' 
        GET:  ''                          |     get all products
        GET:  '/{id}'                     |     get a product

        'orders/'
        GET: ''                           | get orders of user  
        POST:  'add_order/'               | add items to order or make an order and put items inside
        GET:  'my_orders/'                | get orders of a user
        POST: '{order_id}/Delivered/'     | change the order status to delivered after delivery
        GET:  '{order_id}/'               | get order by order id
        POST: '{order_id}/paid/'          | change the payment status to paid

```
## Sprints' Online Store Frontend (React):

### Built With

-   React.js
-   React-Router V6
-   ReduxToolkit
-   Bootstrap


### Run Project "Development" (Run Backend First)

Go to folder
```
1. cd ./Ecommerce/frontend/
```
Install the required packages

```
1. npm i
```
Run the Project

```
1. npm run start
```

### Environment variables ###


**.env is required  and must be inside .git ignore for security.**

The file `.env` should be in the root of the frontend `./Ecommerce/frontend/` for the project to function correctly

```dotenv
REACT_APP_API_KEY= https://127.0.0.1:8000/ || (Backend URL)
```


## The E-commerce Project File Structure (frontend)

## SRC

1.  ### Pages "Veiws"

    > #### _each page has 2 main componenets nav and footer_

    -   #### Home
    -   #### About
    -   #### Products
    -   #### SingleProduct
    -   #### Cart
    -   #### CheckOut
    -   #### Login/Rigister
    -   #### Account Info

```

```

2.  ## Componenets

    > #### _F->somthing_ //this is a function of the parent listItem
    >
    > #### if _F->somthing_ is not present then the component is a static one

-   #### Navigation
-   #### NavLinks
-   #### ProtectedLinks
-   #### Hero
-   #### Fetured
-   #### Contact
-   #### ProcuctsVeiw
-   #### Filters
-   #### ProductCard
-   #### ProductImagePreview
-   #### AddToCart
-   #### AddToCartButton
-   #### CartAmountButtons
-   #### ProductReviews
-   #### SingleProductReviews
-   #### AddReview
-   #### CartVeiw
-   #### CartItem
-   #### ProcedeToCheckOut
-   #### CheckOut
-   #### OrdersVeiw
-   #### SingleOrder
-   #### AdminDashboard
-   #### Sales
-   #### SalesData
-   #### Products
-   #### Customers
-   #### Edits
-   #### ProductsData
-   #### CustomersData
-   #### AccountInfo
-   #### Profile <sup>A.K.A name||password<sup>

```

```

3.  ## Assets

    -   #### images and stuff :)

```

```

4.  ## Css

    > #### _Other CSS will be within the componenets using styledComponents_

    -   #### index.css

```

```

5.  ## Utilits

> #### _Utilits functions for later use like PriceFormating and Array's data merging etc..._

        POST: 'register_user/'

        'products/' 
        GET:  ''                          |     get all products
        GET:  '/{id}'                     |     get a product

        'orders/'
        GET: ''                           | get orders of user  
        POST:  'add_order/'               | add items to order or make an order and put items inside
        GET:  'my_orders/'                | get orders of a user
        POST: '{order_id}/Delivered/'     | change the order status to delivered after delivery
        GET:  '{order_id}/'               | get order by order id
        POST: '{order_id}/paid/'          | change the payment status to paid

## FrontEnd

### Built With

-   React.js
-   React-Router V6
-   ReduxToolkit
-   Bootstrap

### Run Project "Development" (Run Backend First)

1. cd ./Ecommerce/frontend/

1. npm i

1. npm run start

### .env file in ./Ecommerce

<code>SECRET_KEY = django-insecure-9kr=#(!7bp2n65^e4i!5vm6e_3ux3qd7nb0jc2j@i7jyhw)6qa
</code>

### .env file in ./Ecommerce/frontend/

<code>REACT_APP_API_KEY= https://127.0.0.1:8000/
</code>

## The E-commerce Project File Structure (frontend)

## SRC

1.  ### Pages "Veiws"

    > #### _each page has 2 main componenets nav and footer_

    -   #### Home
    -   #### About
    -   #### Products
    -   #### SingleProduct
    -   #### Cart
    -   #### CheckOut
    -   #### Login/Rigister
    -   #### Account Info

```

```

2.  ## Componenets

    > #### _F->somthing_ //this is a function of the parent listItem
    >
    > #### if _F->somthing_ is not present then the component is a static one

-   #### Navigation
-   #### NavLinks
-   #### ProtectedLinks
-   #### Hero
-   #### Fetured
-   #### Contact
-   #### ProcuctsVeiw
-   #### Filters
-   #### ProductCard
-   #### ProductImagePreview
-   #### AddToCart
-   #### AddToCartButton
-   #### CartAmountButtons
-   #### ProductReviews
-   #### SingleProductReviews
-   #### AddReview
-   #### CartVeiw
-   #### CartItem
-   #### ProcedeToCheckOut
-   #### CheckOut
-   #### OrdersVeiw
-   #### SingleOrder
-   #### AdminDashboard
-   #### Sales
-   #### SalesData
-   #### Products
-   #### Customers
-   #### Edits
-   #### ProductsData
-   #### CustomersData
-   #### AccountInfo
-   #### Profile <sup>A.K.A name||password<sup>

```

```

3.  ## Assets

    -   #### images and stuff :)

```

```

4.  ## Css

    > #### _Other CSS will be within the componenets using styledComponents_

    -   #### index.css

```

```

5.  ## Utilits

> #### _Utilits functions for later use like PriceFormating and Array's data merging etc..._
