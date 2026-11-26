---
title: "SchmeecheePlaySettings"
description: "Settings for ActiveSchmeecheePlay: a schmeechee runs about at random until it tires or gets stuck."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SchmeecheePlaySettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveSchmeecheePlay`: a schmeechee runs about at random until it tires or gets stuck. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveSchmeecheePlay`](/mod/game-api/types/alta-intelligence/activeschmeecheeplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SchmeecheePlaySettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveSchmeecheePlay` action for schmeechees, without a target. |
