const EquipamentosModel = require('../models/Equipamento');
class HomeController {
  async index(req, res) {
    let eqs = await EquipamentosModel.selectAll();
    res.status(200).json(eqs);
  }

  async insertEquipamento(req, res) {
    let { nome, quantidade, quem_pediu, setor } = req.body
    if (nome == undefined || nome == "" 
        && quantidade == undefined || quantidade == "" 
        && quem_pediu == undefined || quem_pediu == "" 
        && setor == undefined || setor == "") {
      res.status(404).json({ message: "Campos preenchidos errados" })
      return
    }
    let obj = { nome, quantidade, quem_pediu, setor }
    await EquipamentosModel.newEquipamento(obj);
    res.json({ message: true })
  }

  async selectEqp(req, res) {
    let { id } = req.params;
    let resp = await EquipamentosModel.selectById(id);
    res.json(resp);
  }

  async update(req, res) {
    let { id, nome, quantidade, quem_pediu, setor } = req.body
    if (nome == undefined || nome == "" 
        && quantidade == undefined || quantidade == "" 
        && quem_pediu == undefined || quem_pediu == "" 
        && setor == undefined || setor == "") {
      res.status(404).json({ message: "Campos preenchidos errados" })
      return
    }
    let obj = { id, nome, quantidade, quem_pediu, setor }
    let resp = await EquipamentosModel.updateEquipamento(obj)
    if(resp == 1) {
      res.status(200).json({ message: "Equipamento atualizado com sucesso!"});
    } else {
      res.status(404).json({ message: "Erro na hora de atualizar!"});
    }
  }

  async delete(req, res) {
    let { id } = req.params;
    if(id == "" && id == undefined) {
      res.status(404).json({ message: "Erro para deletar este id "})
      return
    }
    let resp = await EquipamentosModel.destroy(id);
    res.status(200).json({ message: "Excluido com seucesso", resp });
  }

}

module.exports = new HomeController();