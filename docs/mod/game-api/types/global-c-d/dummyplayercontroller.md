---
title: "DummyPlayerController"
description: "Placeholder PlayerController with no body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DummyPlayerController

A **class** in `Root.Township`, the global namespace.

Placeholder `PlayerController` with no body. Its `Head` throws, so it is only safe where the head is never read.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`PlayerController`](/mod/game-api/types/global-p/playercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DummyPlayerController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">Throws `NotImplementedException`.</span> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">Never set, so always null.</span> |
