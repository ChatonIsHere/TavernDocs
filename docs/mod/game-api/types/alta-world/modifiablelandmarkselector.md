---
title: "ModifiableLandmarkSelector"
description: "Swaps a landmark between its original and modified look, based on the ModifiableStaticManager state for its hash, and follows changes to that state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableLandmarkSelector

A **class** in `Root.Township`, `Alta.Chunks`.

Swaps a landmark between its original and modified look, based on the `ModifiableStaticManager` state for its hash, and follows changes to that state.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableLandmarkSelector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-final" /><code>{"private GameObject final"}</code> | <span className="api-desc">Backing field for `Final`.</span> |
| <Link id="m-modifiablehash" /><code>{"private uint modifiableHash"}</code> | <span className="api-desc">Backing field for `ModifiableHash`.</span> |
| <Link id="m-original" /><code>{"private GameObject original"}</code> | <span className="api-desc">Backing field for `Original`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-final-2" /><code>{"GameObject Final { get; set; }"}</code> | <span className="api-desc">Object shown when the landmark is modified.</span> |
| <Link id="m-modifiablehash-2" /><code>{"uint ModifiableHash { get; set; }"}</code> | <span className="api-desc">Hash of the modifiable static object this follows.</span> |
| <Link id="m-original-2" /><code>{"GameObject Original { get; set; }"}</code> | <span className="api-desc">Object shown when the landmark is not modified.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-select" /><code>{"void Select(bool isModified)"}</code> | <span className="api-desc">Shows `Final` and hides `Original` when modified, and the other way round when not.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Reads the current modified state, shows the matching object and subscribes to `ObjectChanged`.</span> |
| <Link id="m-checkchange" /><code>{"private void CheckChange(uint objectHash, bool isModified)"}</code> | <span className="api-desc">Calls `Select` when the changed object's hash is this one's.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from `ObjectChanged`.</span> |

</details>
