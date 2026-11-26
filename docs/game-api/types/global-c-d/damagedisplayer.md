---
title: "DamageDisplayer"
description: "Debug total of damage the local player has dealt recently."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDisplayer

A **class** in `Root.Township`, no namespace.

Debug total of damage the local player has dealt recently. Each `Player` has one (`Player.DamageDisplayer`); the server sends hits to the hitting player's client.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DamageDisplayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The player this displayer belongs to. |
| <Link id="m-syncdamage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncDamage"}</code> | Method sync used to send damage to the player. Not created for the server's own local player. |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> | Real time when `TotalDamage` resets. |
| <Link id="m-updatetimer" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateTimer"}</code> | Handle for the registered `UpdateTimer` method. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-totaldamage" /><code>{"static float TotalDamage { get; private set; }"}</code> | Damage the local player dealt in the current burst. Resets to zero 5 seconds after the last hit. Shown by debug displays. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dealtdamage" /><code>{"void DealtDamage(float damage)"}</code> | On the local player, adds to `TotalDamage` and restarts the 5 second reset; otherwise sends the damage to that player. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Stops the reset timer when the player is destroyed by the scene. |
| <Link id="m-syncdamage-2" /><code>{"private void SyncDamage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float damage)"}</code> | Method sync that carries one damage amount to the player and adds it on arrival. |
| <Link id="m-updatetimer-2" /><code>{"private void UpdateTimer()"}</code> | Budgeted update that resets `TotalDamage` once the 5 seconds have passed. |

</details>

## Used in

Members of other types that take, return or hold a `DamageDisplayer`:

[`Player.DamageDisplayer`](/game-api/types/global-p/player#m-damagedisplayer).
