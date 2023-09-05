import React , { useRef }from "react";
import Compose from "../layout/Compose";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Home = () => {
   const editRef = useRef("");
   function check() {
    console.log(editRef.current);
   }
   return <div>welcome to your mail box</div>
};

export default Home;