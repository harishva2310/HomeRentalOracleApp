import logo from './logo.svg';
import './App.css';
import ToDoRowItem from './components/ToDoRowItem';
function App() {
  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>
          Your To-dos
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <ToDoRowItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
