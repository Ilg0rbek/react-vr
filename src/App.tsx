import React from 'react';
import './App.css';

const Vr = React.lazy(() => import('./pages/Vr'));


const App = () => {
  return (
    <div>
      <Vr/>
    </div>
  )
}

export default App;
