const execa = require("execa")

// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

function sh(cmd, opts = []) {
  const { stdout } = execa.sync(cmd, opts)
  return stdout
}

function getUserName() {
  return sh("git", ["config", "--get", "user.name"])
}
function getUserEmail() {
  return sh("git", ["config", "--get", "user.email"])
}
function getRemoteOriginUrl() {
  return sh("git", ["config", "--get", "remote.origin.url"])
}
function getPackageName() {
  console.log(getRemoteOriginUrl())
  return getRemoteOriginUrl().split("/").pop()
}

module.exports = [
  {
    type: "input",
    name: "package",
    message: "What's the name of your package?",
    initial: getPackageName(),
  },
  {
    type: "input",
    name: "author",
    message: "What's your full name?",
    initial: getUserName(),
  },
  {
    type: "input",
    name: "email",
    message: "What's your email?",
    initial: getUserEmail(),
  },
  {
    type: "input",
    name: "description",
    message: "What's your package description?",
  },
]
