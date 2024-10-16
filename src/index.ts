import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    // Dump environment variables
    console.log('Environment Variables:');
    for (const [key, value] of Object.entries(process.env)) {
      console.log(`${key}=${value}`);
    }

    // Dump GitHub context
    const githubContext = JSON.parse(process.env.GITHUB_CONTEXT || '{}');
    console.log('\nGitHub Context:');
    console.log(JSON.stringify(githubContext, null, 2));

    // Dump runner information
    console.log('\nRunner Information:');
    console.log(`OS: ${process.platform}`);
    console.log(`Architecture: ${process.arch}`);
    console.log(`Node version: ${process.version}`);

  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('An unexpected error occurred');
    }
  }
}

run();
