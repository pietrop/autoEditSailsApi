/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

    /***************************************************************************
     *                                                                          *
     * Default policy for all controllers and actions (`true` allows public     *
     * access)                                                                  *
     *                                                                          *
     ***************************************************************************/

    '*': true,

    /***************************************************************************
     *                                                                          *
     * Here's an example of mapping some policies to run before a controller    *
     * and its actions                                                          *
     *                                                                          *
     ***************************************************************************/
    // RabbitController: {

    // Apply the `false` policy as the default for all of RabbitController's actions
    // (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
    // '*': false,

    // For the action `nurture`, apply the 'isRabbitMother' policy
    // (this overrides `false` above)
    // nurture  : 'isRabbitMother',

    // Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
    // before letting any users feed our rabbits
    // feed : ['isNiceToAnimals', 'hasRabbitFood']
    // }
    // TranscriptController: {
    //   'find': false,
    //   'create': false,
    //   'update': false,
    //   'destroy': false,
    //   'populate': false,
    //   'add': false,
    //   'remove': false,
    //   '*': false
    // }

    /**
      
        2 USER ROLES:
        - admin
        - normal
      
       */


    /*======================================================
    =     Access criteria on UserController methods     =
    =======================================================*/

    /**####################################################################                  
    #                                                                     #
    #             create | find | findOne | update | delete |  message    #
    #                                                                     #
    #  - admin       X       X       X         X       X          X       #
    #                                                                     #
    #  - normal              X       X                            X       #
    #                                                                     #
    #                                                                     #
    #                                                                     #
    #####################################################################*/

    /*==========================================
    =           Policy on UserController       =
    ==========================================*/

    UserController: {

        /* Test */

        admin:      ['isAdmin'],
        restricted: ['sessionAuth'],
        open: true,

        findAll: ['sessionAuth'],
        findOne: ['sessionAuth'],
        create:  ['sessionAuth'],
        update:  ['sessionAuth'],
        message: ['sessionAuth'],

        delete: ['isAdmin'],

    }

    /*=====  End of Policy on UserController  ======*/


    /*======================================================
    =     Access criteria on ProjectController methods     =
    =======================================================*/

    /**##################################################################################                   
    #                                                                                   #
    #             create | find | findOne | update | delete |  assignUser               #
    #                                                                                   #
    #  - admin       X       X       X         X       X          X                     #
    #                                                                                   #
    #  - normal      X       X       X         X                                        #
    #                                                                                   #
    #                                                                                   #
    #                                                                                   #
    ###################################################################################*/

    /*==========================================
    =        Policy on ProjectController       =
    ==========================================*/

    ProjectController: {

        /* Test */

        admin:      ['isAdmin'],
        restricted: ['sessionAuth'],
        open: true,

        findAll: ['sessionAuth'],
        findOne: ['sessionAuth'],
        create:  ['sessionAuth'],
        update:  ['sessionAuth'],

        delete:     ['isAdmin'],
        assignUser: ['isAdmin']

    }

    /*=====  End of Policy on ProjectController  ======*/

};
