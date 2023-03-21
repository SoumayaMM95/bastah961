const { DataTypes,Deferrable } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',
        {
            CategoryID: { type: DataTypes.INTEGER, allowNull: false, references: {model: 'Category',key: 'id',deferrable: Deferrable.INITIALLY_IMMEDIATE} },
            Name: { type: DataTypes.STRING(100), allowNull: false },
            Description: { type: DataTypes.STRING(100), allowNull: false },
            Price: { type: DataTypes.INTEGER, allowNull: false },
            DiscountPrice: { type: DataTypes.INTEGER, allowNull: true },
            Image: DataTypes.STRING(255),
            SortPosition: DataTypes.INTEGER,
            IsDeleted: DataTypes.BOOLEAN,
            Status: DataTypes.BOOLEAN
        },
        {
            freezeTableName: true
        });
    return Product;
}