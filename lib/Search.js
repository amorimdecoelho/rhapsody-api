var utils = require("./utils");

function Search() {
  function search(apikey, params) {
    var u = utils.buildUrl("/search", params, apikey, 'v2.0');
    return utils.handlePromise(u);
  }
  
  return {
    search:search
  }
}

module.exports = new Search();