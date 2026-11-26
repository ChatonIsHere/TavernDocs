---
title: "MaterialGroup"
description: "A ComponentGroup of renderers that all share one material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialGroup

A **class** in `Root.Township`, the global namespace.

A `ComponentGroup` of renderers that all share one material. Setting `Material` swaps it on every renderer in the group.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`ComponentGroup<Renderer>`](/mod/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Backing field for `Material`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; set; }"}</code> | <span className="api-desc">The group's material. Setting it updates every renderer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatematerials" /><code>{"void UpdateMaterials()"}</code> | <span className="api-desc">Sets the material on every renderer in the group.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: puts the material on any renderer that doesn't have it.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks item added so new renderers get the material.</span> |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/mod/game-api/types/global-c-d/componentgroup-t">{"ComponentGroup"}</Link>{"<Renderer> group, Renderer item)"}</code> | <span className="api-desc">Client: sets the material on a newly added renderer.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MaterialGroup`:

<div className="api-used-in">

[`Pointer.targetObject`](/mod/game-api/types/global-p/pointer#m-targetobject), [`Pointer.targetPrefab`](/mod/game-api/types/global-p/pointer#m-targetprefab), [`Pointer.targetPrefabAndroid`](/mod/game-api/types/global-p/pointer#m-targetprefabandroid), [`Rock.ores`](/mod/game-api/types/global-q-r/rock#m-ores).

</div>
