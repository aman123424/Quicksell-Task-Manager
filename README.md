# Quicksell Frontend Assessment

This project uses React JS library to write the frontend code for the assessment given by Quicksell.

### Instructions to run the project

    -> to clone this repository, copy the link (https://github.com/aman123424/Quicksell-Task-Manager.git), run the following command in your terminal (in a appropriate folder)
        `git clone https://github.com/aman123424/Quicksell-Task-Manager.git`

    -> to navigate to the root folder of the project run `cd .\quicksell-task-manager\`

    -> to install all the necessary npm packages required, run `npm i`

    -> and then to start the project on the local server run `npm start`

### API Link

    The API link used for this project is ["https://api.quicksell.co/v1/internal/frontend-assignment"](https://api.quicksell.co/v1/internal/frontend-assignment)

### Description of the code

    The root folder of the project contains all the major folders and files as listed below

    -> build: contains the production code for this project
    -> public: contains index.html file, and the png file of logo for the project
    -> src: this folder contains all the frontend code written by me
        -> assests: contains all the icons used in this project
        -> components: contains all the screen codes, or the major big components like header, topbar, groupContainer
        -> ui-elements: contains the ui-elements like card, topbar and if needed buttons can be added
        -> App.js: this file is the first file where we start coding for the frontend interface of the project and is called in index.js file
        -> App.scss: this file has the styling for App.js
        -> index.js: root file of the project which is called in index.html
        -> index.css: styling file where we can define global styles
    -> .gitignore: this file is to declare the file/folder names which we don't want to push to remote
    -> package.json: this file contains the react scripts, the list of npm packages we have installed, dependencies, and the project name
    -> README.md: this file contains the instructions about how to run the project and the documentation for the project

### About SCSS styling files
    In this project, we are using scss instead of css files to style our frontend, as the code is well organised in scss files and also variables are easily accessible 