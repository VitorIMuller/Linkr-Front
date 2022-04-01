import { Follow } from './style';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../Services/api';
import LoadingFind from '../../Assets/LoadingFind';
import Swal from 'sweetalert2';

export default function FollowButton({ children }) {
    const { user } = useAuth();
    const { userId } = useParams();
    const [ followStatus, setFollowStatus ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);

  function getFollowStatus() {
    setIsLoading(true);
    if (user?.id == userId) return setFollowStatus(false);

    api.getFollowStatus(userId, user?.token)
      .then( res => {
        setFollowStatus(res.data);
        setIsLoading(false);
      })
      .catch( err => console.log(err))
  }  

  function handleFollow() {
    setIsLoading(true);

    api.handleFollow(userId, user?.token)
      .then(()=> {
        setFollowStatus(!followStatus);
        setIsLoading(false);
      })
      .catch( err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          width: 400,
          text: 'não foi possível executar a operação'
        })
      })
  }
  
  useEffect(getFollowStatus, []);

  return (
    <Follow 
      showIt = { user?.id == userId } 
      disabled = { isLoading }
      follows = { followStatus }
      onClick = { ()=> handleFollow() } 
    >
      { 
        isLoading 
          ? <LoadingFind height={15} width={15}/>
          : followStatus 
          ? 'unfollow' 
          : 'follow'}
      { children }
    </Follow>
  )
}