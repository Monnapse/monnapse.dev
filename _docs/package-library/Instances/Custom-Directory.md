---
layout: docs
title: Custom Directory
---

[Custom Directory Source Code](https://github.com/Monnapse/Utils/blob/main/src/Instances/CustomDirectory.lua "Source Code")

<br>
<br>

# [Functions](#functions)
## [Compile](#compile)
Find Instance using a directory string
(|Compile|)[Start:Instance][Directory:string]
-> Instance 

- **Start**: Is the starting instance, to search through
- **Directory**: Is the directory to compile/find | Example: "PlayerScript/Folder/Script"

<br>

## [Build Directory](#build-directory)
Build a directory string using a table of instances
(|BuildDirectory|)[...:{ Instance }]
-> string 

- **...**: Is the table of instances to make to directory

<br>

## [Find Directory](#find-directory)
Find the directory string of start and end instance
(|FindDirectory|)[Start:Instance][RootEnd:Instance][IncludeEnd:boolean]
-> string

- **Start**: Is the starting instance of the search
- **RootEnd**: Is the end instance to end the directory search
- **IncludeEnd**: If true then it includes the rootend instance in the string | Defaults to true

<br>
<br>

# [Example](#example)
```lua
local CustomDirectory = require(CustomDirectory) -- Require the module

print(CustomDirectory.Compile(game, "Workspace/Folder/Part")) --> Part
print(CustomDirectory.BuildDirectory(workspace, workspace.Folder, workspace.Part)) --> "Workspace/Folder/Part"
print(CustomDirectory.FindDirectory(workspace, workspace.Folder.Part, true)) --> "Workspace/Folder/Part"
print(CustomDirectory.FindDirectory(workspace, workspace.Folder.Part, false)) --> "Workspace/Folder"
```