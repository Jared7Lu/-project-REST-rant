const router = require('express').Router()

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

//get places new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//get places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/rest1.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/rest2.jpg'
      }]
      res.render('places/index', { places })
})

module.exports = router
