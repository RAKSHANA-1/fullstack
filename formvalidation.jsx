import React, { useState } from "react";

function UserProfileEditProper() {
  // EXISTING USER DATA (already stored)
  const [profile, setProfile] = useState({
    username: "John_Doe",
    email: "john@gmail.com",
    age: 22,
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    // VALIDATION
    if (!profile.username || !profile.email || !profile.age) {
      alert("❌ All fields are required!");
      return;
    }

    if (!profile.email.includes("@")) {
      alert("❌ Invalid Email Address!");
      return;
    }

    if (profile.age <= 0) {
      alert("❌ Age must be greater than 0!");
      return;
    }

    alert(
      "✅ Profile Updated Successfully!\n\n" +
        "Username: " + profile.username + "\n" +
        "Email: " + profile.email + "\n" +
        "Age: " + profile.age
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "470px",
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          👤 Edit Profile
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            opacity: 0.9,
            marginBottom: "30px",
          }}
        >
          Update your existing profile information
        </p>

        {/* USERNAME */}
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "15px",
            fontSize: "15px",
            outline: "none",
          }}
        />

        {/* EMAIL */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "15px",
            fontSize: "15px",
            outline: "none",
          }}
        />

        {/* AGE */}
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "25px",
            fontSize: "15px",
            outline: "none",
          }}
        />

        <button
          onClick={handleUpdate}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "30px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#203a43",
            background: "linear-gradient(90deg, #ffffff, #dfe9f3)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Update Profile 🔄
        </button>
      </div>
    </div>
  );
}

export default UserProfileEditProper;
