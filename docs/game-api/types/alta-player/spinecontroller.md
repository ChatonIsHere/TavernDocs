---
title: "SpineController"
description: "Simple spine IK that bends each spine bone toward the body target's up direction, less so further up the chain."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpineController

A **class** in `Root.Township`, `Alta.Character`.

Simple spine IK that bends each spine bone toward the body target's up direction, less so further up the chain.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`SimpleIKController`](/game-api/types/alta-player/simpleikcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpineController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gravityweigth" /><code>{"float gravityWeigth"}</code> | How strongly the spine follows the target's up, 0 to 1. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodytarget" /><code>{"private Transform bodyTarget"}</code> | Transform whose up direction the spine leans toward. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachedneutral" /><code>{"protected Quaternion[] CachedNeutral { get; private set; }"}</code> | Starting local rotation of each bone after the first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Turns each bone toward the body target's up, with the blend shrinking by `Lerp` per bone. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Maps the bones and caches each bone's starting local rotation. |
