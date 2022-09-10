// @ts-check

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('users', 'age', {
      type: Sequelize.DataTypes.INTEGER,
    })
  },
  
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
    down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'age')
  }
}
