/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git helps with version control of a project. It is especially helpful when working with a team so if a bug arises the team can go back to previous versions of the project to see what went wrong. For individual use it is helpful to save and back-up the project."
    //////////////////PROBLEM 2////////////////////
    /*
        Create a variable called 'gitHubDefinition'.  
        It should be a string containing your best definition of what GitHub is.
    */

//CODE HERE
let gitHubDefinition = "Git Hub is an online version of git and allows for a seperate back-up version control incase a computer goes down that had the project stored on it. It is also a great way to show and commmunicate with the team. Git Hub is also a great place for open source projects."
    //////////////////PROBLEM 3////////////////////
    /*
        Create a variable called 'gitInitDefinition'.  
        It should be a string containing your best definition of what 'git init' does.
    */

//CODE HERE
let gitInitDefinition = "The git init command intializes the project and starts the master branch for version control. "
    //////////////////PROBLEM 4////////////////////
    /*
        Create a variable called 'gitCloneDefinition'.  
        It should be a string containing your best definition of what 'git clone' does.
    */

//CODE HERE
let gitCloneDefinition = "Git clone creates a clone of the git repository and all of the current history at the time of the clone. Can be useful to back-up git repos with the clone. Or if you are looking to mess around with the code without hurting the master branch."
    //////////////////PROBLEM 5////////////////////
    /*
        Create a variable called 'gitStatusDefinition'.  
        It should be a string containing your best definition of what 'git status' does.
    */

//CODE HERE
let gitStatusDefinition = "Git status will let the user know which files are being supported by git and which files are not being back-up by git. It will also let you know if the file needs to be saved."
    //////////////////PROBLEM 6////////////////////
    /*
        Create a variable called 'gitAddDefinition'.  
        It should be a string containing your best definition of what 'git add' does.

        Create another variable called 'gitAddCode'.  
        It should be a string containing the code to add all files.
    */

//CODE HERE
let gitAddDefinition = "Git add adds the file to the git index. It preapes the file for the commit."

let gitAddCode = "git add gitInfo.js"
    //////////////////PROBLEM 7////////////////////
    /*
        Create a variable called 'gitCommitDefinition'.  
        It should be a string containing your best definition of what 'git commit' does.

        Create a variable called 'gitCommitCode'.  
        It should be a string containing the code to commit using the message "initial commit".
    */

//CODE HERE
let gitCommitDefinition = "Records all the changes to whatever branch you are working on."

let gitCommitCode = "git commit -m 'initial commit'"

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
gitPushDefinition = "Will update all remote repos to match the current version."