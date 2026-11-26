---
title: "CharacterEye"
description: "Build-time setup for one character eye: when the prefab is baked it copies its position to the dummy's eye bone, adds a rotation limit and hands both to..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterEye

A **class** in `Root.Township`, `Alta.Character`.

Build-time setup for one character eye: when the prefab is baked it copies its position to the dummy's eye bone, adds a rotation limit and hands both to `EyeFocus`, then removes itself.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`RotationLimit`](/mod/game-api/types/alta-player/charactereye-rotationlimit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterEye()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | <span className="api-desc">Which rig bone is the eye.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Pointer to the character dummy whose rig holds the eye bone.</span> |
| <Link id="m-eyebone" /><code>{"private Transform eyeBone"}</code> | <span className="api-desc">The eye bone found during baking.</span> |
| <Link id="m-eyefocus" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/eyefocus">{"EyeFocus"}</Link>{" eyeFocus"}</code> | <span className="api-desc">The `EyeFocus` component set up with the eye bone and its limit.</span> |
| <Link id="m-limit" /><code>{"private RotationLimitSpline limit"}</code> | <span className="api-desc">The rotation limit added to the eye bone during baking.</span> |
| <Link id="m-limitarguments" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactereye-rotationlimit">{"CharacterEye.RotationLimit"}</Link>{" limitArguments"}</code> | <span className="api-desc">Axis, default rotation, twist limit and spline copied onto the eye's rotation limit.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Always 0.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | <span className="api-desc">Finds the eye bone on the dummy rig, copies this transform's local pose to it, adds a disabled `RotationLimitSpline` from `limitArguments` and sets up `eyeFocus`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Destroys this component after baking.</span> |

</details>
