---
title: "SimpleIKController"
description: "Base for the simple bone-chain controllers (NeckController, SpineController): maps a list of rig bones from the character dummy and gives them a rotation..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleIKController

An **abstract class** in `Root.Township`, `Alta.Character`.

Base for the simple bone-chain controllers (`NeckController`, `SpineController`): maps a list of rig bones from the character dummy and gives them a rotation buffer and lerp factor.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`NeckController`](/mod/game-api/types/alta-player/neckcontroller), [`SpineController`](/mod/game-api/types/alta-player/spinecontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SimpleIKController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] bones"}</code> | The rig bones in the chain. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy whose rig holds the bones. |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> | Backing field for `Lerp`. Default 0.5. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"protected Transform[] Bones { get; private set; }"}</code> | The mapped bone transforms, in chain order. |
| <Link id="m-boneslength" /><code>{"protected int BonesLength { get; private set; }"}</code> | Number of bones in the chain. |
| <Link id="m-framerotations" /><code>{"protected Quaternion[] FrameRotations { get; private set; }"}</code> | Scratch buffer for each bone's rotation this frame. |
| <Link id="m-lerp-2" /><code>{"protected float Lerp { get; }"}</code> | Blend factor from 0 to 1 used by subclasses. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Maps the bone identifiers to the dummy's bones and sets up the rotation buffer. |
