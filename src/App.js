import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';


function App() {
  const [fetchData,setFetchData]=useState([]);
  const ref=useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(ref.current.value);

    //API url
    const endpointURL=`https://pixabay.com/api/?key=27877029-e66c5f7c23b92b873038a5fbb&q=${ref.current.value}&image_type=photo&pretty=true`;
    //APIを叩く
    fetch(endpointURL).then((res)=>{
      return res.json()
    }).then((data)=>{
      setFetchData(data.hits)
    })


  }

  return (
    <div className="container">
      <h2>画像検索</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='検索文字列' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
