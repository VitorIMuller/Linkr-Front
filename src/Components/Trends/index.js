import ReactHashtag from "@mdnm/react-hashtag";
import { useState, useEffect } from "react";
import Loading from "../../Assets/Loading";
import useAuth from "../../Hooks/useAuth";
import api from "../../Services/api";
import { TrendingBox, Title, Separator } from "./style";

export default function Trends() {
  const { user, hashtagRedirect } = useAuth();
  const [ trending, setTrending ] = useState();
  const [ loading, setLoading ] = useState();
  
  function getTrending() {
    const limit = 10;
    setLoading(true)
    api.getTrendingHashtags(limit, user.token).then( res => {
      setTrending(res.data);
      setLoading(false);
    }).catch( error => {
      setLoading(false);
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
        ? <Loading />
        : trending?.length === 0
        ? <span>there are no trending hashtags from the last 24 hours</span>
        : trending?.map( el => (
            <ReactHashtag key={el.id} onHashtagClick={ value => hashtagRedirect(value)}>
              {`#${el.hashtag}`}
            </ReactHashtag>
          ))
      }
    </TrendingBox>
  )
}