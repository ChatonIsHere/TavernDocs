---
title: "DamageDisplayer"
description: "Debug total of damage the local player has dealt recently."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDisplayer

A **class** in `Root.Township`, the global namespace.

Debug total of damage the local player has dealt recently. Each `Player` has one (`Player.DamageDisplayer`); the server sends hits to the hitting player's client.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageDisplayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Creates a `DamageDisplayer` from `player`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The player this displayer belongs to.</span> |
| <Link id="m-syncdamage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncDamage"}</code> | <span className="api-desc">Method sync used to send damage to the player. Not created for the server's own local player.</span> |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> | <span className="api-desc">Real time when `TotalDamage` resets.</span> |
| <Link id="m-updatetimer" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateTimer"}</code> | <span className="api-desc">Handle for the registered `UpdateTimer` method.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-totaldamage" /><code>{"static float TotalDamage { get; private set; }"}</code> | <span className="api-desc">Damage the local player dealt in the current burst. Resets to zero 5 seconds after the last hit. Shown by debug displays.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dealtdamage" /><code>{"void DealtDamage(float damage)"}</code> | <span className="api-desc">On the local player, adds to `TotalDamage` and restarts the 5 second reset; otherwise sends the damage to that player.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops the reset timer when the player is destroyed by the scene.</span> |
| <Link id="m-syncdamage-2" /><code>{"private void SyncDamage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float damage)"}</code> | <span className="api-desc">Method sync that carries one damage amount to the player and adds it on arrival.</span> |
| <Link id="m-updatetimer-2" /><code>{"private void UpdateTimer()"}</code> | <span className="api-desc">Budgeted update that resets `TotalDamage` once the 5 seconds have passed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DamageDisplayer`:

<div className="api-used-in">

[`Player.DamageDisplayer`](/mod/game-api/types/global-p/player#m-damagedisplayer).

</div>
