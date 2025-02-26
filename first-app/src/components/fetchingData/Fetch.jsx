import React, { useState, useEffect } from "react";

function FetchDataFunctional() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means it runs once, like `componentDidMount()`

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <div>
      <h2>Posts:</h2>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>
            <div className="title">
            {post.title}
            </div>
            <div className="body">
            {post.body}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataFunctional;
