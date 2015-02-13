# Parse / Backbone.js / Sass - Boilerplate

A quick boilerplate for spinning up a Parse application using Backbone and Sass.

Learn more about Parse here: https://parse.com/

## How to install

Download this repo, and switch to the branch: parse-backbone-sass

Run the following commands in order:

```
parse new
```
Follow the steps on screen.

Once Parse has been set up, run:
```
npm install && grunt install
```

You are now set up and ready to go.


## How to develop

All Frontend code lives in "frontend-build", and will be compiled and moved to the parse directory as required.

For development, use the command:

```
grunt watch
```

When you are ready to deploy, use the command:

```
parse deploy
```
