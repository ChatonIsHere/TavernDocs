---
title: "PrefabStageDefinition.PrefabSetup"
description: "One stage of a PrefabStageDefinition: the prefab to use and its local offset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabStageDefinition.PrefabSetup

A **class** in `Root.Township`, the global namespace.

One stage of a `PrefabStageDefinition`: the prefab to use and its local offset.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PrefabStageDefinition`](/mod/game-api/types/global-p/prefabstagedefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabSetup()"}</code> | <span className="api-desc">Creates a `PrefabStageDefinition.PrefabSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | <span className="api-desc">Backing field for `LocalPosition`.</span> |
| <Link id="m-localrotation" /><code>{"private Vector3 localRotation"}</code> | <span className="api-desc">Backing field for `LocalRotation`.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | <span className="api-desc">Local position of the stage prefab.</span> |
| <Link id="m-localrotation-2" /><code>{"Vector3 LocalRotation { get; }"}</code> | <span className="api-desc">Local rotation as Euler angles.</span> |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">The network prefab for this stage.</span> |

## Used in

Members of other types that take, return or hold a `PrefabSetup`:

<div className="api-used-in">

[`PrefabStageDefinition.GetStage`](/mod/game-api/types/global-p/prefabstagedefinition#m-getstage), [`PrefabStageDefinition.stages`](/mod/game-api/types/global-p/prefabstagedefinition#m-stages), [`PrefabStageDefinition.Stages`](/mod/game-api/types/global-p/prefabstagedefinition#m-stages-2).

</div>
