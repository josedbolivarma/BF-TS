import { BsFillPersonFill } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { MdComment } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';

import './Comment.scss';

export const Comment = ({profilePic, image, username, timestamp, message, product}: any ) => {
  return (
    <div className='comment'>
    <div className='comment__boxFlex'>
        {/* <Avatar className='comment__avatar' src={ profilePic } alt='Avatar'/> */}
        <BsFillPersonFill className='comment__avatar' />

        <p>{ username }</p>
    </div>

    <div className='comment__box'>
        <p>
            { message }
        </p>
    </div>

    <div className='comment__box'>
        <p>
        { product?.nombre }
        </p>
        <p>
            A 45 personas les resultó útil
        </p>
        <p>
        Timestamp...
        </p>
        <div className='comment__options'>
            <div className='comment__option'>
                <AiTwotoneLike />
                <p>Me gusta</p>
            </div>
            <div className='comment__option'>
                <MdComment />
                <p>Comentar</p>
            </div>
            <div className='comment__option'>
                <IoMdSend />
                <p>Compartir</p>
            </div>
        </div>
    </div>

</div>
  )
}
