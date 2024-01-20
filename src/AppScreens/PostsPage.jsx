import React, { useEffect, useState } from "react";
import FeedCard from "../components/FeedCard";
import UsersDataService from "../services/users.services";

function PostsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const userData = await UsersDataService.getUser();
      const updatedData = userData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(updatedData[0]?.posts);
      // console.log(updatedData[0]);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      {data.map((i, e) => (
        <div key={e}>
          <FeedCard tweet={i} />
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
