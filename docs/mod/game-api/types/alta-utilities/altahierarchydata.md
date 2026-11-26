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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`Pocket`](/mod/game-api/types/alta-utilities/altahierarchydata-pocket)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaHierarchyData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbeepingwhenrecompiling" /><code>{"private bool isBeepingWhenRecompiling"}</code> | <span className="api-desc">Backing field for `IsBeepingWhenRecompiling`.</span> |
| <Link id="m-isrenderinghierarchyicons" /><code>{"private bool isRenderingHierarchyIcons"}</code> | <span className="api-desc">Backing field for `IsRenderingHierarchyIcons`.</span> |
| <Link id="m-projectpockets" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-utilities/altahierarchydata-pocket">{"AltaHierarchyData.Pocket"}</Link>{"> projectPockets"}</code> | <span className="api-desc">Backing field for `ProjectPockets`.</span> |
| <Link id="m-temporaryhierarchypath" /><code>{"private const string temporaryHierarchyPath"}</code> | <span className="api-desc">Path for temporary hierarchy editor files, `/Temporary/Hierarchy/Editor/`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbeepingwhenrecompiling-2" /><code>{"bool IsBeepingWhenRecompiling { get; }"}</code> | <span className="api-desc">Editor option: beep when scripts recompile.</span> |
| <Link id="m-isrenderinghierarchyicons-2" /><code>{"bool IsRenderingHierarchyIcons { get; }"}</code> | <span className="api-desc">Editor option: draw icons in the hierarchy window.</span> |
| <Link id="m-projectpockets-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-utilities/altahierarchydata-pocket">{"AltaHierarchyData.Pocket"}</Link>{"> ProjectPockets { get; }"}</code> | <span className="api-desc">Saved named lists of project objects.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-validate" /><code>{"event Action Validate"}</code> | <span className="api-desc">Event for when the data is validated. Nothing raises it in this build.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/altahierarchydata">{"AltaHierarchyData"}</Link>{" GetData(bool isCreatingIfMissing = true)"}</code> | <span className="api-desc">Returns the editor data asset. Always null in this build.</span> |
