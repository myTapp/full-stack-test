const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ username, password: hashedPassword })
    res.status(201).json(user)
}

exports.login = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })
    if (!user) return res.status(401).json({ message: 'Invalid credentials' })

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid)
        return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' })
    res.json({ token })
}
