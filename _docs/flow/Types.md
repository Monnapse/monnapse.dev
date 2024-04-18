---
layout: docs
title: Types
---

## [Manager](#manager)
(|Manager|)[name:string][inputs:{[Input](/docs/flow/Types#input)}][type:"Vector3" | "Number" | "Boolean"][value:Vector3 | number | boolean][deadzone:number | nil ?][Began:Signal][Ended:Signal][UpdateInput:(Enum.KeyCode | Enum.UserInputType, Enum.KeyCode | Enum.UserInputType) -> nil]

- **Began**: connect to it the like a normal signal by doing ```Began:Connect```, fires when an input is activated. Parameter is the input value/manager.value
- **Ended**: connect to it the like a normal signal by doing ```Ended:Connect```, fires when an input gets deactivated. Parameter is the input value/manager.value

## [Input](#input)
(|Input|)[Input:Enum.KeyCode | Enum.UserInputType][Inverted:boolean][Axis:Enum.Axis | "X" | "Y" | "Z"][InUse:boolean]

- **InUse**: means that if the input is active then InUse is set the true if not InUse is set to false.