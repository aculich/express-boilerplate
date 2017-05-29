const knexfile = require('../../config/knexfile').test;
const knex = require('knex')(knexfile);
const model = require('../../model');
const User = model.User;
const expect = require('chai').expect;

describe('User', () => {

    before(done => knex.migrate.latest()
        .then(() => {
            done();
        })
        .catch(done));

    it('should save a model to the database', done => {
        const user = new User({
            username: 'John Doe',
            email: 'john@doe.com'
        });

        user.save()
            .then(() => User.where({
            email: 'john@doe.com'
        }).fetch())
            .then(user => {
                expect(user.get('username')).to.equal('John Doe');
                done();
            });
    });
});
