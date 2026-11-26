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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`SimpleIKController`](/mod/game-api/types/alta-player/simpleikcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpineController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gravityweigth" /><code>{"float gravityWeigth"}</code> | <span className="api-desc">How strongly the spine follows the target's up, 0 to 1.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodytarget" /><code>{"private Transform bodyTarget"}</code> | <span className="api-desc">Transform whose up direction the spine leans toward.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachedneutral" /><code>{"protected Quaternion[] CachedNeutral { get; private set; }"}</code> | <span className="api-desc">Starting local rotation of each bone after the first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | <span className="api-desc">Turns each bone toward the body target's up, with the blend shrinking by `Lerp` per bone.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Maps the bones and caches each bone's starting local rotation.</span> |
