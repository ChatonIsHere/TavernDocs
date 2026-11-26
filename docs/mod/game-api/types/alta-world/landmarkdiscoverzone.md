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
| <Link id="m-ctor" /><code>{"LandmarkDiscoverZone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-landmark" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark"}</code> | <span className="api-desc">The landmark this zone discovers.</span> |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | <span className="api-desc">The trigger sphere. Its radius is saved and loaded.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Turns the sphere collider off when not running on the server.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Server: when a player's character enters, discovers `landmark` for that player.</span> |

</details>
