'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
    },
    nik: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "NIK Harus Diisi"
        }
      }
    },
    nama_lengkap: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nama Lengkap Harus Diisi"
        }
      }
    },
    tempat: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tempat Harus Diisi"
        }
      }
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tanggal Lahir Harus Diisi"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};