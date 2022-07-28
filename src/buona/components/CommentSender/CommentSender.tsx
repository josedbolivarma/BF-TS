import { BsFillPersonFill } from 'react-icons/bs';
import { addCommentAsync } from '../../../redux/action/actionComments';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './CommentSender.scss';

export const CommentSender = ( {user, product}: any ) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
  
    const date = new Date();
  
    const handleSubmit = ( e: any ) => {
      e.preventDefault();
      
      dispatch<any>( addCommentAsync({
        message: input,
        timestamp: date,
        profilePic: user?.photoURL,
        username: user?.email,
        nombre: product?.nombre
      }));

      setInput('');
    }
  
  return (
    <div className='commentSender'>
      <div className='commentSender__top'>
        {/* <Avatar src={user?.photoURL}/> */}
        <BsFillPersonFill />
        <form className='commentSender__form' onSubmit={ handleSubmit }>
          <input
          value={ input }
          onChange={(e) => setInput( e.target.value )}
          className='commentSender__input'
          placeholder={'Déjanos tu opinión...'}
          >
          </input>

          <button className='commentSender__inputSubmit' type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
