// src/viewmodels/useProfileViewModel.js
import { useDispatch, useSelector } from "react-redux";
import { addProfile, editProfile, deleteProfile } from "../models/profileModel";
import { useCallback } from "react";

export const useProfileViewModel = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profiles);

  const handleAddProfile = useCallback(
    (profile) => {
      dispatch(addProfile(profile));
    },
    [dispatch]
  );

  const handleEditProfile = useCallback(
    (id, updatedProfile) => {
      dispatch(editProfile(id, updatedProfile));
    },
    [dispatch]
  );

  const handleDeleteProfile = useCallback(
    (id) => {
      dispatch(deleteProfile(id));
    },
    [dispatch]
  );

  return {
    profiles,
    handleAddProfile,
    handleEditProfile,
    handleDeleteProfile,
  };
};
