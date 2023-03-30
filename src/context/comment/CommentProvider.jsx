import { useState, useContext } from 'react';
import clientAxios from '../../config/axios';
import CommentContext from './CommentContext';
import ImageContext from '../image/ImageContext';

const CommentProvider = ({ children }) => {

    const { getUserProfileImage, userProfImg } = useContext(ImageContext);

    const initialValues = {
        comments: [],
        currentComment: {}
    }
    const [values, setValues] = useState(initialValues);

    const getComments = async () => {
        try {
            const res = await clientAxios.get('/comment');
            res && setValues({ ...values, comments: res.data.comments });
        } catch (error) {
            throw error;
        }
    }

    const getComment = async commentId => {
        try {
            const res = await clientAxios.get(`/comment/${commentId}`);
            res && setValues({ ...values, currentComment: res.data.comment });
        } catch (error) {
            throw error;
        }
    }

    const getCommentsByProdId = async productId => {
        try {
            const res = await clientAxios.get('/comment', { params: { productId: productId } });
            if (res.status === 200) {
                // Adding userImg in witch comment
                if (res.data.comments && res.data.comments.length > 0) {
                    res.data.comments.map(comment => {
                        getUserProfileImage(comment.userSend.userId);
                        comment.userSend.userProfImg = userProfImg;
                    });
                    // Setting comments with all data
                    setValues({ ...values, comments: res.data.comments });
                }
            }
        } catch (error) {
            throw error;
        }
    }

    const createComment = async comment => {
        try {
            const res = await clientAxios.post('/comment', comment);
            res.status === 201 && getCommentsByProdId(comment.productId);
        } catch (error) {
            throw error;
        }
    }

    const updateComment = async comment => {
        try {
            const res = await clientAxios.put(`/comment/${comment._id}`, comment);
            res.status === 200 && getCommentsByProdId(comment.productId);
        } catch (error) {
            throw error;
        }
    }

    const deleteComment = async comment => {
        try {
            const res = await clientAxios.delete(`/comment/${comment._id}`);
            res.status === 200 && getCommentsByProdId(comment.productId);
        } catch (error) {
            throw error;
        }
    }

    return (
        <CommentContext.Provider value={{
            ...values,
            getComments,
            getComment,
            getCommentsByProdId,
            createComment,
            updateComment,
            deleteComment
        }}>
            {children}
        </CommentContext.Provider>
    );
};

export default CommentProvider;