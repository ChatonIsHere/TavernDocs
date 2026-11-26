---
title: "ActiveBlockCanceleableWander"
description: "A wander action that cancels itself when the agent's walker is blocked, or when it needs a target and has lost it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveBlockCanceleableWander

A **class** in `Root.Township`, `Alta.Intelligence`.

A wander action that cancels itself when the agent's walker is blocked, or when it needs a target and has lost it.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveWander`](/game-api/types/alta-intelligence/activewander)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveBlockCanceleableWander()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Runs the normal wander update, then cancels if the target is gone (when one is used) or the walker is blocked. |
