module.exports = function(sequelize, DataTypes) {
    var Hour = sequelize.define('Hour', {
        hour: {
            type: DataTypes.TIME,
            allowNull: false
        },
    });
    return Hour;
};