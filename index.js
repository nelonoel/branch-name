const core = require('@actions/core');

async function run() {
  try {
    const event = JSON.parse( readFileSync( GITHUB_EVENT_PATH, 'utf8' ) );
		const isPullRequest = !! event.pull_request;
    let branchName;
    if ( this.isPullRequest ) {
      branchName = event.pull_request.head.ref;
    } else {
      branchName = event.ref.substr( 11 );
    }
    core.exportVariable('BRANCH_NAME', branchName);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
