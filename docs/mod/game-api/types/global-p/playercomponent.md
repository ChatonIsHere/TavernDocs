---
title: "PlayerComponent"
description: "Base for components on the Player object (the player's network entity, not their body)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerComponent

A **class** in `Root.Township`, the global namespace.

Base for components on the `Player` object (the player's network entity, not their body). `Player` calls `InitializeComponent` on each one.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`PlayerEventsManager`](/mod/game-api/types/global-p/playereventsmanager), [`PlayerProgressionManager`](/mod/game-api/types/global-p/playerprogressionmanager), [`PlayerToolBasedSkillHelper`](/mod/game-api/types/global-p/playertoolbasedskillhelper), [`PlayerUnlockManager`](/mod/game-api/types/global-p/playerunlockmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | Backing field for `Player`, filled from the same GameObject. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | The `Player` on the same object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecomponent" /><code>{"void InitializeComponent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" newIPlayer)"}</code> | Hooks `PlayerLoadComplete` to the player's `LoadComplete` event. |
| <Link id="m-playerloadcomplete" /><code>{"protected virtual void PlayerLoadComplete()"}</code> | Called when the player has finished loading. Empty by default. |

## Used in

Members of other types that take, return or hold a `PlayerComponent`:

[`Player.playerComponents`](/mod/game-api/types/global-p/player#m-playercomponents).
