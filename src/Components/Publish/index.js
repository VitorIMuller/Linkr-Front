import React, { useState } from 'react';
import { Post, PostForm, PostUserInfo, PostUrl, PostDescription, ButtonPublish} from './style.js';
import api from '../../Services/api.js';
import useAuth from "../../Hooks/useAuth";


export default function Publish(){

    const { user } = useAuth();
    const [formData, setFormData] = useState({url: '', userMessage: ''});
    const [loading, setLoading] = useState(false);

  
    async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await api.createPost(formData, user.token);
        console.log('response: ', response);
        setLoading(false);
        setFormData({});
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  
    function handleInputChange(event) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  
    return (
        <Post>
            <PostUserInfo>
                <img src={user.image} alt="avatar" />
            </PostUserInfo>
            <PostForm  onSubmit={handleSubmit} >
            <h2>What are you going to share today?</h2>
            <PostUrl
                name="url"
                placeholder="http://..."
                type="url"
                value={formData.url}
                onChange={handleInputChange}
                required
            />
            <PostDescription
                name="userMessage"
                    placeholder="Awesome article about #javascript"
                    type="text"
                    value={formData.userMessage}
                    onChange={handleInputChange}
            />
            <ButtonPublish> 
                { loading ? 'Loading...' : 'Publish' } 
            </ButtonPublish>
            </PostForm>
        </Post>
    );
  

}