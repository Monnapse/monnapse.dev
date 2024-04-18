---
layout: docs
title: Part Service
---

[Part Service Source Code](https://github.com/Monnapse/Utils/blob/main/src/Instances/partservice.lua "Source Code")

<br>
<br>

# [Functions](#functions)
## [New Service](#new-service)
Part Servicer
(|new|)[part:Instance | string][amount:number][replicateIfOut:boolean ?][partProperties:{propertyName string = value any}?]
-> [partService](#part-service)

- **part**: The actual instance or the instance class
- **amount**: The amount of parts to be created
- **replicateIfOut**: When getting a part and service is out of parts then if true then create new part
- **partProperties**: Modify the properties of the part, should only be used if specified part class

<br>

## [Replicate Parts](#replicate-parts)
Create Parts from service
(|replicateParts|)[self:[partService](#part-service)][amount:number]

- **amount**: The amount of parts to be replicated

<br>

## [Retrieve Part](#retrieve-part)
Retieve a part from the service
(|retrievePart|)[self:[partService](#part-service)]
-> Instance

<br>

## [Return Part](#return-part)
Returns a part to the service
(|returnPart|)[self:[partService](#part-service)][part:Instance]

- **part**: The part to return


<br>
<br>
<br>

# [Types](#types)
## [partService](#part-service)
(|partService|)[partProperties:{propertyName string = value any} ?][part:string][partClass:string ?][parts: {partAvailablility}][replicateParts:(amount number) -> nil][retrievePart:() -> Instance][returnPart:(part Instance) -> nil]


# [Example](#example)
```lua
local partService = require(partservice) -- Require the module

-- Create the services
local service1 = partService.new("Part", 5, true, {Transparency = 0.5, Name = "Test"})
local service2 = partService.new(workspace.Part, 5)

-- Create more parts
service1:replicateParts(95)
service2:replicateParts(95)

-- Get a part from the services
local part1 = service1:retrievePart()
local part2 = service2:retrievePart()

-- Modify the part
part1.Position = Vector3.new(0,0,0)
part1.Parent = workspace
part2.Position = Vector3.new(0,0,0)
part2.Parent = workspace

-- Return the part back to the service
service1:returnPart(part1)
service2:returnPart(part2)
```