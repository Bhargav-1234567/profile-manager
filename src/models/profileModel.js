// src/models/profileModel.js

export const ADD_PROFILE = "ADD_PROFILE";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const DELETE_PROFILE = "DELETE_PROFILE";

export const addProfile = (profile) => ({
  type: ADD_PROFILE,
  payload: profile,
});

export const editProfile = (id, updatedProfile) => ({
  type: EDIT_PROFILE,
  payload: { id, updatedProfile },
});

export const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  payload: id,
});
