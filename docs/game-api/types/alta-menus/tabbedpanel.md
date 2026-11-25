---
title: "TabbedPanel"
description: "class TabbedPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TabbedPanel

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/game-api/types/alta-menus/panel), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TabbedPanel()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-alwaysreturntostart" /><code>{"private bool alwaysReturnToStart"}</code> |
| <Link id="m-isswitchingtostart" /><code>{"private bool isSwitchingToStart"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-startingtab" /><code>{"private int startingTab"}</code> |
| <Link id="m-tabs" /><code>{"private "}<Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{"[] tabs"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currenttab" /><code><Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{" CurrentTab { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-switchtotab" /><code>{"void SwitchToTab("}<Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{" tab)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |

</details>
