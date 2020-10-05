let knex = require('../database/connection');
class Equipamento {
  async newEquipamento(equipamento) {
    try {
      let eq = await knex.insert(equipamento).table('equipamentos')
      return eq;
    } catch (error) {
      console.log(error);
    }
  }

  async selectAll() {
    try {
      let eqs = await knex.select().table('equipamentos');
      return eqs
    } catch (error) {
      console.error(error);
    }
  }

  async selectById(id) {
    try {
      let eq = await knex.select().where({ id: id }).table('equipamentos');
      return eq;
    } catch (error) {
      console.error(error);
    }
  }

  async updateEquipamento(obj) {
    let id = obj.id
    let res = await knex.where({ id: id }).update(obj).table('equipamentos');
    return res;
  }

  async destroy(id) {
    try {
      return await knex.delete().where({id: id}).table('equipamentos');
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new Equipamento();