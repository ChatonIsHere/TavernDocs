---
title: "DummyPlayerController"
description: "Placeholder PlayerController with no body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DummyPlayerController

A **class** in `Root.Township`, no namespace.

Placeholder `PlayerController` with no body. Its `Head` throws, so it is only safe where the head is never read.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PlayerController`](/game-api/types/global-p/playercontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DummyPlayerController()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | Throws `NotImplementedException`. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | Never set, so always null. |
