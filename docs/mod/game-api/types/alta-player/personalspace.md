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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PersonalSpace()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of this object.</span> |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character"}</code> | <span className="api-desc">Backing field for `Character`.</span> |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | <span className="api-desc">The personal space sphere.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-character-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Character { get; }"}</code> | <span className="api-desc">The player this space belongs to.</span> |
| <Link id="m-radius" /><code>{"float Radius { get; private set; }"}</code> | <span className="api-desc">Effective radius, counting the sphere's downward offset.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablepersonalspace" /><code>{"void DisablePersonalSpace()"}</code> | <span className="api-desc">Turns off the sphere and this component. Used when the player dies.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Works out `Radius` from the sphere and how far below the object it sits, and disables itself if there is no player.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Moves the sphere to the player's feet.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Turns off the sphere collider.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Turns on the sphere collider.</span> |

</details>
