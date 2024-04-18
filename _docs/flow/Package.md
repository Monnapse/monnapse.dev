---
layout: docs
title: Package
---

## [Manager](#manager)
(|NewManager|)[name:string][inputs:{[Input](/adocspi/flow/Types#input)}][type:"Vector3" | "Number" | "Boolean"][deadzone:number | nil ?]
-> [Manager](/docs/flow/Types#manager)

- **name**: is the name of  your manager,
- **inputs**: is a list of your inputs that you want to use for your manager,
- **type**: is the return type when your input is activated,
- **deadzone**: is if the gamepad thumbstick is stuck at like 0.0001232742 or -0.01232742 it will convert to 0 | Defaults to 0.1

<br><br>

## [Input](#input)
(|NewInput|)[input:Enum.KeyCode | Enum.UserInputType][inverted:boolean ?][axis:Enum.Axis | "X" | "Y" | "Z" ?]
-> [Input](/docs/flow/Types#input)

- **input**: is the input for current input
- **inverted**: is when it inverts the return type | Defaults to false
- **axis**: is which axis to put the input on if manager type is Vector3 | Defaults to X