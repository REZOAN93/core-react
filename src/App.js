import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products=[
    {name:'Photoshop',price:'$69.20'},
    {name:'Illustrator',price:'$89.20'},
    {name:'reader',price:'$9.20'},
    {name:'foxit',price:'$19.20'},
    {name:'boss',price:'$19.20'},
    {name:'java',price:'$89.20'},
    {name:'react',price:'$9.20'},
    {name:'Jason',price:'$19.20'},
    {name:'Super',price:'$19.20'},
    {name:'boss',price:'$19.20'},
    {name:'java',price:'$89.20'},
    {name:'react',price:'$9.20'},
    {name:'Jason',price:'$19.20'},
    {name:'Super',price:'$19.20'}
  ]
  return (
    <div className="App">
      
      <Counter></Counter>
      <Counter1></Counter1>
      <Counte52></Counte52>
      <Users></Users>

      <Users2></Users2>
      {
        products.map(product=><Person product={product}></Person>)
}
    </div>
  );
}

function Person(props) {
  const styleapply={
    border:'1px solid black',
    backgroundColor:'cyan',
    height:'200px',
    width:'200px',
    margin:'5px',
    marginLeft:'10px'
  };
  const{name,price}=props.product;
  return(
    <div style={styleapply}>
    <h1>{name}</h1>
    <h2>{price}</h2>
    <button>Buy Now</button>
    </div>
  )
}



function Counter() {
  const[count,setCount]=useState(15);
  const handleIncrease=()=>{
    const newCount=count+1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}



function Counter1() {
  const[count,setCount]=useState(15);
  const handleIncrease=()=>setCount(count+1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Counte52() {
  const[count,setCount]=useState(15);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
      <button onMouseUp={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}


function Users() {
   const [users,setUsers]=useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
   },[])
  return(
    <div>/
      <h3>Dynamic Data:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Users2() {
  const [users,setusers]=useState([]);
  useState(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setusers(json))
  },[])
  return(
    <div>
      <h3>Dynamic shawon:{users.length}</h3>
      <ul>
        {users.map(user=><li>{user.title}</li>)}
      </ul>
    </div>
  )
}

export default App;
