---
title: "PlatformHierarchyShuffler"
description: "Build-time bake step that moves chosen transforms under a new parent on one platform, then removes itself (or its whole object)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformHierarchyShuffler

A **class** in `Root.Township`, the global namespace.

Build-time bake step that moves chosen transforms under a new parent on one platform, then removes itself (or its whole object).

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformHierarchyShuffler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finalparent" /><code>{"private Transform finalParent"}</code> | <span className="api-desc">The new parent for the targets.</span> |
| <Link id="m-isdestroyingthisgameobjectwhendone" /><code>{"private bool isDestroyingThisGameObjectWhenDone"}</code> | <span className="api-desc">Whether to destroy the whole object after baking on the target platform.</span> |
| <Link id="m-targetplatform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatform"}</code> | <span className="api-desc">Platforms this shuffle applies to.</span> |
| <Link id="m-targets" /><code>{"private Transform[] targets"}</code> | <span className="api-desc">Transforms to move.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Bake order, 1.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">On the target platform, reparents every target under `finalParent`.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Destroys this object on the target platform when set to, otherwise just this component.</span> |

</details>
