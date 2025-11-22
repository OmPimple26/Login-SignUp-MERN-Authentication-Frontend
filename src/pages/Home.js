// import React, { use } from 'react'
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';

// const Home = () => {
//   const [loggedInUser, setloggedInUser] = useState('');
//   const [products, setProducts] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     setloggedInUser(localStorage.getItem("loggedInUser"));
//   });

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loggedInUser");
//     handleSuccess("Logged out successfully");
//     setTimeout( () => {
//       navigate("/login");
//     }, 1000);
//   }

//   const fetchProducts = async () => {
//     try{
//       const url = "http://localhost:8080/products";
//       const headers = {
//         headers: {
//           "Authorization": localStorage.getItem("token")
//         }
//       }
//       const response = await fetch(url, headers);
//       const result = await response.json();
//       console.log(result);
//       setProducts(result);
//     }catch(err){
//       handleError(err);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const myStyles = {
//     color: 'blue',
//     fontSize: '16px',
//     backgroundColor: '#e7f307ff',
//     padding: '10px'
//   };

//   return (
//     <div>
//       <h1>Welcome {loggedInUser}</h1>
//       <button onClick={handleLogout} style={myStyles}>Logout</button>
//       <div>
//         {
//           products && products?.map((item, index) => (
//             <ul key={index}>
//               <span>{item.name}: {item.price}</span>
//             </ul>
//           ))
//         }
//       </div>
//       <ToastContainer/>
//     </div>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged out successfully");

    setTimeout(() => navigate("/login"), 1000);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://login-signup-mern-authentication-backend.onrender.com/products", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });

      const result = await response.json();
      setProducts(result);
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef2ff",
        padding: "0",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          width: "100%",
          background: "#4f46e5",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
        }}
      >
        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "600" }}>
          🛍️ ShopZone
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Username Avatar */}
          <div
            style={{
              background: "white",
              color: "#4f46e5",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "18px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
            }}
          >
            {loggedInUser?.[0]?.toUpperCase()}
          </div>

          <span style={{ fontSize: "18px", fontWeight: "500" }}>
            {loggedInUser}
          </span>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
              fontSize: "14px"
            }}
            onMouseOver={(e) => (e.target.style.background = "#dc2626")}
            onMouseOut={(e) => (e.target.style.background = "#ef4444")}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div style={{ padding: "40px" }}>
        <h2 style={{ marginBottom: "25px", color: "#312e81", fontSize: "28px" }}>
          🛒 Available Products
        </h2>

        {products.length === 0 ? (
          <p style={{ color: "#6b7280", fontSize: "16px" }}>No products found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {products.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: "1px solid #e5e7eb",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    color: "#111827",
                    fontSize: "20px",
                    fontWeight: "600"
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#4f46e5",
                    fontWeight: "bold",
                    fontSize: "18px"
                  }}
                >
                  ₹ {item.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
