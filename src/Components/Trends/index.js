import ReactHashtag from "@mdnm/react-hashtag";
import { useState, useEffect } from "react";
import Loading from "../../Assets/Loading";
import useAuth from "../../Hooks/useAuth";
import api from "../../Services/api";
import { TrendingBox, Title, Separator } from "./style";

export default function Trends() {
  const { user, hashtagRedirect } = useAuth();
  const [trending, setTrending] = useState();
  const [loading, setLoading] = useState();
  const [intervalKey, setIntervalKey] = useState();

  function getTrending() {
    const limit = 10;
    setLoading(true);
    intervalKey && clearInterval(intervalKey);
    api.getTrendingHashtags(limit, user.token).then(res => {
      setTrending(res.data);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.log(error);
    });
  }

  useEffect(() => {
    getTrending();
    schedulesHashtagRerender();
  }, []);

  function schedulesHashtagRerender() {
    const interval = setInterval(getTrending, 10 * 60000);
    setIntervalKey(interval);
  }

  return (
    <TrendingBox>
      <Title>trending</Title>
      <Separator />
      {
        loading
          ? <Loading />
          : trending?.length === 0
            ? <span>there are no trending hashtags from the last 24 hours</span>
            : trending?.map(el => (
              <ReactHashtag key={el.hashtag} onHashtagClick={value => hashtagRedirect(value)}>
                {`#${el.hashtag}`}
              </ReactHashtag>
            ))
      }
    </TrendingBox>
  )
}