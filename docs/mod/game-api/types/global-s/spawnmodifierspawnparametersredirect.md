---
title: "SpawnModifierSpawnParametersRedirect"
description: "Forest spawn modifier for spawn parameter stages that switches the rest of the fill to another fill set's modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifierSpawnParametersRedirect

A **class** in `Root.Township`, the global namespace.

Forest spawn modifier for spawn parameter stages that switches the rest of the fill to another fill set's modifiers.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierSpawnParameters`](/mod/game-api/types/global-s/spawnmodifierspawnparameters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnModifierSpawnParametersRedirect()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" fillSet"}</code> | <span className="api-desc">Fill set whose modifiers take over.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Replaces the setup's spawn modifiers with the fill set's. Weight is untouched.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Also initializes the target fill set's modifiers.</span> |
