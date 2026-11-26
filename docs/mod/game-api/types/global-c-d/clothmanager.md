---
title: "ClothManager"
description: "On a player character, kicks the cloth bone rigidbodies against a teleport so cloth doesn't stretch across the jump."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClothManager

A **class** in `Root.Township`, the global namespace.

On a player character, kicks the cloth bone rigidbodies against a teleport so cloth doesn't stretch across the jump. Ignores plain repositions.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClothManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clothbones" /><code>{"private Rigidbody[] clothBones"}</code> | <span className="api-desc">Cloth bone rigidbodies to adjust.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-velocitymultiplier" /><code>{"private float velocityMultiplier"}</code> | <span className="api-desc">Scale for the velocity given to the cloth bones.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The `PlayerCharacter` on this object, fetched on first use.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the character's position-about-to-change event.</span> |
| <Link id="m-playerabouttoteleport" /><code>{"private void PlayerAboutToTeleport("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Sets every cloth bone's velocity to the negative move times `velocityMultiplier`, unless it's a `Reposition`.</span> |

</details>
