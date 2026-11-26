---
title: "OpenServerLogs"
description: "Unity editor menu item that opens the server folder (where server logs live) in Explorer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenServerLogs

A **class** in `Root.Township`, no namespace.

Unity editor menu item that opens the server folder (where server logs live) in Explorer.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`AltaMenuItemBase.Township.Logs`](/game-api/types/assembly-other/altamenuitembase-township-logs)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenServerLogs()"}</code> | Creates an `OpenServerLogs` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"override string Description { get; }"}</code> | Menu tooltip text. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"protected override void Run()"}</code> | Opens `%appdata%/A Township Tale/Servers` in Explorer. |
