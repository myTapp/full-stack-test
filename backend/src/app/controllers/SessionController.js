const validation = require('../validation/users');
const Validator = require('validatorjs');

const { User } = require('../models');

class SessionController {
  async store(req, res) {


    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    return res.json({ 
      user,
      token: user.generateToken() 
    });
  }


   async create(req, res) {
    try {
      const rules = validation.rules;
      const validationFields = new Validator(req.body, rules);
      if (validationFields.fails()) {
        return res.status(400).json({ erros: validationFields.errors.all() });
      }
  
      const {  password, email } = req.body;
      
      const user = await User.create({
        password: password,
        email: email,
      });

      return res.status(200).json(user);
    } catch (erro) {
      return res.status(500).json({ Erro: `Erro ao cadastrar usuário!: ${erro}.` });
    }
  };
}

module.exports = new SessionController();