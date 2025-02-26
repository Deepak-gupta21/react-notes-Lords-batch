import "./Display.css";
import { useState, useEffect } from "react";

export default function Display() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/users"); // Incorrect URL
        if (!response.ok)
          throw new Error(`HTTP Error! Status: ${response.status}`);

        let data = await response.json();
        setData(data?.users);
        console.log("data==>", data?.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="container">
        {loading && <p>.....loading</p>}
        {error && <p>error hai</p>}

        {data?.slice(0, 5).map((item) => (
          <div key={item.id}>
            <div className="div">{item.firstName}</div>
            <div className="div">{item.age}</div>
            <div className="div">
              <img src={item?.image} alt="img"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
