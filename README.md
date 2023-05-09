#### It uses the following modules:
* [React](https://reactjs.org) ([Vite](https://es.vitejs.dev/guide/))
* [React Router v6](https://reactrouter.com/en/main)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Sass](https://sass-lang.com/)
* [Axios](https://github.com/axios/axios)

#### Node version

```
The Node.js version used to create the project is 16.13.1
```

#### Clone project

```
git clone https://github.com/EdisonEscobar1995/test-ml.git
```

### Frontend:

#### Navigate project
```
cd test-ml
```


#### Install dependencies:

```
npm install
```
#### Start project - frontend:

```
npm start
```

### Backend:

```
Inside the 'test-ml' folder
```

#### Navigate project - server
```
cd server
```

#### Install dependencies:

```
npm install
```

#### Start project - server:


```
npm start
```
#### Routes available

* /
* "/items?search=query"
* "/items/:id"

#### Structure folders
```
src
|-- components
|   |-- Header.jsx
|   |-- ProductDetail.jsx
|   |-- Results.jsx
|-- assets
|   |-- images
|   |   |-- ic_Search.png
|   |   |-- ic_Search_2x.png
|   |   |-- ic_shipping.png
|   |   |-- ic_shipping@2x.png.png
|   |   |-- Logo_ML_2x.png
|   |   |-- Logo_ML.png
|   |-- sass
|   |   |-- _variables.scss
|-- pages
|   |-- Home.jsx
|   |-- ItemDetail.jsx
|   |-- Layout.jsx
|   |-- Results.jsx
|-- routers
|   |-- Routes.jsx
|-- sass
|   |-- App.scss
|   |-- header.scss
|   |-- productDetail.scss
|   |-- results.scss
|-- App.jsx
|-- main.jsx

server
|-- controllers
|   |-- itemController.js
|-- routes
|   |-- itemRoutes.js
|-- services
|   |-- itemService.js
|-- utils
|   |-- utils.js
|-- server.js
```
