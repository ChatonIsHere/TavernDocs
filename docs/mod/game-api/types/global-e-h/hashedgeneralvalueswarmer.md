---
title: "HashedGeneralValuesWarmer"
description: "Startup component that loads the hashed item, material and page collection tables and a list of prefabs over several frames, to avoid a stall later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValuesWarmer

A **class** in `Root.Township`, the global namespace.

Startup component that loads the hashed item, material and page collection tables and a list of prefabs over several frames, to avoid a stall later.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HashedGeneralValuesWarmer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-framemillisecondallowance" /><code>{"private float frameMillisecondAllowance"}</code> | <span className="api-desc">Milliseconds of prefab loading allowed per frame.</span> |
| <Link id="m-prefabstowarm" /><code>{"private uint[] prefabsToWarm"}</code> | <span className="api-desc">Hashes of prefabs to load early.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private async void Awake()"}</code> | <span className="api-desc">Runs `Initialize` and then `WarmPrefabs`.</span> |
| <Link id="m-initialize" /><code>{"private async Task Initialize()"}</code> | <span className="api-desc">Loads the `Item`, `PhysicalMaterial` and `PageCollection` tables and the pickup type dictionary, yielding a frame between each.</span> |
| <Link id="m-warmprefabs" /><code>{"private async Task WarmPrefabs()"}</code> | <span className="api-desc">Loads each listed prefab, yielding a frame whenever the time budget is used up.</span> |

</details>
