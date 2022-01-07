module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('restaurantmenus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            content: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            restaurantId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'restaurant',
                    key: 'id',
                    as: 'restaurantId',
                },
            },
        }),
    down: (queryInterface /* , Sequelize */ ) =>
        queryInterface.dropTable('restaurantmenus'),
};