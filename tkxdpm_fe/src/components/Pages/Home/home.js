import Slider from "../../Contents/Slider/slider";
import Category from "../../Contents/ExampleCard/examCard";
import Card from "../../Contents//Cards/card";
import Footer from "../../Footer/";
import Header from "../../Header";
import {useState,useEffect} from 'react'
import getDish from "../../../api/dishApi";

//

export default function Home({foodList}) {
    const [state, setstate] = useState('popular');
    return (
      <>

    <Header/>
     <Slider></Slider>
     <Category></Category>
     <Card foodList={foodList} state={state} keyword={''}></Card>
    

    <Footer/>
      </>
    
    );
  }
  