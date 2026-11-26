---
title: "SpaceAtmosphereTrigger"
description: "Trigger volume that switches the atmosphere to a set when anything enters it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceAtmosphereTrigger

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Trigger volume that switches the atmosphere to a set when anything enters it.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpaceAtmosphereTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager"}</code> | <span className="api-desc">The atmosphere manager.</span> |
| <Link id="m-usedset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" usedSet"}</code> | <span className="api-desc">Atmosphere set to apply.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Applies `usedSet` through the atmosphere manager. Fires for any collider.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Caches `AtmosphereManager.instance`.</span> |

</details>
