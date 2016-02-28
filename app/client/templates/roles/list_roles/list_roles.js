/*****************************************************************************/
/* ListRoles: Event Handlers */
/*****************************************************************************/
Template.ListRoles.events({
});

/*****************************************************************************/
/* ListRoles: Helpers */
/*****************************************************************************/
Template.ListRoles.helpers({
    roles: function(){
        return Roles.find();
    }
});

/*****************************************************************************/
/* ListRoles: Lifecycle Hooks */
/*****************************************************************************/
Template.ListRoles.onCreated(function () {
});

Template.ListRoles.onRendered(function () {
});

Template.ListRoles.onDestroyed(function () {
});
