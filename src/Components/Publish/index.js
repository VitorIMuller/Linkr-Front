import React, { useState } from 'react';
import { Post, PostForm, PostUserInfo, PostUrl, PostDescription, ButtonPublish} from './style.js';
import api from '../../Services/api.js';
import useAuth from "../../Hooks/useAuth";


export default function Publish(){

    const { user } = useAuth();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

  
    async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await api.createPost(formData);
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
                name="link"
                placeholder="http://..."
                type="url"
                value={formData.link || ''}
                onChange={handleInputChange}
                required
            />
            <PostDescription
                name="description"
                    placeholder="Awesome article about #javascript"
                    type="text"
                    value={formData.description || ''}
                    onChange={handleInputChange}
            />
            <ButtonPublish> 
                { loading ? 'Loading...' : 'Publish' } 
            </ButtonPublish>
            </PostForm>
        </Post>
    );
  

}