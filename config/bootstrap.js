/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

  User.findOne({username: 'admin'}).done(function (err, user) {
    if (!user) {
      // Create user if not in DB
      User.create({
        uid: 1,
        username: 'admin',
        fistname: '',
        lastname: '',
        password: 'admin',
        email: 'admin@example.com'
      }).done(function(err, user) {
        if (err) return console.log(err);
      });
    }
  });

  Band.findOne({bandname: 'Defiance'}).done(function (err, band) {
    if (!band) {
      // Create band if not in DB
      Band.create({
        uid: 1,
        userId : 2,
        bandname : 'Defiance',
        tagline : 'An alternative to modern rock.',
        about : 'Brent is selling a stake in his newest album and east coast tour. If you would like to back his new project, the \'Brent Walkins Band\', you can go to his verified Bandetta to make a contribution and earn a return.',
        video : 'http://vimeo.com/102428515',
      }).done(function(err, user) {
        if (err) return console.log(err);
      });
    }
  });

  Band.findOne({bandname: 'My Band'}).done(function (err, band) {
    if (!band) {
      // Create band if not in DB
      Band.create({
        uid: 1,
        userId : 3,
        bandname : 'My Band',
        tagline : 'An alternative to classic rock.',
        about : 'Shannon is testing what happens when 2 bands are loaded',
        video : 'http://vimeo.com/102428515',
      }).done(function(err, user) {
        if (err) return console.log(err);
      });
    }
  });

  // It's very important to trigger this callack method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};