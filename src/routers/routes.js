const express = require('express')
const Student = require('../models/students')
const router = new express.Router()

router.post('/students', async (req, res) => {
  try {
    console.log(req.body)
    const student = await new Student(req.body)
    const createStudent = await student.save()

    res.status(201).send(createStudent)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/students', async (req, res) => {
  try {
    const getStudents = await Student.find({})
    console.log(getStudents)
    res.send(getStudents)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const getstudent = await Student.findById(_id)
    if (!getstudent) {
      res.status(404).send('Data not found')
    }
    res.send(getstudent)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const deletestudent = await Student.findByIdAndDelete(_id)
    if (!_id) {
      res.status(404).send('Data not found')
    }

    res.send(deletestudent)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.put('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id
    const updatestudent = await Student.findById(_id)
    if (updatestudent) {
      updatestudent.name = req.body.name || updatestudent.name
      updatestudent.email = req.body.email || updatestudent.email
      updatestudent.phone = req.body.phone || updatestudent.phone
      updatestudent.address = req.body.address || updatestudent.address

      const updatedstudent = await updatestudent.save()

      res.send(updatedstudent)
    } else {
      res.status(404).send('Data not found')
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
