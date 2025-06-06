'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User);
        }
    }
    Todo.init({
        description: DataTypes.STRING,
        isChecked: DataTypes.BOOLEAN,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Todo',
    });
    return Todo;
};
//# sourceMappingURL=todo.js.map