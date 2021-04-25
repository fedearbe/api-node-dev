const router = require('express').Router(); 

const tasks = require('./tasks/route');

router.use('/tasks', tasks);

module.exports = router;
