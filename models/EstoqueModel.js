let knex = require('../database/connection');
class EstoqueModel {
  async getAll() {
    try {
      let todos = await knex.select().table('estoque')
      return todos
    } catch (error) {
      
    }
  }

  async getById(id){
    try {
      let equipamento = await knex.select().where({ id: id }).table('estoque');
      return equipamento;
    } catch (error) {
      console.error(error)
      return error
    }
  }

  async inserEstoque(equipamento) {
    try {
      let result = await knex.insert(equipamento).table('estoque');
      return result
    } catch (error) {
      console.error(error)
      return error
    }
  }

  async atualiza(obj){
    try {
      let { id } = obj
      let resp = await knex.where({ id: id }).update(obj).table('estoque');
      return resp
    } catch (err) {
      console.error(err)
      return err
    }
  }
}

module.exports = new EstoqueModel();