const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
} = require('../../controllers/pizza-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(addThought);

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/users/:userId/reactions/:reactionId
router
    .route('/:userId/reactions/:reactionId')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;
 31  
routes/api/user-routes.js
@@ -0,0 +1,31 @@
const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    addUser,
    addFriend,
    updateUser,
    removeUser,
    removeFriend
} = require('../../controllers/user-controller');

// /api/users
router
    .route('/')
    .get(getAllUser)
    .post(addUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser);

// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;