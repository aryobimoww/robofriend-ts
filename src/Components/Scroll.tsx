import React from 'react';
type Props = {
    children?: JSX.Element
}
const Scroll = (props:Props) => {
  console.log('Scroll');
  return (
    <div style={{ overflow: 'scroll', border: '4px solid lightGray', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;