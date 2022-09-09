'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4, 
        primaryKey: true,
        type: Sequelize.UUID
      },
      nik: {
        type: Sequelize.CHAR(16),
        unique: true
      },
      nama_lengkap: {
        type: Sequelize.STRING
      },
      tempat: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};