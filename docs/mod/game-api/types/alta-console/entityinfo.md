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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityInfo()"}</code> | <span className="api-desc">Creates an `EntityInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkingparent" /><code>{"uint ChunkingParent { get; set; }"}</code> | <span className="api-desc">ID of the entity's chunking parent, or 0.</span> |
| <Link id="m-identifier" /><code>{"uint Identifier { get; set; }"}</code> | <span className="api-desc">The entity's network ID.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The entity's GameObject name, which starts with its ID once initialized.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; set; }"}</code> | <span className="api-desc">World position.</span> |
| <Link id="m-prefabhash" /><code>{"uint PrefabHash { get; set; }"}</code> | <span className="api-desc">Hash of the prefab at the entity's root, or 0.</span> |
| <Link id="m-rootidentifier" /><code>{"uint RootIdentifier { get; set; }"}</code> | <span className="api-desc">Network ID of the entity's prefab root.</span> |
| <Link id="m-rotation" /><code>{"Vector3 Rotation { get; set; }"}</code> | <span className="api-desc">World rotation as Euler angles.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Builds the summary from a network entity.</span> |

## Used in

Members of other types that take, return or hold a `EntityInfo`:

<div className="api-used-in">

[`DebuggingCommandModule.Tracking.Get`](/mod/game-api/types/alta-console/debuggingcommandmodule-tracking#m-get), [`Inventory.AddBackDocks`](/mod/game-api/types/alta-console/inventory#m-addbackdocks), [`Inventory.AddBeltDocks`](/mod/game-api/types/alta-console/inventory#m-addbeltdocks), [`Inventory.AddHandItem`](/mod/game-api/types/alta-console/inventory#m-addhanditem), [`Inventory.All`](/mod/game-api/types/alta-console/inventory#m-all), [`Inventory.Back`](/mod/game-api/types/alta-console/inventory#m-back), [`Inventory.Belt`](/mod/game-api/types/alta-console/inventory#m-belt), [`Inventory.LeftHand`](/mod/game-api/types/alta-console/inventory#m-lefthand), [`Inventory.RightHand`](/mod/game-api/types/alta-console/inventory#m-righthand), [`SelectionCommandModule.Get`](/mod/game-api/types/alta-console/selectioncommandmodule#m-get).

</div>
