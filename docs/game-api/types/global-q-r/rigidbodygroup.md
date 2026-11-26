---
title: "RigidbodyGroup"
description: "Group of rigidbodies on a player character that can be set kinematic, moved or given a velocity together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigidbodyGroup

A **class** in `Root.Township`, no namespace.

Group of rigidbodies on a player character that can be set kinematic, moved or given a velocity together. When the player teleports, it sets their velocity to the teleport offset.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`ComponentGroup<Rigidbody>`](/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RigidbodyGroup()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskinematic" /><code>{"private bool isKinematic"}</code> | Last kinematic value set. |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | Last local position set. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | Backing field for `Player`. |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | Last velocity set. |
| <Link id="m-velocitymultiplier" /><code>{"private float velocityMultiplier"}</code> | Serialized multiplier; not used in this code. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iskinematic-2" /><code>{"bool IsKinematic { set; }"}</code> | Sets every rigidbody kinematic or not. |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { set; }"}</code> | Sets every rigidbody's local position. |
| <Link id="m-velocity-2" /><code>{"Vector3 Velocity { set; }"}</code> | Sets every rigidbody's velocity. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Player { get; }"}</code> | Player character on this object, fetched on first use. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops listening for player teleports. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Listens for the player's locomotion position changes. |
| <Link id="m-playerabouttoteleport" /><code>{"private void PlayerAboutToTeleport("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Sets every rigidbody's velocity to the teleport offset. |

</details>
