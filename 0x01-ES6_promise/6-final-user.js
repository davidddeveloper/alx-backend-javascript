import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise(() => {
    const result = [];
    signUpUser(firstName, lastName).then((response) => {
      result.push({ status: 'success', value: response });
    }, (response) => {
      result.push(response);
    });
    uploadPhoto(fileName).then((response) => {
      result.push({ status: 'failed', value: response });
    }, () => {});
    return result;
  });
}
