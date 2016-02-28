Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

//
//Roles
//
Router.route('/roles/create',{
  name: 'createRole',
  controller: 'RolesController',
  action: 'create',
  where: 'client'
});

Router.route('/roles',{
  name: 'listRoles',
  controller: 'RolesController',
  action: 'list',
  where: 'client'
});

Router.route('/roles/:_id/edit',{
  name: 'editRole',
  controller: 'RolesController',
  action: 'edit',
  where: 'client'
});

Router.route('/roles/:_id',{
  name: 'viewRole',
  controller: 'RolesController',
  action: 'view',
  where: 'client'
});

///////////////////
//Goals////////////
//////////////////
Router.route('/goals/create',{
  name: 'createGoal',
  controller: 'GoalsController',
  action: 'insert',
  where: 'client'
});

Router.route('/goals',{
  name: 'listGoals',
  controller: 'GoalsController',
  action: 'list',
  where: 'client'
});

Router.route('/goals/:_id/edit',{
  name: 'editGoal',
  controller: 'GoalsController',
  action: 'edit',
  where: 'client'
});