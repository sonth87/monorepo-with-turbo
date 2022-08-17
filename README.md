- Source [git](https://github.com/Enricopv/turbo-boilerplate) for making life easier.



# Turborepo Boiler Plate

- Includes Next.js, CRA
  - apps
    - Web: Next.js
    - Admin
      - cms: create react app
      - adminSystem: create react app
  - packages
    - ui: react lib

# How to use


### Run commands:
Install
```
npm install
```
or
```
yarn
```
`yarn dev` runs all the projects in a development state as this project copies the kitchen-sink example from turbo. You will want to edit the `dev` command of a project's `package.json` to do something else or remote it entirely. You may want look at Turbo's docs under --scope for more control.

- Clone: `git clone https://github.com/sonth87/monorepo-with-turbo.git {name}`
- Install: `yarn`
- Run: `yarn dev` // to run all projects
- Run: `yarn dev --scope={name}` // to run a single project. Running this may not show your live updates from the ui packages if they are not also running too.



## Troubleshooting
<b>Long jest-haste-map Issue</b>
- If you are running into ths problem, try running `yarn clean:watchman`.

