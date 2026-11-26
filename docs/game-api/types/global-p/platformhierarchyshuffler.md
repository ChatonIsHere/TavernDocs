---
title: "PlatformHierarchyShuffler"
description: "Build-time bake step that moves chosen transforms under a new parent on one platform, then removes itself (or its whole object)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformHierarchyShuffler

A **class** in `Root.Township`, no namespace.

Build-time bake step that moves chosen transforms under a new parent on one platform, then removes itself (or its whole object).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformHierarchyShuffler()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finalparent" /><code>{"private Transform finalParent"}</code> | The new parent for the targets. |
| <Link id="m-isdestroyingthisgameobjectwhendone" /><code>{"private bool isDestroyingThisGameObjectWhenDone"}</code> | Whether to destroy the whole object after baking on the target platform. |
| <Link id="m-targetplatform" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" targetPlatform"}</code> | Platforms this shuffle applies to. |
| <Link id="m-targets" /><code>{"private Transform[] targets"}</code> | Transforms to move. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order, 1. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | On the target platform, reparents every target under `finalParent`. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Destroys this object on the target platform when set to, otherwise just this component. |

</details>
