---
title: "EntityInfo"
description: "A summary of a network entity returned by console commands: IDs, prefab, position and rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityInfo

A **class** in `Root.Township`, `Alta.Console.Commands`.

A summary of a network entity returned by console commands: IDs, prefab, position and rotation. Any `NetworkEntity` converts to it.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityInfo()"}</code> | Creates an `EntityInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkingparent" /><code>{"uint ChunkingParent { get; set; }"}</code> | ID of the entity's chunking parent, or 0. |
| <Link id="m-identifier" /><code>{"uint Identifier { get; set; }"}</code> | The entity's network ID. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The entity's GameObject name, which starts with its ID once initialized. |
| <Link id="m-position" /><code>{"Vector3 Position { get; set; }"}</code> | World position. |
| <Link id="m-prefabhash" /><code>{"uint PrefabHash { get; set; }"}</code> | Hash of the prefab at the entity's root, or 0. |
| <Link id="m-rootidentifier" /><code>{"uint RootIdentifier { get; set; }"}</code> | Network ID of the entity's prefab root. |
| <Link id="m-rotation" /><code>{"Vector3 Rotation { get; set; }"}</code> | World rotation as Euler angles. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Builds the summary from a network entity. |

## Used in

Members of other types that take, return or hold a `EntityInfo`:

[`DebuggingCommandModule.Tracking.Get`](/game-api/types/alta-console/debuggingcommandmodule-tracking#m-get), [`Inventory.AddBackDocks`](/game-api/types/alta-console/inventory#m-addbackdocks), [`Inventory.AddBeltDocks`](/game-api/types/alta-console/inventory#m-addbeltdocks), [`Inventory.AddHandItem`](/game-api/types/alta-console/inventory#m-addhanditem), [`Inventory.All`](/game-api/types/alta-console/inventory#m-all), [`Inventory.Back`](/game-api/types/alta-console/inventory#m-back), [`Inventory.Belt`](/game-api/types/alta-console/inventory#m-belt), [`Inventory.LeftHand`](/game-api/types/alta-console/inventory#m-lefthand), [`Inventory.RightHand`](/game-api/types/alta-console/inventory#m-righthand), [`SelectionCommandModule.Get`](/game-api/types/alta-console/selectioncommandmodule#m-get).
