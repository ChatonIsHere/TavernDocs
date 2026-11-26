---
title: "RigidbodyGroup"
description: "Group of rigidbodies on a player character that can be set kinematic, moved or given a velocity together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigidbodyGroup

A **class** in `Root.Township`, the global namespace.

Group of rigidbodies on a player character that can be set kinematic, moved or given a velocity together. When the player teleports, it sets their velocity to the teleport offset.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`ComponentGroup<Rigidbody>`](/mod/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RigidbodyGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskinematic" /><code>{"private bool isKinematic"}</code> | <span className="api-desc">Last kinematic value set.</span> |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | <span className="api-desc">Last local position set.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | <span className="api-desc">Last velocity set.</span> |
| <Link id="m-velocitymultiplier" /><code>{"private float velocityMultiplier"}</code> | <span className="api-desc">Serialized multiplier; not used in this code.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iskinematic-2" /><code>{"bool IsKinematic { set; }"}</code> | <span className="api-desc">Sets every rigidbody kinematic or not.</span> |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { set; }"}</code> | <span className="api-desc">Sets every rigidbody's local position.</span> |
| <Link id="m-velocity-2" /><code>{"Vector3 Velocity { set; }"}</code> | <span className="api-desc">Sets every rigidbody's velocity.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Player { get; }"}</code> | <span className="api-desc">Player character on this object, fetched on first use.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops listening for player teleports.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Listens for the player's locomotion position changes.</span> |
| <Link id="m-playerabouttoteleport" /><code>{"private void PlayerAboutToTeleport("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Sets every rigidbody's velocity to the teleport offset.</span> |

</details>
