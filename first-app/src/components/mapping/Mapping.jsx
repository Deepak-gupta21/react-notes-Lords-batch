import "./Mapping.css";

export default function Mapping() {
  const data = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Amit Sharma",
      city: "Delhi",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Priya Singh",
      city: "Mumbai",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Rohan Verma",
      city: "Bangalore",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sneha Kapoor",
      city: "Kolkata",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Vikram Das",
      city: "Hyderabad",
    },
  ];

  const newData = data.filter((item) => item.id % 2 === 0);

  return (
    <div className="container">
      {newData.map((item) => {
        return (
          <div className="main" key={item.id}>
            <div className="div">
              <h1>i{item.id}</h1>
              <img src={item.image} alt="img"></img>
            </div>
            <div className="div">
              <h1>{item.name}</h1>
              <p>{item.city}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
