---
title: "SpawnModifierPointNormalRedirect"
description: "Forest spawn modifier for point-and-normal stages that switches the rest of the fill to another fill set's modifiers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifierPointNormalRedirect

A **class** in `Root.Township`, the global namespace.

Forest spawn modifier for point-and-normal stages that switches the rest of the fill to another fill set's modifiers.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnModifierPointNormalRedirect()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestfillset">{"ForestFillSet"}</Link>{" fillSet"}</code> | Fill set whose modifiers take over. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" point, ref float weight)"}</code> | Replaces the setup's spawn modifiers with the fill set's. Weight is untouched. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Also initializes the target fill set's modifiers. |
