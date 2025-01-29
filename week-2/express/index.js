const express = require('express')

const app = express()
app.use(express.json())

let users = [
  {
    name: 'Mani',
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
  {
    name: 'Cigar',
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
]

app.get('/', (req, res) => {
  const name = req.query.name
  const userKidneys = users.find((user) => user.name === name)
  const noOfHealthyKidneys = userKidneys.kidneys.filter((johnKidney) => {
    return johnKidney.healthy
  }).length
  res.send(JSON.stringify(userKidneys) + JSON.stringify(noOfHealthyKidneys))
})

app.post('/', (req, res) => {
  const name = req.query.name
  const isHealthy = req.body.isHealthy
  users.map((user) => {
    if (user.name === name) {
      user.kidneys.push({
        isHealthy,
      })
    }
  })
  res.json(JSON.stringify(users))
})
app.put('/', (req, res) => {
  const name = req.query.name
  users.forEach((user) => {
    if (user.name === name) {
      user.kidneys.forEach((kidney) => {
        kidney.healthy = true
      })
    }
  })
  res.json(JSON.stringify(users))
})
app.delete('/', (req, res) => {
  const name = req.query.name
  users.map((user) => {
    if (user.name === name) {
      user.kidneys = []
    }
  })
  res.json(JSON.stringify(users))
})

app.listen(3001, () => {
  console.log('running at 3001')
})
