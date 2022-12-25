import './App.css';
import image from './ball.jpg'
import imageTwo from './rabbit.jpg'
import { ListItem } from './ListItem';

function App() {
  return (
    
    <div className="app">

<div className="container">
<img src={ image } width="230px" height="280px" alt="NewYear"/>
</div>
<div className="container">
<h1>Do what you love!</h1>
</div>

<div className="container">
<ListItem />
</div>

<div className="container">
<img src={ imageTwo } width="230px" alt="rabbit"/>
</div>

    </div>
  );
}

export default App;
