---
title: "Inventory"
description: "Console result object that lists what a player holds: hand items, back and belt dock items, and their child items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Inventory

A **class** in `Root.Township`, `Alta.Console.Commands`.

Console result object that lists what a player holds: hand items, back and belt dock items, and their child items.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Inventory("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Creates an `Inventory` from `player`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{"> All { get; set; }"}</code> | <span className="api-desc">Every item found, including children.</span> |
| <Link id="m-back" /><code><Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{"[] Back { get; set; }"}</code> | <span className="api-desc">Items in the back docks, one per dock (null for empty).</span> |
| <Link id="m-belt" /><code><Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{"[] Belt { get; set; }"}</code> | <span className="api-desc">Items in the belt docks, one per dock (null for empty).</span> |
| <Link id="m-lefthand" /><code><Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" LeftHand { get; set; }"}</code> | <span className="api-desc">Item in the left hand, or null.</span> |
| <Link id="m-righthand" /><code><Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" RightHand { get; set; }"}</code> | <span className="api-desc">Item in the right hand, or null.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addbackdocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{"[] AddBackDocks("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> | <span className="api-desc">Gets the item in each back dock and adds it and its children to `All`.</span> |
| <Link id="m-addbeltdocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{"[] AddBeltDocks("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> | <span className="api-desc">Gets the item in each belt dock and adds it and its children to `All`.</span> |
| <Link id="m-addchildren" /><code>{"private void AddChildren("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Adds every child entity that is a prefab root to `All`, going down the whole tree.</span> |
| <Link id="m-addhanditem" /><code>{"private "}<Link to="/mod/game-api/types/alta-console/entityinfo">{"EntityInfo"}</Link>{" AddHandItem("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" handController)"}</code> | <span className="api-desc">Gets the hand's held entity and adds its children. It adds `LeftHand` to `All` rather than the held item, so `All` can be wrong.</span> |

</details>
