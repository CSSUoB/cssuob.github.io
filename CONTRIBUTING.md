# Contributing

A big welcome and thank you for considering contributing to CSS' open source projects! We welcome anybody who wants to contribute, and we actively encourage everyone to do so, especially if you have never contributed before.

## Quick links

* [Getting started](#getting-started)
* [Using the issue tracker](#using-the-issue-tracker)
* [Making your first contribution](#making-your-first-contribution)
* [Guidance](#guidance)

## Getting started

If you have never used git before, we would recommend that you read the [GitHub's Getting Started guide](https://guides.github.com/introduction/getting-started-with-git/). Additionally, linked below are some helpful resources:

* [GitHub git guides](https://github.com/git-guides)
* [git - the simple guide](https://rogerdudler.github.io/git-guide/)
* [Getting Git Right (Atlassian)](https://www.atlassian.com/git/)

If you are new to contributing to open-source projects on GitHub, the general workflow is as follows:

1. Fork this repository and clone it
2. Create a branch off main
3. Make your changes
    * Use `make fmt` and `make lint` to format and lint your changes
    * Optionally `make spellcheck` to spellcheck your changed Markdown / HTML files
    * Make a commit with an explanatory commit message
4. Push your local branch to your remote fork
5. Open a new pull request on GitHub

We recommend also reading the following if you're unsure or not confident:

* <https://makeapullrequest.com/>
* <https://www.firsttimersonly.com/>

## Using the issue tracker

We use GitHub issues to track bugs and feature requests. If you find an issue with the website, the best place to report it is through the issue tracker. If you are looking for issues to contribute code to, it's a good idea to look at the [issues labelled "good-first-issue"](https://github.com/CSSUoB/cssuob.github.io/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Agood-first-issue)!

When submitting an issue, please be as descriptive as possible. If you are submitting a bug report, please include the steps to reproduce the bug, and the environment it is in. If you are submitting a feature request, please include the steps to implement the feature.

## Making your first contribution

After you have found an issue which needs solving, it's time to start working on a fix! However, there are a few guidelines we would like you to follow first.

### Writing new pages

Where possible, new pages should be written in Markdown over raw HTML. This is for maintainability reasons, as it is easier to write and edit. 

If you happen to be doing a lot of technical work on the website, the [wiki](https://github.com/CSSUoB/cssuob.github.io/wiki) has a few pointers on more technical aspects.


### Code style and formatting

This project uses several tools to enforce *coding standards*:

* Formatting: [Prettier](https://prettier.io/)
* Linting
    * [ESLint](https://eslint.org/): for JavaScript files
    * [markdownlint](https://github.com/DavidAnson/markdownlint): for Markdown files
* Spellchecking: [CSpell](https://cspell.org/)

These *coding standards* exist to help keep a consistent code style across files, and 
to improve code quality overall.

#### Formatting

We use [Prettier](https://prettier.io/) to auto-format most of the code. 
This will format your syntax to a specific style - if it doesn't generate pretty 
code, then the code probably needs a refactor and clean-up anyway. 

You can automatically fix most formatting issues by invoking the helper function
`make fmt`.


```console
$ make fmt
css/about.scss 34ms
css/ball/2023/main.scss 11ms (unchanged)
css/ball/2024/main.scss 10ms (unchanged)
css/ball/main.scss 16ms (unchanged)
...
```

You can then verify no formatting issues exist by running the npm script
`npm run format`.

#### Linting

We use several tools for linting: [ESLint](https://eslint.org/) for JS and 
[markdownlint](https://github.com/DavidAnson/markdownlint) for Markdown files.
These tools analyse code quality and help catch bugs.

Some linting errors can be fixed automatically using the helper function
`make lint`. This will not output anything unless there was a problem.

However, not all linting errors can be automatically fixed. You can verify
them by running `npm run lint`.

#### Spellchecking

[CSpell](https://cspell.org/]) is set up to help with spellchecking.

You can run a spellcheck on *changed* files by using the helper `make spellcheck`.

```console
$ make spellcheck
1/1 CONTRIBUTING.md 322.46ms X
CONTRIBUTING.md:70:51 - Unknown word (cleanup)
CONTRIBUTING.md:70:59 - Unknown word (anyways)
CSpell: Files checked: 1, Issues found: 2 in 1 file.
```

If you want to run a spellcheck on the project as a whole, you will need to run the
npm script instead `npm run spellcheck`.

### Git commit messages

Commit messages should be written in the imperative, present tense. For example, "Fix bug #1".

Additionally, we request that you keep the commit subject under 80 characters for a comfortable viewing experience on GitHub and other git tools. If you need more, please use the body of the commit.

For example:

```
Fix HTTP 418 error when navigating to /ball

<more detailed description here>
```

### What happens next?

Once you have made your changes, please describe them in your pull request in full. We will then review them and communicate with you on GitHub. We may ask you to change a few things so please do check GitHub or your emails frequently.

After that, that's it! You've made your first contribution to CSS' website. 🎉

## Guidance

We aim to get more people involved with our website, and help build members' confidence in using git and contributing to open-source. If you see an error with the website, we encourage you to *be bold* and fix it yourself, rather than just raising an issue. If you are stuck, need help, or have a question about the website, the best place to ask is on our Discord, in the `#github🌐` channel.

Happy editing!
