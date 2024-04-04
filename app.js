// DEPENDENCIES

const express = require("express")

const  locations = require('./models/location.model.js')
const locationsController = require('./controllers/locations.controller.js')

const  machines = require('./models/machine.model.js')
const machinesController = require('./controllers/machines.controller.js')

const  persons = require('./models/person.model.js')
const personsController = require('./controllers/persons.controller.js')

const  plans = require('./models/plan.model.js')
const plansController = require('./controllers/plans.controller.js')





// CONFIGURATION

const app = express();

//ROUTES

app.use('/locations', locationsController)

app.use('/machines', machinesController)

app.use('/persons', personsController)

app.use('/plans', plansController)

app.get('/', (req, res) => {
    res.send("Hello, world!")

    

})

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' })
})

// EXPORT
module.exports = app