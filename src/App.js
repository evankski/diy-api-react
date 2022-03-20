import logo from './logo.svg';
import './App.css';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function App() {
  const [blog, setBlog] = useState([])
  const { id } = useParams()

  // const getData = () => {
  //   axios.get(`${process.env.REACT_APP_SERVER_URL}/blog`)
  //     .then(response => {
  //       console.log(response.data)
  //       setBlog(response.data)
  //     })
  //     .catch(console.log)
  // }

  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL +'/blog')
    axios.get(process.env.REACT_APP_SERVER_URL + '/blog')
    .then(response => {
        console.log(response.data)
        setBlog(response.data)
    })
    .catch(err => {
        console.log(err)
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            exact path='/'
            element={<Home />}
          />
          <Route 
            path="/blog"
            element={<Blog blogs={blog}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
