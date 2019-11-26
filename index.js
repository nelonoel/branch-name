const core = require('@actions/core');

async function run() {
  try {
    core.exportVariable('BRANCH_NAME', process.env.GITHUB_REF.split('/').pop());
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
