const https = require('https');
const parser = require('hn-parser')

module.exports = (request, response) => {

  // Set the request header and validate in case of invalid inputs.
  response.setHeader('Content-Type', 'application/json');
  var req = https.get('https://news.ycombinator.com', function (res) {
    var output = '';
    res.setEncoding('utf8');

    res.on('data', function (chunk) {
      output += chunk;
    });

    res.on('end', function () {
      const items = parser.parse(output);
      response.end(JSON.stringify(items));
    });
  });

  req.on('error', function (err) {
    response.end(failure(err.message));
  });
}


/**
 * Return a JSON string with success message.
 * @param {string} message 
 */
const success = (message) => {
  return JSON.stringify({
    success: true,
    message: message
  });
}

/**
 * Return a JSON string with failure message.
 * @param {string} message 
 */
const failure = (message) => {
  return JSON.stringify({
    success: false,
    message: message
  });
}
