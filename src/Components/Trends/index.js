import ReactHashtag from "@mdnm/react-hashtag";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import { TrendingBox, Title, Separator } from "./style";

export default function Trends() {
  const [ trending, setTrending ] = useState();
  const [ loading, setLoading ] = useState(true);
  
  function getTrending() {
    const limit = 10;
    api.getTrendingHashtags(limit).then( res => {
      setTrending(res.data);
      setLoading(!loading);
    }).catch( error => {
      setLoading(!loading);
      console.log(error);
    });
  }

  useEffect(getTrending, []);

  setInterval(getTrending, 10*60000); // gets trending hashtags on 10 minutes intervals

  return(
    <TrendingBox>
      <Title>trending</Title>
      <Separator/>
      {
        loading 
        ? "trending hashtags are loading"
        : trending.length === 0
        ? "there are no trending hashtag from the last 24 hours"
        : trending?.map( hashtag => (
            <ReactHashtag>{`#${hashtag}`}</ReactHashtag>
          ))
      }
    </TrendingBox>
  )
}