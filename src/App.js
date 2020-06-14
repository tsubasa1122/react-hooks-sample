import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("useEffect");
  });

  useEffect(() => {
    console.log("componentDidmount");
  }, []);

  useEffect(() => {
    console.log("name only callback");
  }, [name]);

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>+1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input type="text" value={state.name} onChange={e => setState({...state, name: e.target.value })}/>
    </>

  )
}

App.defaultProps = {
  name: '',
  price: 1000
};
export default App;
