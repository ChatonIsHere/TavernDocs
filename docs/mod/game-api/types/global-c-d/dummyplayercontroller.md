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
| <Link id="m-ctor" /><code>{"DummyPlayerController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | Throws `NotImplementedException`. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | Never set, so always null. |
