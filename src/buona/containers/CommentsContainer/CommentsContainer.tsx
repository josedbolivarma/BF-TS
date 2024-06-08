import { Comment, CommentSender } from "../../components"
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCommentsAsync } from '../../../redux/action/actionComments';
import { getAuth } from "firebase/auth";

import './CommentsContainer.scss';

export const CommentsContainer = ({ product }: any ) => {

  const [ user, setUser ] = useState<null | any>( null );
  const [ photoURL, setPhotoURL ] = useState("");

  const { comments } = useSelector(( store: any ) => store.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(listCommentsAsync());
    const auth = getAuth().currentUser;
    const avatar = user?.photoURL;
    setPhotoURL(avatar);
    setUser( auth );
  }, []);

  return (
    <div className='commentsContainer'>
      <div className='commentsContainer__container'>
        <div className='commentsContainer__questionsBox'>
          <h4 className='commentsContainer__questions'>
            { comments.filter(( item: any ) => item?.nombre == product?.nombre ).length }{" "}
            PREGUNTAS
          </h4>
        </div>
        <CommentSender product={ product } user={ user } />
        { comments
          .filter( ( item: any ) => item?.nombre == product?.nombre )
          .map(( item: any , index: number) => (
            <Comment
              key={index}
              username={item?.username}
              profilePic={item?.profilePic}
              message={item?.message}
              timestamp={item?.timestamp}
              product={ product }
            />
          ))}
      </div>
    </div>
  )
}
