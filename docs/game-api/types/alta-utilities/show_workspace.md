---
title: "Show_Workspace"
description: "Editor menu item under Township/Utility."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Show_Workspace

A **class** in `Root.Township`, `Alta.Utilities`.

Editor menu item under Township/Utility. Its `Run` reads the workspace folder name from the data path but does nothing with it.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`AltaMenuItemBase.Township.Utility`](/game-api/types/assembly-other/altamenuitembase-township-utility)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Show_Workspace()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. Not used. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"protected override void Run()"}</code> | Splits `Application.dataPath` and reads the third-from-last part, then discards it. |
