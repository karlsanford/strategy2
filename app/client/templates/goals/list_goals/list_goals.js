/*****************************************************************************/
/* ListGoals: Event Handlers */
/*****************************************************************************/
Template.ListGoals.events({
});

/*****************************************************************************/
/* ListGoals: Helpers */
/*****************************************************************************/
Template.ListGoals.helpers({
    goals: function(){
        return Goals.find();
    }
});

/*****************************************************************************/
/* ListGoals: Lifecycle Hooks */
/*****************************************************************************/
Template.ListGoals.onCreated(function () {
});

Template.ListGoals.onRendered(function () {
});

Template.ListGoals.onDestroyed(function () {
});
