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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IAttackDirectionAnimation`](/game-api/types/alta-intelligence/iattackdirectionanimation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmptyAttackDirectionAnimation()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/emptyattackdirectionanimation">{"EmptyAttackDirectionAnimation"}</Link>{" Instance { get; }"}</code> | The single shared instance. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Disable()"}</code> | Does nothing. |
| <Link id="m-setdirection" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.SetDirection(int direction)"}</code> | Does nothing. |
| <Link id="m-setup" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Setup("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, string parameterName)"}</code> | Does nothing. |
| <Link id="m-update" /><code>{"private void Alta.Intelligence.IAttackDirectionAnimation.Update(float lerp)"}</code> | Does nothing. |

</details>
