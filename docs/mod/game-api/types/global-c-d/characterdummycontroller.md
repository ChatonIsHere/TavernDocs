---
title: "CharacterDummyController"
description: "A stub PlayerController with an empty Awake and no head transforms, probably for character dummies that need a controller type without the real setup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterDummyController

A **class** in `Root.Township`, the global namespace.

A stub `PlayerController` with an empty `Awake` and no head transforms, probably for character dummies that need a controller type without the real setup.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`PlayerController`](/mod/game-api/types/global-p/playercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterDummyController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">Always null.</span> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">Always null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Empty override, so none of the base controller setup runs.</span> |
