import axios from 'axios';


export default async function getCommitHistory(){
  let json = await axios.get("https://api.github.com/repos/sudo-quinnmaloney/Boardroom-Frontend/commits")
    .then((response) => { return response.data })
    .catch((error) => console.log(error));
  return json;
}

