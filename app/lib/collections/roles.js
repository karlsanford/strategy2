Roles = new Mongo.Collection('roles');

Roles.attachSchema(new SimpleSchema({
  roleName:{
    type: String,
    label: "Role Name",
    max: 100
  },
  roleDescription:{
    type: String,
    label: "Role Description",
    max: 1024,
    optional: true
  }
}));

if (Meteor.isServer) {
  Roles.allow({
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

  Roles.deny({
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
