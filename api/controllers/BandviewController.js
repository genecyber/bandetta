/**
 * BandviewController
 *
 * @description :: Server-side logic for managing bandviews
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
    
    definition: function(req, res) {
        res.json(Bandview.definition);
    }

};

