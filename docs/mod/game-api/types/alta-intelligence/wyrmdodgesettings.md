---
title: "WyrmDodgeSettings"
description: "Wyrm action component for the dodge action."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmDodgeSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action component for the dodge action. Only targets within reach score.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/mod/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveDodge`](/mod/game-api/types/alta-intelligence/activedodge)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WyrmDodgeSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reach" /><code>{"private float reach"}</code> | Backing field for `Reach`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-reach-2" /><code>{"float Reach { get; }"}</code> | Distance beyond which a target scores zero (default 2). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Returns the `ActiveDodge` action for these settings. |

## Used in

Members of other types that take, return or hold a `WyrmDodgeSettings`:

[`ActiveDodge.GetAction`](/mod/game-api/types/alta-intelligence/activedodge#m-getaction).
