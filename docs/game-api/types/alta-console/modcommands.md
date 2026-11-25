---
title: "ModCommands"
description: "static class ModCommands in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModCommands

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `WithPermissionOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-addmod" /><code>{"static void AddMod(string name, string content, bool isOverride)"}</code> |
| <Link id="m-getpath" /><code>{"static string GetPath()"}</code> |
| <Link id="m-listmods" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-console/modinfo">{"ModInfo"}</Link>{"> ListMods()"}</code> |
| <Link id="m-reloadmods" /><code>{"static void ReloadMods()"}</code> |
| <Link id="m-removemod" /><code>{"static void RemoveMod(string name)"}</code> |
| <Link id="m-restartmod" /><code>{"static void RestartMod(string name)"}</code> |
| <Link id="m-startmod" /><code>{"static void StartMod(string name)"}</code> |
| <Link id="m-stopmod" /><code>{"static void StopMod(string name)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getmods" /><code>{"private static IEnumerable<ScriptBundleLoader.ScriptBundle> GetMods(string name)"}</code> |

</details>
