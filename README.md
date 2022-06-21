# Sprints_Online_Store

## Descrption

An ecommerce website for all your gaming needs from consoles to accessories

## Softwares used

-   ### VSCode "IDE"
-   ### Github "Source control"
-   ### Trello "Tasks manager"
-   ### Slack "Communication"

## BackEnd

```

```

#### For more info check the orginal team member **Ahmed** Repo

-   https://github.com/Ahmed-Abdelgawad-Dev/Sprints_Online_Store.git

#### The Steps are more Clear and Easy there

```

```

### Built With

-   Django 'rest_framwork'
-   Sqllite3

### Run Project "Development"

1. cd ./Ecommerce

1. create venv file

1. start virtual env

1. pip install -r requirments.py

1. python manage.py migrate

1. python manage.py makemigrations

1. python manage.py migrate --run-sync

1. python manage.py createsuperuser -> then enter desired email and password and name

1. python manage.py runserver

```
go to 127.0.0.1:8000/admin -> then login with the prevoiusly created
credentials to access admin dashboard

and preferably add products before runing frontend for the full experience
```

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
