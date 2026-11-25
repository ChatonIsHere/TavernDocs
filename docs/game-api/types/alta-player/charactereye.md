---
title: "CharacterEye"
description: "class CharacterEye in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterEye

A **class** in `Root.Township`, `Alta.Character`.

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

| Member |
| --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |
| <Link id="m-eyebone" /><code>{"private Transform eyeBone"}</code> |
| <Link id="m-eyefocus" /><code>{"private "}<Link to="/game-api/types/alta-player/eyefocus">{"EyeFocus"}</Link>{" eyeFocus"}</code> |
| <Link id="m-limit" /><code>{"private RotationLimitSpline limit"}</code> |
| <Link id="m-limitarguments" /><code>{"private "}<Link to="/game-api/types/alta-player/charactereye-rotationlimit">{"CharacterEye.RotationLimit"}</Link>{" limitArguments"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |

</details>
