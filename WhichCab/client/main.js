

Meteor.startup(() => {
  console.log('Client started.');

  DocHead.setTitle("WhichCab");
  const metaInfo = {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
  };
  DocHead.addMeta(metaInfo);
});
