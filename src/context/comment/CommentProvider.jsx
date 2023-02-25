import { useState } from 'react';
import clientAxios from '../../config/axios';
import CommentContext from './CommentContext';

const CommentProvider = ({ children }) => {

    const initialValues = {
        comments: [
            {
                description: "First comment",
                isprivate: false,
                productId: 1,
                userSend: {
                    name: "Pedro",
                    userId: 1
                }
            },
            {
                description: "Second comment",
                isprivate: false,
                productId: 1,
                userSend: {
                    name: "Jorge",
                    userId: 1
                }
            }
        ],
        currentComment: {}
    }
    const [values, setValues] = useState(initialValues);

    const getComments = async () => {
        try {
            const res = await clientAxios.get('/comment');
            res && setValues({ ...values, comments: res.data });
        } catch (error) {
            throw error;
        }
    }

    const getComment = async commentId => {
        try {
            const res = await clientAxios.get(`/comment/${commentId}`);
            res && setValues({ ...values, currentComment: res.data });
        } catch (error) {
            throw error;
        }
    }

    const getCommentsByProdId = async prodId => {
        try {
            const res = await clientAxios.get('/comment');
            if (res.status === 201) {
                setValues({
                    ...values,
                    comments: res.data.filter(comment => comment.fkProduct === prodId)
                });
            }
        } catch (error) {
            throw error;
        }
    }

    const createComment = async comment => {
        try {
            const res = await clientAxios.post('/comment', comment);
            res && setValues({ ...values, comments: [...values.comments, res.data.comment] })
        } catch (error) {
            throw error;
        }
    }

    const updateComment = async comment => {
        try {
            const res = await clientAxios.put(`/comment/${comment._id}`, comment);
            res && getComments();
        } catch (error) {
            throw error;
        }
    }

    const deleteComment = async commentId => {
        try {
            const res = await clientAxios.delete(`/comment/${commentId}`);
            res && getComments();
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