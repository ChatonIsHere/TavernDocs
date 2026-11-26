---
title: "SchmeecheePlantSettings"
description: "Settings for ActiveSchmeecheePlant: a schmeechee buries itself in the ground and sleeps for a random time, then pops out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SchmeecheePlantSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveSchmeecheePlant`: a schmeechee buries itself in the ground and sleeps for a random time, then pops out. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveSchmeecheePlant`](/mod/game-api/types/alta-intelligence/activeschmeecheeplant)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SchmeecheePlantSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveSchmeecheePlant` action for schmeechees, without a target. |
