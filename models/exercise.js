"use strict";

module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define("Exercise",
    {
      title: DataTypes.STRING,
      group: DataTypes.ENUM('back', 'legs', 'chest', 'bicep', 'tricep', 'shoulders', 'forearm')
    },
    {
      classMethods: {
        associate(models) {
          Exercise.belongsTo(models.Training, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );

  return Exercise;
};
