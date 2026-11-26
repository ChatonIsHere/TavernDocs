---
title: "Tab"
description: "Client: a menu panel that shows and hides by turning its game object on and off, with no animation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Tab

A **class** in `Root.Township`, `Alta.Meta.UI`.

Client: a menu panel that shows and hides by turning its game object on and off, with no animation.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tab()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalsetstate" /><code>{"protected override void InternalSetState(bool state, Action onFinished = null)"}</code> | Turns the game object on or off and calls `onFinished` straight away. |

## Used in

Members of other types that take, return or hold a `Tab`:

[`TabbedPanel.CurrentTab`](/game-api/types/alta-menus/tabbedpanel#m-currenttab), [`TabbedPanel.SwitchToTab`](/game-api/types/alta-menus/tabbedpanel#m-switchtotab), [`TabbedPanel.tabs`](/game-api/types/alta-menus/tabbedpanel#m-tabs).
