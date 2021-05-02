const user = {
    name:'moti',
    age:28,
    location:'heifa'
  }
  
  function getlocation(location){
    if(location){
      return <p>location: {location}</p>
    }
  }
  const templatetwo = (
  <div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  {(user.age && user.age >= 18) && <p>age:{user.age}</p>}
  {getlocation(user.location)}
  </div>
  
  );

  //counter
  let count = 0;
const addone = () => {
  count++;
  rendercounterapp();
};

const minusone = () => {
  count--;
  rendercounterapp();
};

const reset = () => {
  count = 0;
  rendercounterapp();
};


const appRoot = document.getElementById('app');

const rendercounterapp = () => {
  const templatetwo = (
    <div>
    <h1>count: {count}</h1>
    <button onClick={addone}>+1</button>
    <button onClick={minusone}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
    );

    ReactDOM.render(templatetwo, appRoot)
};

rendercounterapp();