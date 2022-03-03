import * as React from "react";
import MenuBar from "../components/MenuBar";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate,useLocation } from "react-router-dom";
import './SearchPageWait.css'

function SearchPageWait() {
  let history = useNavigate();
    let location = useLocation();
    let message = location.state;
    const handleclick = (e) => {
      history("/");
     
    };
  return (
    <div className="bigbox">
      <MenuBar name="查詢登記"/>
      <div className="content" >
      <Typography variant="body2" component="div">
      <div>{message}</div>
      </Typography>
      <div className="button">
      <Button variant="contained" fullWidth onClick={handleclick}>
        完成
      </Button></div></div>
    </div>
  );
}

export default SearchPageWait;
