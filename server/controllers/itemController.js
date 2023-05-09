import itemService from '../services/itemService.js';

const search = async (req, res) => {
  try {
    const queryParam = req.query;
    const query = queryParam['q'];
    const data = await itemService.search(query);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getDetail = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {    
      const data = await itemService.getDetail(id);
      res.json(data);
    } catch (err) {
      console.log('Error = ', err);
      res.status(400).json({ error: err.message });
    }
  }
};

export default { search, getDetail };
