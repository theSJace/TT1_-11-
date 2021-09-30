import MeetupList from "../meetups/MeetupList";
import { useState, useEffect } from "react";
import axios from 'axios';



// const productsHandler = (productData) => {
//   axios.get('localhost:8001/products')
//   .then(function (response) {
//   console.log(response);
// })
//   .catch(function (error) {
//   console.log(error);
// });
// console.log(productData);

// productsHanddler()


// //Fetch Tasks
// const fetchTasks = async() => {
//   //fetch returns a promise so want await that promise
//   const res = await fetch('http://localhost:5000/tasks')
//   const data = await res.json()
//   return data
// }

const AllMeetupsPage = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    async function fetchData(){
    const req = await axios.get('http://localhost:8001/products')
    console.log(req.data)
    setProducts(req.data)
  }
  fetchData();
  }, [])

  return (
    <section>
      <h1>Products:</h1>
      {/* <MeetupList onLogin={response}/> */}
      <MeetupList meetups={products}/>
    </section>
  );
};

export default AllMeetupsPage;
