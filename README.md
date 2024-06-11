# AppCenter CLI Action

Github Action for installing the AppCenter CLI and running commands with it.

> ⚠️ ***FYI: AppCenter is scheduled to be sunset on March 31st, 2025. You can read more about it [here](https://learn.microsoft.com/en-us/appcenter/retirement).***
>
> With this sunset in mind, no future improvements are planned for this Github Action. Minor fixes and maintenance will be performed until the sunset date is reached.

## Basic Usage

```yaml
jobs:
  appcenter:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      # ...

      - name: AppCenter
        uses: charliealbright/appcenter-cli-action@v1
        with:
          token: ${{ secrets.APPCENTER_TOKEN }}
          command: appcenter apps list
```

## Inputs

| Field                | Required? | Description                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`              | `true`    | Token used to authenticate with AppCenter CLI. Tokens can be created in [AppCenter Settings](https://appcenter.ms/settings). Once you have created a token, create a [Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) for your repository and reference it in the Action as shown in the usage example. |
| `command`            | `true`    | Command to run against the CLI. Must start with `appcenter`.                                                                                                                                                                                                                                                                                                                      |
| `cliVersionOverride` | `false`   | Use this field to specify a CLI version to install, e.g. `2.13.8`.                                                                                                                                                                                                                                                                                                                |
