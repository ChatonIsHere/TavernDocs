---
title: "EmptyAttackDirectionAnimation"
description: "Do-nothing IAttackDirectionAnimation used by AttackDirectionCore when a layer, side or up animation isn't set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyAttackDirectionAnimation

A **class** in `Root.Township`, `Alta.Intelligence`.

Do-nothing `IAttackDirectionAnimation` used by `AttackDirectionCore` when a layer, side or up animation isn't set.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`IAttackDirectionAnimation`](/mod/game-api/types/alta-intelligence/iattackdirectionanimation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmptyAttackDirectionAnimation()"}</code> | <span className="api-desc">Creates an `EmptyAttackDirectionAnimation` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/emptyattackdirectionanimation">{"EmptyAttackDirectionAnimation"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The single shared instance.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Disable()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setdirection" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.SetDirection(int direction)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setup" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Setup("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-update" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Update(float lerp)"}</code> | <span className="api-desc">Does nothing.</span> |

</details>
