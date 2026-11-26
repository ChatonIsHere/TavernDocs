---
title: "ClothManager"
description: "On a player character, kicks the cloth bone rigidbodies against a teleport so cloth doesn't stretch across the jump."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClothManager

A **class** in `Root.Township`, no namespace.

On a player character, kicks the cloth bone rigidbodies against a teleport so cloth doesn't stretch across the jump. Ignores plain repositions.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClothManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clothbones" /><code>{"private Rigidbody[] clothBones"}</code> | Cloth bone rigidbodies to adjust. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | Backing field for `Player`. |
| <Link id="m-velocitymultiplier" /><code>{"private float velocityMultiplier"}</code> | Scale for the velocity given to the cloth bones. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Player { get; }"}</code> | The `PlayerCharacter` on this object, fetched on first use. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the character's position-about-to-change event. |
| <Link id="m-playerabouttoteleport" /><code>{"private void PlayerAboutToTeleport("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Sets every cloth bone's velocity to the negative move times `velocityMultiplier`, unless it's a `Reposition`. |

</details>
