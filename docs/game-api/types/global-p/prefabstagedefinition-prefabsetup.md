---
title: "PrefabStageDefinition.PrefabSetup"
description: "One stage of a PrefabStageDefinition: the prefab to use and its local offset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabStageDefinition.PrefabSetup

A **class** in `Root.Township`, no namespace.

One stage of a `PrefabStageDefinition`: the prefab to use and its local offset.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PrefabStageDefinition`](/game-api/types/global-p/prefabstagedefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabSetup()"}</code> | Creates a `PrefabStageDefinition.PrefabSetup` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | Backing field for `LocalPosition`. |
| <Link id="m-localrotation" /><code>{"private Vector3 localRotation"}</code> | Backing field for `LocalRotation`. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Backing field for `Prefab`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | Local position of the stage prefab. |
| <Link id="m-localrotation-2" /><code>{"Vector3 LocalRotation { get; }"}</code> | Local rotation as Euler angles. |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | The network prefab for this stage. |

## Used in

Members of other types that take, return or hold a `PrefabSetup`:

[`PrefabStageDefinition.GetStage`](/game-api/types/global-p/prefabstagedefinition#m-getstage), [`PrefabStageDefinition.stages`](/game-api/types/global-p/prefabstagedefinition#m-stages), [`PrefabStageDefinition.Stages`](/game-api/types/global-p/prefabstagedefinition#m-stages-2).
