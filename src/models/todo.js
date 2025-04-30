'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' }); // Gợi ý thêm rõ ràng
    }
  }

  Todo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Todo',
    tableName: 'Todos', // Gợi ý thêm để khớp migration
    timestamps: true,   // Vì bạn có createdAt và updatedAt
  });

  return Todo;
};
