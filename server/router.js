const axios = require('axios');
const router = require('express').Router();
const test = 'http://api.repo.nypl.org/api/v1/items/search?q=newyork&publicDomainOnly=true';
const auth = 'xyvcxkbi1xdr07l7';
// router.use('/api', apiRouter);


router.get('/', (req, res, next) => {
  res.send('home page!');
});

router.get('/photosReq', (req, res, next) => {
  axios.get(test, {'headers': { 'Authorization': 'Token token=' + auth, 'Access-Control-Request-Headers': 'authorization'}})
  .then(data => {
    let photos = data.data.nyplAPI.response.result;
    res.send(photos)
  })
  .catch(next);
});

module.exports = router;
