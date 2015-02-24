/**
 * Band Controller
 */

var BandController = {

  index: function (req,res) {
    var q = "";
    var page = req.param('page') || 1,
        bandsPerPage = 10,
        opts = {};

    // If search
    if (req.param('query')) {
      opts = { or: [] };
      

      var query = req.param('query').split(' ');
      _.each(query, function (q) {
        opts.or.push({
          bandname: {
            contains: q
          }
        });

        opts.or.push({
          about: {
            contains: q
          }
        });
      });
    }

    Band.find(opts).done(function (err, bands) {
      if (err) return res.serverError(err);
      var totalBands = bands.length;

      Band.find(opts)
        .sort('createdAt DESC')
        .paginate({page: page, limit: bandsPerPage})
        .done(function (err, bands) {
          res.send({
            totalBands: totalBands,
            perPage: bandsPerPage,
            currentPage: parseInt(page),
            bands: bands
          })
        });
    });  
  },

  show: function (req, res) {
    var ObjectId = require('mongodb').ObjectID;
    var id = req.param('id');
    Band.findOne({_id: ObjectId(id)}).done(function (err, band) {
      if(!band) console.log("No way");
      console.log(band)
      res.send({band: band})
  });
  }
}
module.exports = BandController;