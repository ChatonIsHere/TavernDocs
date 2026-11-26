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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/mod/game-api/types/alta-menus/panel), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TabbedPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alwaysreturntostart" /><code>{"private bool alwaysReturnToStart"}</code> | <span className="api-desc">If true (default), the panel goes back to the starting tab every time it is enabled.</span> |
| <Link id="m-isswitchingtostart" /><code>{"private bool isSwitchingToStart"}</code> | <span className="api-desc">Whether the next `OnEnable` should switch to the starting tab.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-startingtab" /><code>{"private int startingTab"}</code> | <span className="api-desc">Index in `tabs` of the tab shown first.</span> |
| <Link id="m-tabs" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/tab">{"Tab"}</Link>{"[] tabs"}</code> | <span className="api-desc">The tabs this panel can switch between.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenttab" /><code><Link to="/mod/game-api/types/alta-menus/tab">{"Tab"}</Link>{" CurrentTab { get; private set; }"}</code> | <span className="api-desc">The tab that is active now.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-switchtotab" /><code>{"void SwitchToTab("}<Link to="/mod/game-api/types/alta-menus/tab">{"Tab"}</Link>{" tab)"}</code> | <span className="api-desc">Closes the window's popups, deactivates the current tab and activates the given one. Logs an error if the tab isn't in `tabs`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Switches to the starting tab; only the first time unless `alwaysReturnToStart` is set.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that removes null entries from `tabs`.</span> |

</details>
