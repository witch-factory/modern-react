import React, {useState} from 'react';
import {FaStar} from "react-icons/all";

const Star=({selected=false, onSelect=f=>f})=>(
  <FaStar color={selected?"red":"grey"} onClick={onSelect} />
);

const createArray=(length)=>[...Array(length)];

const StarRating=({totalStars=5})=> {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  )
}

function App(){
  return (
    <>
      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="grey" />
    </>
  )
}

export default App;