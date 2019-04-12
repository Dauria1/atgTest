# Create-Component

## Description:
Creates a new directory containing modified template files from within the *defaults* directory.

## Setup:
Replace variable `bash_path` to point from project root to `create-component/index.sh`.
Replace variable `main_path` to set starting point of the given path when running script.
Configure the files inside *defaults* directory to look the way you want them.
Remember to update/add/remove these changes in the bash script.
Anything marked as `PLACEHOLDER` will be replaced with the component name.

## Usage:
`npm run create-component -- {PATH FROM main_path}`

## Example:
`npm run create-component -- components/newComponent`
Creates newComponent directory inside of `{main_path}/components` with necessary files.