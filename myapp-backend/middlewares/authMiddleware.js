const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({ message: 'Access denied' })

    try {
        const decoded = jwt.verify(token, 'secretkey')
        req.user = decoded
        next()
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' })
    }
}
