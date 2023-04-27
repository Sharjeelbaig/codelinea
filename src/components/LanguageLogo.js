import React from 'react'
import { useSelector } from 'react-redux'
import python from "programming-languages-logos/src/python/python.svg";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import cpp from "programming-languages-logos/src/cpp/cpp.svg";
import csharp from "programming-languages-logos/src/csharp/csharp.svg";
import java from "programming-languages-logos/src/java/java.svg";
import css from "programming-languages-logos/src/css/css.svg";
import html from "programming-languages-logos/src/html/html.svg";

export default function LanguageLogo() {
    const language = useSelector(state => state.OutputReducer.language)
  return (
     language === 'python' ?
    <img
    height='50'
   src={python} />
     : language === 'javascript' ?
     <img
    height='50'
   src={javascript} />
   : language === 'c#' ?
   <img
  height='50'
 src={csharp} />
 : language === 'c++' ?
 <img
height='50'
src={cpp} />
: language === 'html' ?
<img
height='50'
src={html} />
: language === 'css' ?
<img
height='50'
src={css} />
: language === 'java' ?
<img
height='50'
src={java} /> 
:
<></>
  )
}
