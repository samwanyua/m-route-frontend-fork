import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdReviews } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Reviews = () => {
  const [newReview, setNewReview] = useState({ score: 0, comment: "", merchandiser: { full_name: "" }, activity: { name: "" } });
  const [reviews, setReviews] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleStarClick = (value) => {
    setNewReview({ ...newReview, score: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ score: 0, comment: "", merchandiser: { full_name: "" }, activity: { name: "" } });
  };

  const reviewsData = [
    {
      id: 1,
      score: 5,
      comment: "John Ouma's performance in managing sales orders has been exceptional. The new tracking system has significantly improved his efficiency, allowing him to easily log visits to different outlets and provide accurate reports to HQ.",
      merchandiser: { full_name: "John Ouma" },
      activity: { name: "Sales orders" }
    },
    {
      id: 2,
      score: 4.5,
      comment: "Alice Kimathi has demonstrated great competence in managing product stocks. She has been utilizing the tracking system effectively, planning her routes efficiently, and ensuring thorough coverage of all required outlets.",
      merchandiser: { full_name: "Alice Kimathi" },
      activity: { name: "Product stocks" }
    },
    {
      id: 3,
      score: 4,
      comment: "David Kinyanjui's performance in handling return of goods has improved significantly with the implementation of the new tracking system. The system provides valuable insights into daily activities, helping him optimize routes for maximum efficiency.",
      merchandiser: { full_name: "David Kinyanjui" },
      activity: { name: "Return of goods" }
    },
    {
      id: 4,
      score: 4.2,
      comment: "Sarah Nduta has shown commendable skills in managing competitor activities. Her utilization of the tracking system has greatly enhanced her ability to monitor and respond to competitor movements effectively.",
      merchandiser: { full_name: "Sarah Nduta" },
      activity: { name: "Competitor activities" }
    },
    {
      id: 5,
      score: 3.8,
      comment: "Michael Otieno's performance in gathering product insights has been satisfactory. With the new tracking system, he has improved his efficiency in collecting and reporting data from various outlets.",
      merchandiser: { full_name: "Michael Otieno" },
      activity: { name: "Product insights" }
    },
    {
      id: 6,
      score: 4.7,
      comment: "Grace Wangari has excelled in managing sales orders. Her meticulous planning and execution, aided by the tracking system, have resulted in accurate and timely order processing.",
      merchandiser: { full_name: "Grace Wangari" },
      activity: { name: "Sales orders" }
    },
    {
      id: 7,
      score: 3.5,
      comment: "Peter Kamau's performance in handling return of goods needs improvement. While the tracking system has provided insights, there are areas where Peter can enhance his efficiency and accuracy.",
      merchandiser: { full_name: "Peter Kamau" },
      activity: { name: "Return of goods" }
    },
    {
      id: 8,
      score: 4.0,
      comment: "Mary Wanjiku has shown dedication in managing product stocks. The tracking system has helped her maintain optimal stock levels across outlets, contributing to improved sales performance.",
      merchandiser: { full_name: "Mary Wanjiku" },
      activity: { name: "Product stocks" }
    },
    {
      id: 9,
      score: 4.5,
      comment: "Joseph Ngugi has demonstrated proficiency in managing competitor activities. With the tracking system, he has been able to identify and respond to competitor strategies effectively.",
      merchandiser: { full_name: "Joseph Ngugi" },
      activity: { name: "Competitor activities" }
    },
    {
      id: 10,
      score: 3.9,
      comment: "Lucy Akinyi has shown improvement in managing sales orders. While there have been challenges, her utilization of the tracking system has enhanced her efficiency and accuracy.",
      merchandiser: { full_name: "Lucy Akinyi" },
      activity: { name: "Sales orders" }
    },
  ];
  
  
  return (
    <div className="mt-8 mb-10">
      <h2 className="text-2xl font-bold mb-1 ml-12 text-blue-600"><MdReviews className="inline mr-4"/>Reviews</h2>
      <div className="grid grid-cols-2 p-12 gap-4 space-y-6">
        {reviewsData.map((review) => (
          <div key={review.id} className="bg-white rounded-md shadow-md p-4">
            <p className="text-fourth ">
              <IoMdContact className="inline mr-4 text-4xl"/>{review.merchandiser ? review.merchandiser.full_name : 'Unknown Merchandiser'}
            </p>
            <p className="text-fourth text-md font-bold mt-2">
              {review.activity ? review.activity.name : 'Activity Name'}
            </p>
            <p className="text-fourth italic text-sm mt-2 mb-2">"{review.comment}"</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                if (review.score >= starValue) {
                  return <FaStar key={index} className="text-fourth" />;
                } else if (review.score + 0.5 === starValue) {
                  return <FaStarHalfAlt key={index} className="text-yellow-400" />;
                } else {
                  return <FaStar key={index} className="text-gray-300" />;
                }
              })}
              <span className="text-sm text-fourth font-medium ml-1">
                ({review.score}/5)
              </span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-md p-12 w-1/2 ml-12">
        <h3 className="text-lg font-bold mb-2">Review a merchandiser</h3>
        <input type="text" name="merchandiser" value={newReview.merchandiser.full_name} onChange={handleInputChange} placeholder="Enter merchandiser's name" className="border rounded-md p-2 mb-2 block w-full" />
        <input type="text" name="activity" value={newReview.activity.name} onChange={handleInputChange} placeholder="Enter Merchandiser's activity details ex. sales orders" className="border rounded-md p-2 mb-2 block w-full" />
        <textarea name="comment" value={newReview.comment} onChange={handleInputChange} placeholder="Comment(s)" rows="4" className="border rounded-md p-2 mb-2 block w-full"></textarea>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return <FaStar key={index} className="text-gray-300" onClick={() => handleStarClick(starValue)} />;
          })}
          <span className="text-sm text-fourth font-medium ml-1">
            ({newReview.score}/5)
          </span>
        </div>
        <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;
