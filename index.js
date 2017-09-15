const path = require('path')
const express = require('express')
const app = express()
const request = require('request')

const PORT_NUMBER = 8080
const NEARBY_SEARCH_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const GOOGLE_API_KEY = 'AIzaSyBZ8PZCoEFJzI7-3PEFcz_-n3PNJO8KRcw';


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/templates/mymap.html'));
});



/*app.get('/nearby_search', function (req, api_res) {
  var radius = req.query.radius || 150;
  var params = {
    'key': GOOGLE_API_KEY,
    'location': req.query.location,
    'radius': radius,
    'type': req.query.type
  };
  request({url: NEARBY_SEARCH_URL, qs: params}, function(err, res, body) {
    if( res.statusCode == 200) {
      api_res.json(body);
    } else {
    //error helper
    }
  });
});*/
 

app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

app.listen(PORT_NUMBER, function () {
  console.log('Example app listening on port ' + PORT_NUMBER + '!')
});
