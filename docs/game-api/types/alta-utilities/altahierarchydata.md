---
title: "AltaHierarchyData"
description: "Editor settings for Alta's custom hierarchy window: icons, a recompile beep and saved object pockets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaHierarchyData

A **class** in `Root.Township`, `Alta.Utilities.Hierarchy`.

Editor settings for Alta's custom hierarchy window: icons, a recompile beep and saved object pockets. `GetData` returns null in this build.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`Pocket`](/game-api/types/alta-utilities/altahierarchydata-pocket)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaHierarchyData()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbeepingwhenrecompiling" /><code>{"private bool isBeepingWhenRecompiling"}</code> | Backing field for `IsBeepingWhenRecompiling`. |
| <Link id="m-isrenderinghierarchyicons" /><code>{"private bool isRenderingHierarchyIcons"}</code> | Backing field for `IsRenderingHierarchyIcons`. |
| <Link id="m-projectpockets" /><code>{"private List<"}<Link to="/game-api/types/alta-utilities/altahierarchydata-pocket">{"AltaHierarchyData.Pocket"}</Link>{"> projectPockets"}</code> | Backing field for `ProjectPockets`. |
| <Link id="m-temporaryhierarchypath" /><code>{"private const string temporaryHierarchyPath"}</code> | Path for temporary hierarchy editor files, `/Temporary/Hierarchy/Editor/`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbeepingwhenrecompiling-2" /><code>{"bool IsBeepingWhenRecompiling { get; }"}</code> | Editor option: beep when scripts recompile. |
| <Link id="m-isrenderinghierarchyicons-2" /><code>{"bool IsRenderingHierarchyIcons { get; }"}</code> | Editor option: draw icons in the hierarchy window. |
| <Link id="m-projectpockets-2" /><code>{"List<"}<Link to="/game-api/types/alta-utilities/altahierarchydata-pocket">{"AltaHierarchyData.Pocket"}</Link>{"> ProjectPockets { get; }"}</code> | Saved named lists of project objects. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-validate" /><code>{"event Action Validate"}</code> | Event for when the data is validated. Nothing raises it in this build. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code>{"static "}<Link to="/game-api/types/alta-utilities/altahierarchydata">{"AltaHierarchyData"}</Link>{" GetData(bool isCreatingIfMissing = true)"}</code> | Returns the editor data asset. Always null in this build. |
