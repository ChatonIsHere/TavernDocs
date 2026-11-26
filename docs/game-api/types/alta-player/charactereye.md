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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`RotationLimit`](/game-api/types/alta-player/charactereye-rotationlimit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CharacterEye()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | Which rig bone is the eye. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy whose rig holds the eye bone. |
| <Link id="m-eyebone" /><code>{"private Transform eyeBone"}</code> | The eye bone found during baking. |
| <Link id="m-eyefocus" /><code>{"private "}<Link to="/game-api/types/alta-player/eyefocus">{"EyeFocus"}</Link>{" eyeFocus"}</code> | The `EyeFocus` component set up with the eye bone and its limit. |
| <Link id="m-limit" /><code>{"private RotationLimitSpline limit"}</code> | The rotation limit added to the eye bone during baking. |
| <Link id="m-limitarguments" /><code>{"private "}<Link to="/game-api/types/alta-player/charactereye-rotationlimit">{"CharacterEye.RotationLimit"}</Link>{" limitArguments"}</code> | Axis, default rotation, twist limit and spline copied onto the eye's rotation limit. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Always 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | Finds the eye bone on the dummy rig, copies this transform's local pose to it, adds a disabled `RotationLimitSpline` from `limitArguments` and sets up `eyeFocus`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Destroys this component after baking. |

</details>
