Goals = new Mongo.Collection('goals');

Goals.helpers({
  role: function(){
    console.log(Roles.findOne(this.roleId));
    return Roles.findOne(this.roleId);

  }
});

GoalsSchema = new SimpleSchema({
  goalName:{
    type: String,
    label: "Goal Name",
    max: 100
  },
  goalDescription:{
    type: String,
    label: "Goal Description",
    max: 1024
  },
  tasks:{
    type:[String],
    label: "Tasks",
    optional: true
  },
  roleId:{
    type: String,
    label: "Role ID",
    optional: true
  }
});

Goals.attachSchema(GoalsSchema);


if (Meteor.isServer) {
  Goals.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}

