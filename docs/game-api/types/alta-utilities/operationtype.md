---
title: "OperationType"
description: "How to combine two floats, turned into a function by MathfOperation.GetOperation: Set (take the new value), Max, Min, Add, Subtract, Multiply, or..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OperationType

An **enum** in `Root.Township`, `Alta`.

How to combine two floats, turned into a function by `MathfOperation.GetOperation`: Set (take the new value), Max, Min, Add, Subtract, Multiply, or Multiply1Minus (`a * (1 - b)`).

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"Add = 3"}</code> |  |
| <Link id="m-max" /><code>{"Max = 1"}</code> |  |
| <Link id="m-min" /><code>{"Min = 2"}</code> |  |
| <Link id="m-multiply" /><code>{"Multiply = 5"}</code> |  |
| <Link id="m-multiply1minus" /><code>{"Multiply1Minus = 6"}</code> |  |
| <Link id="m-set" /><code>{"Set = 0"}</code> |  |
| <Link id="m-subtract" /><code>{"Subtract = 4"}</code> |  |

## Used in

Members of other types that take, return or hold a `OperationType`:

[`ApplyElement.operationType`](/game-api/types/alta-world-generation/applyelement#m-operationtype), [`ApplyElement.OperationType`](/game-api/types/alta-world-generation/applyelement#m-operationtype-2), [`BlobEdge.operationType`](/game-api/types/alta-world-generation/blobedge#m-operationtype), [`BlobEdge.OperationType`](/game-api/types/alta-world-generation/blobedge#m-operationtype-2), [`Circle.operationType`](/game-api/types/alta-world-generation/circle#m-operationtype), [`Circle.OperationType`](/game-api/types/alta-world-generation/circle#m-operationtype-2), [`LineDraw.Cylinder3D`](/game-api/types/alta-world-generation/linedraw#m-cylinder3d), [`OperationPart.operationType`](/game-api/types/alta-world-generation/operationpart#m-operationtype), [`OperationPart.OperationType`](/game-api/types/alta-world-generation/operationpart#m-operationtype-2), [`RandomNoise.operationType`](/game-api/types/alta-world-generation/randomnoise#m-operationtype), [`RandomNoise.OperationType`](/game-api/types/alta-world-generation/randomnoise#m-operationtype-2), [`SimplexNoisePart.operationType`](/game-api/types/alta-world-generation/simplexnoisepart#m-operationtype), [`SimplexNoisePart.OperationType`](/game-api/types/alta-world-generation/simplexnoisepart#m-operationtype-2), [`Stretch.operationType`](/game-api/types/alta-world-generation/stretch#m-operationtype), [`Stretch.OperationType`](/game-api/types/alta-world-generation/stretch#m-operationtype-2), [`RoomFixPlugin.Tunnel.operation`](/game-api/types/alta-world-generation/roomfixplugin-tunnel#m-operation), [`RoomFixPlugin.Tunnel.OperationType`](/game-api/types/alta-world-generation/roomfixplugin-tunnel#m-operationtype), [`MathfOperation.GetOperation`](/game-api/types/alta-utilities/mathfoperation#m-getoperation).
