exports.up = ({schema}, Promise) => Promise.all([
    schema.createTable('users', table => {
        table.increments();
        table.string('username');
        table.string('email');
        table.timestamps();
    })
]);

exports.down = ({schema}, Promise) => Promise.all([
    schema.dropTableIfExists('table_name')
]);
