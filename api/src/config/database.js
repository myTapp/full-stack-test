module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database:'myTapDb',
    define: {
        timestamps:true,
        underscored: true,
    }
}