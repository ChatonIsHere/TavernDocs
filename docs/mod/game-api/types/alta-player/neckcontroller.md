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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`SimpleIKController`](/mod/game-api/types/alta-player/simpleikcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NeckController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | <span className="api-desc">Transform whose rotation the head follows.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachedinverseneutral" /><code>{"protected Quaternion[] CachedInverseNeutral { get; private set; }"}</code> | <span className="api-desc">Inverse starting local rotation of each bone after the first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | <span className="api-desc">Works down from the head, lerping each bone toward the bone above's rotation, then applies them all.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Maps the bones and caches the inverse of each bone's starting local rotation.</span> |
