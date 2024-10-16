# Dump Action Environment

This GitHub Action dumps the environment variables and other relevant information
during GitHub Actions execution. It's useful for debugging and understanding the
execution context of your workflows.

## Features

- Dumps all environment variables
- Displays GitHub context information
- Shows runner information (OS, architecture, Node.js version)

## Usage

To use this action in your workflow, add the following step:

```yaml
- name: Dump Action Environment
  uses: jlopez/dump-action-environment@main
```
