// src/App.js
import React from "react";
import ProfileForm from "./views/ProfileForm";
import ProfileList from "./views/ProfileList";
import { useProfileViewModel } from "./viewmodels/useProfileViewModel";
import "./App.css";

function App() {
  const { profiles, handleAddProfile, handleEditProfile, handleDeleteProfile } =
    useProfileViewModel();

  return (
    <ProfileList
      profiles={profiles}
      onEdit={handleEditProfile}
      onDelete={handleDeleteProfile}
    />
  );
}

export default App;
