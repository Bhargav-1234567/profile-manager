// src/components/ProfileForm.js
import React, { useState, useEffect } from "react";

const ProfileForm = ({ onSubmit, initialData }) => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    bio: "",
    gender: "",
    ...initialData, // Prefill data if editing
  });

  useEffect(() => {
    if (initialData) {
      setProfile(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ profile });
    onSubmit(profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={profile.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <textarea
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        placeholder="Bio"
      />

      <select name="gender" value={profile.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
