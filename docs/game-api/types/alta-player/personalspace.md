---
title: "PersonalSpace"
description: "Sphere trigger that follows a player's feet to mark their personal space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PersonalSpace

A **class** in `Root.Township`, `Alta.Character`.

Sphere trigger that follows a player's feet to mark their personal space. `Pointer` checks the personal space layer when aiming, and it is turned off when the player dies.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PersonalSpace()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform of this object. |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character"}</code> | Backing field for `Character`. |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | The personal space sphere. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-character-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Character { get; }"}</code> | The player this space belongs to. |
| <Link id="m-radius" /><code>{"float Radius { get; private set; }"}</code> | Effective radius, counting the sphere's downward offset. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablepersonalspace" /><code>{"void DisablePersonalSpace()"}</code> | Turns off the sphere and this component. Used when the player dies. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Works out `Radius` from the sphere and how far below the object it sits, and disables itself if there is no player. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Moves the sphere to the player's feet. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Turns off the sphere collider. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Turns on the sphere collider. |

</details>
