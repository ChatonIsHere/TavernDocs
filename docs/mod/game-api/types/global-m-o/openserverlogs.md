---
title: "OpenServerLogs"
description: "Unity editor menu item that opens the server folder (where server logs live) in Explorer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenServerLogs

A **class** in `Root.Township`, the global namespace.

Unity editor menu item that opens the server folder (where server logs live) in Explorer.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`AltaMenuItemBase.Township.Logs`](/mod/game-api/types/assembly-other/altamenuitembase-township-logs)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenServerLogs()"}</code> | <span className="api-desc">Creates an `OpenServerLogs` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"override string Description { get; }"}</code> | <span className="api-desc">Menu tooltip text.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"protected override void Run()"}</code> | <span className="api-desc">Opens `%appdata%/A Township Tale/Servers` in Explorer.</span> |
