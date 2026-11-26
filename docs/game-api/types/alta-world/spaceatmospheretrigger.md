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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpaceAtmosphereTrigger()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager"}</code> | The atmosphere manager. |
| <Link id="m-usedset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" usedSet"}</code> | Atmosphere set to apply. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Applies `usedSet` through the atmosphere manager. Fires for any collider. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Caches `AtmosphereManager.instance`. |

</details>
