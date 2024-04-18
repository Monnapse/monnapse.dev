---
layout: docs
title: Object Id
---

[Object Id Source Code](https://github.com/Monnapse/Utils/blob/main/src/Instances/ObjectId.lua "Source Code")

<br>
<br>

# [Functions](#functions)
## [Add Id](#add-id)
Add an id to the instance
(|AddId|)[Instance:Instance]

- **Instance**: Is the instance you want to add an id to

Id's are indexed starting at 0

<br>

## [Get Id](#get-id)
Get the id of an instance
(|GetId|)[Instance:Instance]
-> number 

- **Instance**: Is the instance you want to get the id of

<br>

## [Check Id](#check-id)
Check if an instances Id matches a given Id
(|CheckId|)[Instance:Instance][Id:number]
-> boolean

- **Instance**: Is the instance you want to check
- **Id**: Is the Id you want to check to see if Instance has the same Id as the Id you gave

<br>
<br>

# [Example](#example)
```lua
local ObjectId = require(ObjectId) -- Require the module

ObjectId.AddId(part)

local Id = ObjectId.GetId(part)

print(ObjectId.CheckId(part, Id)) --> true
print(ObjectId.CheckId(part, 999)) --> false
```