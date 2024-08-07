import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((resultArray) => {
    console.log(resultArray[0].body, resultArray[1].firstName, resultArray[1].lastName);
  });
}
