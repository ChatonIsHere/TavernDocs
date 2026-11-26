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
| <Link id="m-ctor" /><code>{"ObjectNamesInFolder()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assettypeconstraint" /><code>{"private string assetTypeConstraint"}</code> | Asset type to limit the search to. |
| <Link id="m-containingbehaviours" /><code>{"private string[] containingBehaviours"}</code> | Component type names a GameObject must have to be listed. |
| <Link id="m-folderpath" /><code>{"private string folderPath"}</code> | Asset folder to collect names from. |
| <Link id="m-getnames" /><code>{"private bool getNames"}</code> | Inspector button that runs `GetNames`. |
| <Link id="m-objectnames" /><code>{"private string[] objectNames"}</code> | The stored names. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completions" /><code>{"string[] Completions { get; }"}</code> | The stored names, offered as auto-completions. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnames-2" /><code>{"void GetNames()"}</code> | Meant to collect names from `folderPath`; in this build it does no search and sets `objectNames` to an empty list. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasbehaviours" /><code>{"private bool HasBehaviours(Object obj)"}</code> | True if the object is a GameObject with every component type in `containingBehaviours`. Not called in this build. |

</details>
