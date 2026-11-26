---
title: "LandmarkDiscoverZone"
description: "A sphere trigger that marks a landmark as discovered for any player who walks into it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkDiscoverZone

A **class** in `Root.Township`, `Alta.Map`.

A sphere trigger that marks a landmark as discovered for any player who walks into it. Server only; the collider is turned off on clients.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LandmarkDiscoverZoneSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LandmarkDiscoverZoneSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LandmarkDiscoverZoneSaveData`](/mod/game-api/types/alta-world/landmarkdiscoverzonesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkDiscoverZone()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-landmark" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark"}</code> | The landmark this zone discovers. |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | The trigger sphere. Its radius is saved and loaded. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Turns the sphere collider off when not running on the server. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Server: when a player's character enters, discovers `landmark` for that player. |

</details>
