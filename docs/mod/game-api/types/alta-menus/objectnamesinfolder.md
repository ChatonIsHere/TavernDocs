---
title: "ObjectNamesInFolder"
description: "Asset that supplies a list of object names as console auto-completions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectNamesInFolder

A **class** in `Root.Township`, `Alta.Meta.UI`.

Asset that supplies a list of object names as console auto-completions. Created from the Township, Object Names In Folder menu.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `ScriptableObject`, [`IAutoCompletionSource`](/mod/game-api/types/alta-menus/iautocompletionsource)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectNamesInFolder()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assettypeconstraint" /><code>{"private string assetTypeConstraint"}</code> | <span className="api-desc">Asset type to limit the search to.</span> |
| <Link id="m-containingbehaviours" /><code>{"private string[] containingBehaviours"}</code> | <span className="api-desc">Component type names a GameObject must have to be listed.</span> |
| <Link id="m-folderpath" /><code>{"private string folderPath"}</code> | <span className="api-desc">Asset folder to collect names from.</span> |
| <Link id="m-getnames" /><code>{"private bool getNames"}</code> | <span className="api-desc">Inspector button that runs `GetNames`.</span> |
| <Link id="m-objectnames" /><code>{"private string[] objectNames"}</code> | <span className="api-desc">The stored names.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completions" /><code>{"string[] Completions { get; }"}</code> | <span className="api-desc">The stored names, offered as auto-completions.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnames-2" /><code>{"void GetNames()"}</code> | <span className="api-desc">Meant to collect names from `folderPath`; in this build it does no search and sets `objectNames` to an empty list.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasbehaviours" /><code>{"private bool HasBehaviours(Object obj)"}</code> | <span className="api-desc">True if the object is a GameObject with every component type in `containingBehaviours`. Not called in this build.</span> |

</details>
