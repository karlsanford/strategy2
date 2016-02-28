/*****************************************************************************/
/* EditRole: Event Handlers */
/*****************************************************************************/
Template.EditRole.events({
});

/*****************************************************************************/
/* EditRole: Helpers */
/*****************************************************************************/
Template.EditRole.helpers({
    goals: function(){
        //return [{"goalName":"goal1"},{"goalName":"goal2"}];
        return Goals.find();
    }
});

/*****************************************************************************/
/* EditRole: Lifecycle Hooks */
/*****************************************************************************/
Template.EditRole.onCreated(function () {
});

Template.EditRole.onRendered(function () {
});

Template.EditRole.onDestroyed(function () {
});
