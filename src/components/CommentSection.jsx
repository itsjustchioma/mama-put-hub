import React, { useState } from 'react';
import Header from './Header';
import BackArrow from './BackClick/BackArrow';
import {  useNavigate } from "react-router-dom";


const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      name: 'John',
      comment: 'The dish was absolutely delicious! It had a perfect blend of flavors. Highly recommended!',
      rating: 5,
      date: '2023-05-22'
    },
    {
      name: 'Sarah',
      comment: 'I enjoyed the dish. It was well-prepared and had good presentation. The flavors were decent.',
      rating: 3,
      date: '2023-05-23'
    },
    {
      name: 'Michael',
      comment: 'The dish was average. Nothing extraordinary but not bad either. It could use some improvement.',
      rating: 2,
      date: '2023-05-24'
    },
    {
      name: 'Emily',
      comment: 'I absolutely loved the dish! The combination of ingredients was unique and it tasted amazing.',
      rating: 5,
      date: '2023-05-25'
    },
    {
      name: 'David',
      comment: 'The dish was disappointing. It lacked flavor and was poorly executed.',
      rating: 1,
      date: '2023-05-26'
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(1);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setNewRating(parseInt(event.target.value));
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim() === '') {
      alert('Please enter a comment.');
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const newDishComment = {
      name: 'Your Name',
      comment: newComment,
      rating: newRating,
      date: currentDate
    };

    setComments([...comments, newDishComment]);
    setNewComment('');
    setNewRating(1);
  };

  const handleReplySubmit = (index, event) => {
    event.preventDefault();

    if (newComment.trim() === '') {
      alert('Please enter a comment.');
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const replyComment = {
      name: 'Your Name',
      comment: newComment,
      rating: newRating,
      date: currentDate
    };

    const updatedComments = [...comments];
    updatedComments[index].replies = updatedComments[index].replies || [];
    updatedComments[index].replies.push(replyComment);

    setComments(updatedComments);
    setNewComment('');
    setNewRating(1);
  };
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mx-auto py-8 overflow-scroll h-[90vh]">
      <div className="w-5/6  mx-auto flex justify-between items-center">
        <BackArrow onClick={handleBackClick} />

        <Header />
      </div>

      <div className="w-5/6 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Comment </h1>

        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-100 h-[40vh] overflow-scroll p-4 mb-4 rounded"
          >
            <h3 className="text-lg font-semibold">{comment.name}</h3>
            <p className="mb-2">Rating: {comment.rating}</p>
            <p className="mb-4">{comment.comment}</p>
            <p className="text-gray-500">Date: {comment.date}</p>

            <form
              onSubmit={(event) => handleReplySubmit(index, event)}
              className="flex flex-wrap items-center mt-4"
            >
              <input
                type="text"
                required
                placeholder="Your reply"
                value={newComment}
                onChange={handleCommentChange}
                className="mr-2 p-2 border border-gray-300 rounded"
              />{" "}
              &nbsp;
              <input
                type="number"
                min="1"
                required
                max="5"
                value={newRating}
                onChange={handleRatingChange}
                className="p-2 border border-gray-300 rounded w-16"
              />
              <button
                type="submit"
                className="px-4 py-2 my-4 bg-pastel-blue text-white rounded md:ml-4"
              >
                Reply
              </button>
            </form>

            {comment.replies &&
              comment.replies.map((reply, replyIndex) => (
                <div
                  key={replyIndex}
                  className="bg-gray-200 p-2 mt-2 ml-4 rounded"
                >
                  <h4 className="text-md font-semibold">{reply.name}</h4>
                  <p className="mb-2">Rating: {reply.rating}</p>
                  <p className="mb-2">{reply.comment}</p>
                  <p className="text-gray-500">Date: {reply.date}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="w-5/6 mx-auto">
        <h2 className="text-xl font-semibold mt-8 mb-4">Post a Comment</h2>

        <form
          onSubmit={handleCommentSubmit}
          className="flex flex-wrap items-center"
        >
          <input
            type="text"
            required
            placeholder="Your comment"
            value={newComment}
            onChange={handleCommentChange}
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            min="1"
            max="5"
            required
            value={newRating}
            onChange={handleRatingChange}
            className="p-2 border border-gray-300 rounded w-16"
          />
          <button
            type="submit"
            className="px-4 py-2 my-4 bg-copper-orange text-white rounded md:ml-4"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
