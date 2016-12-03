import React from 'react';
import UserInfo from '../containers/user_info';
import { composeWithTracker } from 'react-komposer';



//////////////////////demo1，simple onData
// Create a component to display Time
const Time = ({time}) => (<div>{time}</div>);

const composerFunction = (props, onData) => {
	const handler = setInterval(() => {
  	const time = new Date().toString();
    onData(null, {time});
  }, 1000);

  const cleanup = () => clearInterval(handler);
  return cleanup;
};
const Clock1 = composeWithTracker(composerFunction)(Time);
///////////

//demo2 Create the composer function and tell how to fetch data and handle error
const onPropsChange = (props, onData) => {
  // oops some error.
  onData(new Error('有错误啊。。。。。'));

  setTimeout(() => {
    const handler = setInterval(() => {
      const time = new Date().toString();
      onData(null, {time});
    }, 1000);

    const cleanup = () => clearInterval(handler);
    return cleanup;
  }, 5000);
};

const Clock2 = composeWithTracker(onPropsChange)(Time);
////////////////

/////demo3
const Time3 = ({time}) => (
	<div>
  	<b>Time: </b> {time}
  </div>
);
// Create the composer function and tell how to fetch data
const composerFunction3 = (props, onData) => {
  if (props.alarm) {
    const error = new Error('Alarm is not implemeted yet!');
  	return onData(error);
  }

	const now = () => props.timestamp ? Date.now() : new Date().toString()

	const handler = setInterval(() => {
    const time = now();
    onData(null, {time});
  }, 100);

  const cleanup = () => clearInterval(handler);
  return cleanup;
};

// Custom Error component
const ShowError = ({error}) => (
	<div style={{color: 'red', fontWeight: 800}}>
  	Error: {error.message}
  </div>
);

// Compose the container
const Clock3 = composeWithTracker(composerFunction3)(Time3, null, ShowError);
//////////////

const BlogLayout = ({content}) => (
  <div>
    <div className="navigation">
    <a href="/">主页</a>
    </div>
    <h1> 我的博客 </h1>
    <UserInfo />
    {content}


    <hr style={{padding: 30}}/>
    onData demo1:
    <Clock1 />
    <hr style={{padding: 30}}/>
    error demo2:
    <Clock2 />
    <hr style={{padding: 30}}/>
    props demo3:
    <Clock3 />
    <Clock3 timestamp={true} />
    <Clock3 alarm={new Date('2016 Oct 10')} />
  </div>
);

export default BlogLayout;
