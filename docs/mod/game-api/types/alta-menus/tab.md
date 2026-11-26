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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/mod/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalsetstate" /><code>{"protected override void InternalSetState(bool state, Action onFinished = null)"}</code> | <span className="api-desc">Turns the game object on or off and calls `onFinished` straight away.</span> |

## Used in

Members of other types that take, return or hold a `Tab`:

<div className="api-used-in">

[`TabbedPanel.CurrentTab`](/mod/game-api/types/alta-menus/tabbedpanel#m-currenttab), [`TabbedPanel.SwitchToTab`](/mod/game-api/types/alta-menus/tabbedpanel#m-switchtotab), [`TabbedPanel.tabs`](/mod/game-api/types/alta-menus/tabbedpanel#m-tabs).

</div>
