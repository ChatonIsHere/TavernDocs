---
title: "MaterialGroup"
description: "A ComponentGroup of renderers that all share one material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialGroup

A **class** in `Root.Township`, no namespace.

A `ComponentGroup` of renderers that all share one material. Setting `Material` swaps it on every renderer in the group.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`ComponentGroup<Renderer>`](/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MaterialGroup()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | Backing field for `Material`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; set; }"}</code> | The group's material. Setting it updates every renderer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatematerials" /><code>{"void UpdateMaterials()"}</code> | Sets the material on every renderer in the group. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: puts the material on any renderer that doesn't have it. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks item added so new renderers get the material. |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/game-api/types/global-c-d/componentgroup-t">{"ComponentGroup"}</Link>{"<Renderer> group, Renderer item)"}</code> | Client: sets the material on a newly added renderer. |

</details>

## Used in

Members of other types that take, return or hold a `MaterialGroup`:

[`Pointer.targetObject`](/game-api/types/global-p/pointer#m-targetobject), [`Pointer.targetPrefab`](/game-api/types/global-p/pointer#m-targetprefab), [`Pointer.targetPrefabAndroid`](/game-api/types/global-p/pointer#m-targetprefabandroid), [`Rock.ores`](/game-api/types/global-q-r/rock#m-ores).
