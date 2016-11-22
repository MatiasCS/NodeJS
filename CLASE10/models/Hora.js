
module.exports = function(sequelize, DataTypes) {
    var Hora = sequelize.define('Hora', {
  		horas: DataTypes.STRING,
  		minutos: DataTypes.STRING,
  		segundos: DataTypes.STRING
    });
    return Hora;
};