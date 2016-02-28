AutoForm.hooks({
    editGoalForm:{
        onSuccess: function(formType,result){
            Router.go('listGoals');
        }
    }
});

AutoForm.hooks({
    editRoleForm:{
        onSuccess: function(formType,result){
            Router.go('listRoles');
        }
    }
});

