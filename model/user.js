module.exports = function(bookshelf) {
    return bookshelf.Model.extend({
        tableName: 'users',
        hasTimestamps: ['created_at', 'updated_at'],
    });
};
