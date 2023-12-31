var express = require('express');
var router = express.Router();
const run = require('models/runs')
const user = require('models/users')

/* GET home page. */
router.get('/', async(req, res) => {
  const runs = await run.findAll()
  res.render('runs/index', { title: 'Available Runs', runlist: runs});
});

/* GET a single country from database */
router.get('/:id', async(req, res) => {
  const requestedId = req.params.id;
  //query the database
  const oneRun = await run.findOne({
      where: {id: requestedId},
      include: {model: user, as: 'users'}
  })
  oneRun.users.forEach(use => {
    console.log(use.first_name)
  })
  //render the detail view
  res.render('runs/details', {title: 'Run Details: ' + oneRun.name, runItem: oneRun})
})

module.exports = router;
