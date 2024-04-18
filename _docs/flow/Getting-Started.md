---
layout: docs
title: Getting Started
---

# Getting Started
--------------------

First import the module
```lua
local flow = require(Flow)
```

Now that we have imported the Flow module we can now make the [inputs](/api/flow/Package#inputs) for your manager
```lua
local inputs = {
    flow.NewInput(Enum.KeyCode.Space),
    flow.NewInput(Enum.KeyCode.W)
}
```

We can now create the [manager](/api/flow/Package) using our inputs we specified
```lua
local manager = flow.NewManager("TestManagerName", inputs, "Boolean")
```

Now that we have the input [manager](/api/flow/Package) we can now connect to them to listen for when they are being active
```lua
manager.Began:Connect(function(value)
    print("Input Began: ", value)
end)
manager.Ended:Connect(function(value)
    print("Input Ended: ", value)
end)
```


---
# [Full Example](#full-example)
```lua
--// Services
local ReplicatedStorage = game:GetService("ReplicatedStorage")

--// Directories
local packages = ReplicatedStorage:WaitForChild("packages")

--// Packages
local flow = require(packages.Flow)

--// Inputs
local movementInputs = {
    flow.NewInput(Enum.KeyCode.Thumbstick1), 
    flow.NewInput(Enum.KeyCode.W, false, "Y"), 
    flow.NewInput(Enum.KeyCode.S, true, "Y"), 
    flow.NewInput(Enum.KeyCode.A, false, "X"), 
    flow.NewInput(Enum.KeyCode.D, true, "X")
}

--// Input Managers
local movementManager = flow.NewManager("Movement", movementInputs, "Vector3")

movementManager.Began:Connect(function(value)
    print("Input Began: ", value)
end)
movementManager.Ended:Connect(function(value)
    print("Input Ended: ", value)
end)
```