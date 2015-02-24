/**
 * Band Model
 */


var Band = {

  attributes: {
    id: {
        type: 'string',
        primaryKey: true,
        unique: true
    },
    bandname : { type: 'string' },
    tagline : { type: 'string' },
    about : { type: 'text' },
    video : { type: 'string' },
    userId : {type: 'int', primaryKey: true}
    /*users: {
       collection: 'user',
       via: 'bands',
       dominant:true
    },
    posts: {
       collection: 'post',
       via: 'band'
    }*/
  }
};

module.exports = Band;

