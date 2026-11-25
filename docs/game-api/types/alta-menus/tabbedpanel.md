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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TabbedPanel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alwaysreturntostart" /><code>{"private bool alwaysReturnToStart"}</code> |  |
| <Link id="m-isswitchingtostart" /><code>{"private bool isSwitchingToStart"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-startingtab" /><code>{"private int startingTab"}</code> |  |
| <Link id="m-tabs" /><code>{"private "}<Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{"[] tabs"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenttab" /><code><Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{" CurrentTab { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-switchtotab" /><code>{"void SwitchToTab("}<Link to="/game-api/types/alta-menus/tab">{"Tab"}</Link>{" tab)"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
