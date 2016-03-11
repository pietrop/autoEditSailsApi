/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `UserController.create()`
     */
    create: function(req, res) {

        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).exec(function(err, msg) {
            sails.log(msg);
        });

        return res.json({
            success: 'user created'
        });
    },

    /**
     * `UserController.findOne()`
     */
    findOne: function(req, res) {

        console.log(req.params.id);

        User.findOne({
            id: req.params.id
        }).exec(function(err, account) {
            if (err) {
                return res.send(err);
            }
            if (!account) {
                return res.send('Could not find the user, sorry.');
            }
            sails.log('Found "%s"', account.email);
            return res.json(account);
        });
    },

    /**
     * `UserController.findAll()`
     */
    findAll: function(req, res) {

        User.find().exec(function(err, users) {
            if (err) {
                return res.negotiate(err);
            }
            if (!users) {
                return res.notFound('Could not find any user, sorry.');
            }
            sails.log('Found "%s"', users.email);
            return res.json(users);
        });
    },

    /**
     * `UserController.update()`
     */
    update: function(req, res) {

        User.update({
                id: req.params.id
            },
            req.body,
            function(err, users) {
                // Error handling
                if (err) {
                    return console.log(err);
                    // Updated users successfully!
                } else {
                    console.log("Users updated:", users);
                    return res.json('user updated');
                }
            });
    },

    /**
     * `UserController.delete()`
     */
    delete: function(req, res) {

        User.destroy({
            id: req.params.id
        }).exec(function(err) {
            if (err) {
                return res.negotiate(err);
            }
            sails.log('Deleted user, if it existed.');
            return res.json({
                success: 'Deleted user, if it existed.'
            });

        });
    }

};
