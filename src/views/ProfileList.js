// src/views/ProfilePage.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProfile, editProfile } from "../models/profileModel";
import Modal from "../components/Modal";
import ProfileForm from "./ProfileForm";
import { useProfileViewModel } from "../viewmodels/useProfileViewModel";

const ProfileList = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profiles);
  const { handleDeleteProfile } = useProfileViewModel();

  const [isModalOpen, setModalOpen] = useState(false);
  const [editProfileData, setEditProfileData] = useState(null);

  const handleAddClick = () => {
    setEditProfileData(null); // Reset for add
    setModalOpen(true);
  };

  const handleEditClick = (profile) => {
    setEditProfileData(profile);
    setModalOpen(true);
  };
  const handleDeleteClick = (id) => {
    handleDeleteProfile(id);
  };
  const handleCloseModal = () => setModalOpen(false);

  const handleFormSubmit = (profile) => {
    if (editProfileData) {
      dispatch(editProfile(editProfileData.id, profile));
    } else {
      dispatch(addProfile({ ...profile, id: Date.now() })); // Add unique id
    }
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="table-container">
        <div>
          <div className="header-sec">
            <h1>Manage Profiles</h1>
            <button className="button-primary" onClick={handleAddClick}>
              Add Profile
            </button>
          </div>
          <table className="list">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>bio</th>
              <th>bio</th>
            </tr>
            {profiles.map((profile) => (
              <tr className="list-item" key={profile.id}>
                <td>
                  <div>{profile.name}</div>
                </td>
                <td>
                  {" "}
                  <div>{profile.age}</div>
                </td>
                <td>
                  <div className="bio">{profile.bio}</div>{" "}
                </td>
                <td>
                  <button onClick={() => handleEditClick(profile)}>Edit</button>
                  <button onClick={() => handleDeleteClick(profile.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <ProfileForm
          onSubmit={handleFormSubmit}
          initialData={editProfileData}
        />
      </Modal>
    </div>
  );
};

export default ProfileList;
