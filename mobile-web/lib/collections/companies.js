// import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Companies = new Mongo.Collection('companies');
let schema = new SimpleSchema({
  committee: {
    type: String,
    label: "contact_name",
    max: 100
  },
  title: {
    type: String,
    label: "contact_title",
    max: 100
  },
  name: {
    type: String,
    label: "company_name",
    max: 100
  },
});
Companies.attachSchema(schema);

export default Companies;
