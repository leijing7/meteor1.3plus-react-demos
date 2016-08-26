import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Notice = new Mongo.Collection('notice');
let schema = new SimpleSchema({
  text: {
    type: String,
    label: "notice text",
    max: 4000
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
Notice.attachSchema(schema);

export default Notice;
