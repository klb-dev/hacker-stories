// const title = 'React';
// const welcome = {
//   greeting: 'Hey',
//   title: 'React'
// };

function getTitle(title) {
  return title;
}
function App() {
 
  return (
    <div>
        <h1>Hello { getTitle('React') }!</h1>

        <label htmlFor='search'>Search
          <input id='search' type='text' />
        </label>
        
    </div>
  );
}

export default App;
