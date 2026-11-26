---
title: "HashedGeneralValuesWarmer"
description: "Startup component that loads the hashed item, material and page collection tables and a list of prefabs over several frames, to avoid a stall later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValuesWarmer

A **class** in `Root.Township`, no namespace.

Startup component that loads the hashed item, material and page collection tables and a list of prefabs over several frames, to avoid a stall later.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HashedGeneralValuesWarmer()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-framemillisecondallowance" /><code>{"private float frameMillisecondAllowance"}</code> | Milliseconds of prefab loading allowed per frame. |
| <Link id="m-prefabstowarm" /><code>{"private uint[] prefabsToWarm"}</code> | Hashes of prefabs to load early. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | Runs `Initialize` and then `WarmPrefabs`. |
| <Link id="m-initialize" /><code>{"private async Task Initialize()"}</code> | Loads the `Item`, `PhysicalMaterial` and `PageCollection` tables and the pickup type dictionary, yielding a frame between each. |
| <Link id="m-warmprefabs" /><code>{"private async Task WarmPrefabs()"}</code> | Loads each listed prefab, yielding a frame whenever the time budget is used up. |

</details>
