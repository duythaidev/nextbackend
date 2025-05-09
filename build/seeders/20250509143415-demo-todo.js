'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Todos', [
            {
                description: 'Làm bài tập toán',
                isChecked: false,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                description: 'Mua sắm đồ ăn',
                isChecked: true,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                description: 'Tập gym 1 tiếng',
                isChecked: false,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Todos', null, {});
    }
};
//# sourceMappingURL=20250509143415-demo-todo.js.map