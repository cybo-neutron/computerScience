# **Bash Scripting**

### **Running a script**
```bash
sh script.sh  # Runs script using shell interpreter
bash script.sh # Runs script using bash interpreter
```
### Find out where the bash interpreter is located
`which bash`

You can tell your program to use it by placing a `shebang` at the very top of the file like this :  `#!<path_to_interpreter>`
eg.
```bash
#!/bin/bash
.
.
.
```

### Declareing variables
```bash
VARIABLE_NAME=VALUE # no spaces before or after = sign
echo $VARIABLE_NAME # to use the variable in the script use '$' sign before it.

read INPUT_VAR # read input from the console and store it in the variable

```

### Printing arguments passed to the script
`$*` -> prints all arguments passed to the script.  
`$1` -> prints first argument.

`./script.sh arg1 arg2 arg3` -> running script and passing arguments

```bash
#!/bin/bash

echo $* # prints all arguments 
echo $1 # prints first argument

```

## **If condition**

NOTE : There must be spaces on the inside of the brackets ([[ ... ]]) and around the operator (==).

```bash
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```

### COMPARING ARGUMENTS WITH NUMBERS 
- `-eq` : equal 
- `-ne` : not equal
- `-lt` : less than 
- `-le` 
- `-gt` : 
- `-ge`


    **example**
    ```bash
    #eg 
    if [[ $1 == arg1 ]]
    then
        echo true

    fi
    ```

## **Printing the contents of a file**

```bash
cat courses.csv | while read MAJOR COURSE 
do
  echo $MAJOR - $COURSE
done

```
**IFS**
* There's a default `IFS` variable in bash. 
* **IFS** : Internal File Separator
* To view it :  `declare -p IFS`
* It defaults to spaces, tabs, and new lines
* Set it to something else using this command : ` IFS="," ` 
  eg. 
  ```bash
  cat courses.csv | while IFS="," read MAJOR COURSE 
  ```
* 