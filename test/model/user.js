const knexfile = require('../../config/knexfile').test;
const knex = require('knex')(knexfile);
const model = require('../../model');
const User = model.User;
const expect = require('chai').expect;

describe('User', function() {

    before(function(done) {
        return knex.migrate.latest()
            .then(function() {
                done();
            })
            .catch(done);
    });

    it('should save a model to the database', function(done) {
        var user = new User({
            username: 'John Doe',
            email: 'john@doe.com'
        });

        user.save()
            .then(function() {
                return User.where({
                    email: 'john@doe.com'
                }).fetch();
            })
            .then(function(user) {
                expect(user.get('username')).to.equal('John Doe');
                done();
            });
    });
});
