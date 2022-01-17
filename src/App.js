import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import HomePage from './pages/Homepage';
// import data from './data/repositories';

// const repositories = data.map(repo => {
//   return (
//     < ul>
//     <li>{repo.username}</li>
//     </ul>
//   )
// })

function App() {
  return <div className="App"><HomePage /></div>;
}

export default App;





