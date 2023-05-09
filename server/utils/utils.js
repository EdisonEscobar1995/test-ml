import axios from 'axios';

const response = {
  author: {
    name: "Edison",
    lastname: "Escobar",
  }
};

const getCategoryMostResults = async (categories, HOST) => {
  let path_from_root = [];
  let most_results = {
    results: 0
  };
  categories.forEach(element => {
    if (element.results > most_results.results) {
      most_results = element;
    }
  });

  if (most_results.results > 0) {
    path_from_root = await getPathCategory(most_results.id, HOST);
  }

  return path_from_root;
};

const getPathCategory = async (idCategory, HOST) => {
  const path_from_root = [];
  try {    
    const responseCategory = await axios.get(HOST + 'categories/' + idCategory);
    if (responseCategory.data.path_from_root.length > 0) {
      const paths = responseCategory.data.path_from_root;
      paths.forEach(path =>{
        path_from_root.push(path.name);
      })
    }
  } catch (error) {
    console.log('Error = ', error);
  }

  return path_from_root;
};

const getDecimalPlaces = async (idCurrency, HOST) => {
  let decimal_places = 0;
  try {    
    const response = await axios.get(HOST + 'currencies/' + idCurrency);
    if (response.data) {
      decimal_places = response.data.decimal_places;
    }
  } catch (error) {
    console.log('Error = ', error);
  }

  return decimal_places;
};

const getStructureSearch = async (data, HOST) => {
  const items = [];
  let categories = [];
  const results = data.results;
  const filters = data.filters;
  const available_filters = data.available_filters;
  if (results.length > 0) {
    for (let i in results) {
      if (i < 4) {
        items.push({
          id: results[i].id,
          title: results[i].title,
          price: {
            currency: results[i].currency_id,
            amount: results[i].price,
            decimals: await getDecimalPlaces(results[i].currency_id, HOST),
          },
          picture: results[i].thumbnail,
          condition: results[i].condition,
          free_shipping: results[i].shipping.free_shipping,
          seller_state: results[i].seller_address.state.name
        })
      }
    }
  }

  if (filters.length > 0) {
    for (let i in filters) {
      if (filters[i].id === "category") {
        const path_from_root = (filters[i].values[0]?.path_from_root || []);
        for (let j in path_from_root) {
          categories.push(path_from_root[j].name);
        }
      }
    }
  } else if (available_filters.length > 0) {
    for (let i in available_filters) {
      if (available_filters[i].id === "category") {
        categories = await getCategoryMostResults(available_filters[i].values, HOST);
      }
    }
  }

  response.categories = categories;
  response.items = items;

  return response;
};

const getStructureItem = async (data, dataDescription, HOST) => {
  let item = {};
  if (data) {
    item = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: await getDecimalPlaces(data.currency_id, HOST),
      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: dataDescription.plain_text
    }
  }
  response.categories = await getPathCategory(data.category_id, HOST);
  response.item = item;

  return response;
};

export default {
  getStructureItem,
  getStructureSearch,
  getPathCategory,
  getCategoryMostResults
};
