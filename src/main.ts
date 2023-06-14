import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token')
    const command: string = core.getInput('command')
    const cliVersionOverride = core.getInput('cliVersionOverride')

    if (!token) {
      core.setFailed("No value set for input: 'token'")
    }

    if (!command) {
      core.setFailed("No value set for input: 'command'")
    }

    if (!command.startsWith('appcenter')) {
      core.setFailed("'command' input must start with the 'appcenter' keyword.")
    }

    if (cliVersionOverride) {
      await exec.exec(`npm install -g appcenter-cli@${cliVersionOverride}`)
    } else {
      await exec.exec('npm install -g appcenter-cli')
    }

    await exec.exec(`${command} --token ${token}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
