import firebase from "firebase/app";
import { useForkRef } from "@material-ui/core";

export const getCurrentUser = () => {
  const user = firebase.auth().currentUser;
  if (!user) return null;
  return {
    id: user.uid,
  };
};
