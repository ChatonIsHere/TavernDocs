---
title: "SimpleIKController"
description: "abstract class SimpleIKController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleIKController

An **abstract class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`NeckController`](/game-api/types/alta-player/neckcontroller), [`SpineController`](/game-api/types/alta-player/spinecontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected SimpleIKController()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bones" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] bones"}</code> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-bones-2" /><code>{"protected Transform[] Bones { get; private set; }"}</code> |
| <Link id="m-boneslength" /><code>{"protected int BonesLength { get; private set; }"}</code> |
| <Link id="m-framerotations" /><code>{"protected Quaternion[] FrameRotations { get; private set; }"}</code> |
| <Link id="m-lerp-2" /><code>{"protected float Lerp { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |
