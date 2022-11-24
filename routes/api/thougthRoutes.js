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