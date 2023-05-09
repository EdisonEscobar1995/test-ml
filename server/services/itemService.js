import axios from 'axios';
import utils from '../utils/utils.js';

const HOST = 'https://api.mercadolibre.com/';

const search = async query => {
  const response = await axios.get(HOST + 'sites/MLA/search?q=' + query)

  if (!response) {
    throw new Error('Could not found');
  }

  if (response) {
    return await utils.getStructureSearch(response.data, HOST);
  }
};

const getDetail = async id => {
  const responseItem = await axios.get(HOST + 'items/' + id);
  const responseItemDescription = await axios.get(HOST + 'items/' + id + '/description');

  if (!responseItem || !responseItemDescription) {
    throw new Error('Could not found');
  }

  if (responseItem && responseItemDescription) {
    return await utils.getStructureItem(responseItem.data, responseItemDescription.data, HOST);
  }
}


export default { search, getDetail };
