import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export function useRegister() {
  const registerWithEmailAndPassword = (displayName, email, passwoord) => {
    createUserWithEmailAndPassword(auth, email, passwoord)
      .then((profile) => {
        console.log(profile.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { registerWithEmailAndPassword };
}
