import Card from "../../Contents/Cards/card";
import SelectCard from "../../Contents/ExampleCard/SelectCard";
import Footer from "../../Footer";
import Header from "../../Header";
import {useState,useEffect} from 'react';


let cate ='all';
let foodList=[];
export default function Menu({foodList,cateList}) {

    const [state, setState] = useState(cate);

    return (
      <>
        <Header></Header>
        <SelectCard cateList={cateList} state={state} setState={setState}/>
        <Card foodList={foodList} state={state} setState={setState} keyword={''}/>
        <Footer/>
      </>
    )
}
  
