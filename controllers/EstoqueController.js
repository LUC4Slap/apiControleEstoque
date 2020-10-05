const EstoqueModel = require('../models/EstoqueModel');
class EstoqueController {
  async getEstoque(req, res) {
    try {
      let estoque = await EstoqueModel.getAll();
      res.status(200).json(estoque);
    } catch (error) {
      console.error(error)
    }
  }

  async selectEstoque(req, res) {
    let { id } = req.params
    let estoque = await EstoqueModel.getById(id)
    res.status(200).json(estoque)
  }

  async insert(req, res) {
    let { nome, quantidade, id_equipamento } = req.body;
    if (nome == undefined || nome == "" 
        && quantidade == undefined || quantidade == "" 
        && id_equipamento == undefined || id_equipamento == "" ) {
      res.status(404).json({ message: "Campos preenchidos errados" })
      return
    }    
    let equipamento = { nome, quantidade, id_equipamento };
    await EstoqueModel.inserEstoque(equipamento)
    res.status(200).json({ message: true })
  }

  
}

module.exports = new EstoqueController();