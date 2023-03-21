const { DataTypes,Deferrable } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category',
        {
            Name: { type: DataTypes.STRING(100), allowNull: false },
            Image: DataTypes.STRING(255),
            SortPosition: DataTypes.INTEGER,
            IsDeleted: DataTypes.BOOLEAN,
            Status: DataTypes.BOOLEAN
        },
        {
            freezeTableName: true
        });
    return Category;
}