---
title: "ModCommands"
description: "Console module mods: manages the game's built-in C# script mods (the .cs files DemoLoadScripts loads from the mods folder)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModCommands

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `mods`: manages the game's built-in C# script mods (the `.cs` files `DemoLoadScripts` loads from the mods folder). Needs the `server_owner` permission.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `WithPermissionOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmod" /><code>{"static void AddMod(string name, string content, bool isOverride)"}</code> | `mods add`: writes the given source text to `name.cs` in the mods folder and loads it; refuses an existing name unless overriding. |
| <Link id="m-getpath" /><code>{"static string GetPath()"}</code> | `mods path`: returns the mods folder path. |
| <Link id="m-listmods" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/modinfo">{"ModInfo"}</Link>{"> ListMods()"}</code> | `mods list`: returns each loaded mod's name and whether it is active. |
| <Link id="m-reloadmods" /><code>{"static void ReloadMods()"}</code> | `mods refresh`: rescans the mods folder for new mods. |
| <Link id="m-removemod" /><code>{"static void RemoveMod(string name)"}</code> | `mods remove`: stops the matching mods, deletes their files and drops them from the loaded list. |
| <Link id="m-restartmod" /><code>{"static void RestartMod(string name)"}</code> | `mods restart`: stops the matching mods' instances and creates new ones. |
| <Link id="m-startmod" /><code>{"static void StartMod(string name)"}</code> | `mods start`: creates new instances of the matching mods. |
| <Link id="m-stopmod" /><code>{"static void StopMod(string name)"}</code> | `mods stop`: stops the matching mods' instances. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getmods" /><code>{"private static IEnumerable<ScriptBundleLoader.ScriptBundle> GetMods(string name)"}</code> | Looks up loaded mod bundles by name (case-insensitive), or all of them for `*`. Used by the other commands. |

</details>
