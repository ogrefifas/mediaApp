var express = require('express');
var router = express.Router();
router.post('/media',require('./media.js').post);
router.get('/userById',require('./userById').get);
router.post('/favoritesMedia',require('./favoritesMedia.js').post);
router.post('/deleteFromFavorites',require('./deleteFromFavorites.js').post);
router.get('/video/:id',require('./videoById.js').get);
router.get('/album/:id',require('./albumById.js').get);
router.post('/changeUsername',require('./changeUsername.js').post);
router.post('/changePassword',require('./changePassword.js').post);
router.get('/popularSongs',require('./popularSongs.js').get);
router.post('/searchSongs',require('./searchSongs.js').post);
router.get('/favoritesSongs',require('./favoritesSongs.js').get);
router.post('/popular',require('./popularMedia.js').post);
router.post('/searchMedia',require('./searchMedia.js').post);
router.post('/like',require('./like.js').post);
router.get('/watch/:id',require('./watch.js').get);
router.get('/genres',require('./genres.js').get);
router.post('/persons',require('./persons.js').post);
router.post('/searchVideos',require('./searchVideos.js').post);
router.post('/favorites',require('./favorites.js').post);
router.post('/comment/',require('./comment.js').post);
router.post('/login',require('./login.js').post);
router.post('/registration',require('./registration.js').post);
router.get('/logout',require('./logout.js').get);
router.get('/authorized',require('./authorized.js').get);
router.post('/checkUsernames',require('./checkUsernames.js').post);
module.exports=router;