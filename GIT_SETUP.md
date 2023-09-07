# Git Configuration

This is the recommended way to set up your git global configuration.

```sh
[user]
  name = You Name
  email = your.name@kudos.com
[core]
  editor = code -w
  ignorecase = false
[rebase]
  instructionFormat = %s [%an]
[pull]
  rebase = true
[fetch]
  prune = true
```

You can set it up through the command line like this:

```sh
git config --global {prop} {value}
```

For example

```sh
git config --global user.name "Your Name"
git config --global user.email "your.name@kudos.com"
git config --global core.ignorecase false
```
