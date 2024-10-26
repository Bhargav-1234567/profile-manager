// src/views/ProfilePage.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProfile, editProfile } from "../models/profileModel";
import Modal from "../components/Modal";
import ProfileForm from "./ProfileForm";
import { useIsPresent, motion, AnimatePresence } from "framer-motion";
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

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="table-container ">
        <div>
          <div className="header-sec">
            <h1>Profiles</h1>
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="common-button info"
              onClick={handleAddClick}
            >
              Add Profile
            </motion.button>
          </div>
          <div className="list">
            <AnimatePresence>
              <div className="list-item header">
                <div>Name</div>
                <div>Age</div>
                <div>Gender</div>
                <div>Bio</div>
                <div>Actions</div>
              </div>
              {profiles.length === 0 && (
                <div className="no-data-found">No Profiles Found!</div>
              )}
              {profiles.map((profile) => (
                <motion.div
                  className="list-item"
                  key={profile.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="name">{profile.name}</div>
                  <div className="age">{profile.age}</div>
                  <div className="gender">{profile.gender}</div>
                  <div className="bio">{profile.bio}</div>
                  <div className="action">
                    <motion.button
                      className="common-button info"
                      whileTap={{ scale: 0.85 }}
                      onClick={() => handleEditClick(profile)}
                    >
                      Edit
                    </motion.button>
                    <motion.button
                      className="common-button danger"
                      whileTap={{ scale: 0.85 }}
                      onClick={() => handleDeleteClick(profile.id)}
                    >
                      Delete
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Modal show={isModalOpen} onClose={handleCloseModal}>
            <ProfileForm
              onSubmit={handleFormSubmit}
              initialData={editProfileData}
              onCancel={handleCancel}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
