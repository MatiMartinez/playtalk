import React, { useContext } from "react";
import Layout from "../components/layout/Layout";

import { FirebaseContext } from "../firebase/index";

export default function profile() {
  const { user } = useContext(FirebaseContext);
  return <Layout>{user ? user.displayName : "No user"}</Layout>;
}
