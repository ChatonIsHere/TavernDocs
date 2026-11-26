---
title: "SchmeecheeFlipSettings"
description: "Settings for ActiveSchmeecheeFlip: an upside-down schmeechee pops itself back over with an impulse and torque."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SchmeecheeFlipSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveSchmeecheeFlip`: an upside-down schmeechee pops itself back over with an impulse and torque. Server only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSchmeecheeFlip`](/game-api/types/alta-intelligence/activeschmeecheeflip)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SchmeecheeFlipSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveSchmeecheeFlip` action for schmeechees, without a target. |
