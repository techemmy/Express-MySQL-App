module.exports = (sequelize, DataTypes) => {
    const AuthorModel = sequelize.define('Author', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {tableName: "authors"})

    return AuthorModel
}