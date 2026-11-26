---
title: "TabbedPanel"
description: "A UI Panel with a set of Tabs, one active at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TabbedPanel

A **class** in `Root.Township`, `Alta.Meta.UI`.

A UI `Panel` with a set of `Tab`s, one active at a time. Client UI.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/game-api/types/alta-menus/panel), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TabbedPanel()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alwaysreturntostart" /><code>{"private bool alwaysReturnToStart"}</code> | If true (default), the panel goes back to the starting tab every time it is enabled. |
| <Link id="m-isswitchingtostart" /><code>{"private bool isSwitchingToStart"}</code> | Whether the next `OnEnable` should switch to the starting tab. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-startingtab" /><code>{"private int startingTab"}</code> | Index in `tabs` of the tab shown first. |
| <Link id="m-tabs" /><code>{"private "}<Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{"[] tabs"}</code> | The tabs this panel can switch between. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenttab" /><code><Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{" CurrentTab { get; private set; }"}</code> | The tab that is active now. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-switchtotab" /><code>{"void SwitchToTab("}<Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{" tab)"}</code> | Closes the window's popups, deactivates the current tab and activates the given one. Logs an error if the tab isn't in `tabs`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Switches to the starting tab; only the first time unless `alwaysReturnToStart` is set. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that removes null entries from `tabs`. |

</details>
