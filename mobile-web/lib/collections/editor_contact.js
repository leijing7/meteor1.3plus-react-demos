import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const EditorContact = new Mongo.Collection('editor_contact');
let schema = new SimpleSchema({
  name: {
    type: String,
    label: "name",
    max: 100
  },
  phone: {
    type: String,
    label: "phone",
    optional: true,
    max: 100
  },
  mobile: {
    type: String,
    label: "mobile",
    optional: true,
    max: 100
  },
  wechat: {
    type: String,
    label: "wechat",
    optional: true,
    max: 100
  },
  email: {
    type: String,
    label: "email",
    optional: true,
    max: 100
  },
  address: {
    type: String,
    label: "address",
    optional: true,
    max: 200
  },
  comment: {
    type: String,
    label: "comment",
    optional: true,
    max: 600
  },
  createdAt: {
    type: Date,
    label: "created date"
  },
  updatedAt: {
    type: Date,
    label: "updated date"
  }
});
EditorContact.attachSchema(schema);

export default EditorContact;
