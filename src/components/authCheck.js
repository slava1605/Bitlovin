import React, { useContext } from "react";
// import { AuthContext } from "../helpers/context/authContext";
// import Login from "../pages/login";

/**
 * AuthCheck wraps children and validates the user is logged in, in some circumstances
 * you may want to turn off auth-check and allow anonymous users to view children. In
 * this instance, it will create an anonymous user session for the end-user. Otherwise,
 * when this is not enabled, and the user is not authenticated, it will send them to
 * log-in.
 *
 * @param {children} nodes React Children
 * @param {allowAnon} Boolean Can anonymous users view children
 */
const AuthCheck = ({ children, allowAnon = false }) => {
//   const { user, auth, loading } = useContext(AuthContext);

//   if (loading) return null; // do nothing if loading

//   // if no user, and no anon, login
//   // kick anon users to login if they go to a page they shouldn't
//   if ((!user || user.isAnonymous) && !allowAnon) {
//     return <Login />;
//   }

//   // if no user, go ahead and sign in anon
//   if (!user) {
//     auth.signInAnonymously();
//   }

//   // wait until sign in is complete to render otherwise we render nothing
//   // even anonymous users have a user session when viewing children
//   if (user) {
//     return children;
//   }

//   // this should never happen
//   return null;
    return children;
};

export default AuthCheck;
