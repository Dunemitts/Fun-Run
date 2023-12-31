var express = require('express');
var router = express.Router();
const user = require('models/users')
const runs = require('models/runs')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await user.findAll()
  res.render('users/index', { title: 'Users', userlist: users});
});

/* GET a single country from database */
router.get('/:id', async(req, res) => {
  const requestedId = req.params.id
  //query the database
  const oneUser = await user.findOne({
      where: {id: requestedId},
      include: [{model: runs, as: 'runs'}]
  })
  //test model: Language, as: 'languages'
  oneUser.runs.forEach(use => {
    console.log(use.name)
  })
  //render the detail view
  res.render('users/details', {title: 'User Details: ' + user.first_name + " " + user.last_name, userItem: oneUser})
})

module.exports = router;
