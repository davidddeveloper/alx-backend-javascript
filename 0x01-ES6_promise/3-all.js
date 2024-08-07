import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((response) => response.body).then((response) => {
    const result = response;
    createUser().then((response) => {
      console.log(`${result} ${response.firstName} ${response.lastName}`);
    });
  });
}
