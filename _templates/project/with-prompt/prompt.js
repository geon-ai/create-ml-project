// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

function getUserName() {
  const cmd = "git config --get user.name"
  return cmd
}
function getUserEmail() {
  const cmd = "git config --get user.email"
  return cmd
}
function getRemoteOriginUrl() {
  const cmd = "git config --get remote.origin.url"
  return cmd
}
function getPackage() {
  const url = getRemoteOriginUrl()
  return url.split("/").pop()
}

module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's the name of your package?",
  },
  {
    type: "input",
    name: "description",
    message: "What's your package description?",
  },
]
