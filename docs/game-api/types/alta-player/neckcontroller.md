---
title: "NeckController"
description: "Simple neck IK: sets the last bone to the head target's rotation and eases each bone below it toward following that rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NeckController

A **class** in `Root.Township`, `Alta.Character`.

Simple neck IK: sets the last bone to the head target's rotation and eases each bone below it toward following that rotation.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`SimpleIKController`](/game-api/types/alta-player/simpleikcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NeckController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | Transform whose rotation the head follows. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachedinverseneutral" /><code>{"protected Quaternion[] CachedInverseNeutral { get; private set; }"}</code> | Inverse starting local rotation of each bone after the first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Works down from the head, lerping each bone toward the bone above's rotation, then applies them all. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Maps the bones and caches the inverse of each bone's starting local rotation. |
