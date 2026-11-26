---
title: "CharacterDummyController"
description: "A stub PlayerController with an empty Awake and no head transforms, probably for character dummies that need a controller type without the real setup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterDummyController

A **class** in `Root.Township`, no namespace.

A stub `PlayerController` with an empty `Awake` and no head transforms, probably for character dummies that need a controller type without the real setup.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PlayerController`](/game-api/types/global-p/playercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterDummyController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | Always null. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | Always null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Empty override, so none of the base controller setup runs. |
