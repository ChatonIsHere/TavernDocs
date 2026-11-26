---
title: "Tavern"
description: "TavernLib's MelonPlugin."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Tavern

A **class** in `TavernLib`, `TavernLib`.

TavernLib's `MelonPlugin`. It registers TavernLib's services, collects its console commands and applies its late patches. Both sides; MelonLoader creates it.

- **Listed in** [TavernLib](/mod/tavernlib-api/types/root)
- **Inherits or implements** `MelonPlugin`
- **Documented in** [Internals](/mod/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tavern()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"const string Version"}</code> | TavernLib's version string, the same one given to `MelonInfo`. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-didinitiallogarchive" /><code>{"private bool _didInitialLogArchive"}</code> | Set after the timer's first tick, which archives the log once at startup. |
| <Link id="m-logarchivetimer" /><code>{"private Timer _logArchiveTimer"}</code> | Timer that checks every 60 seconds whether `unity-log.csv` needs archiving; started on servers that TavernLib manages auth for. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"internal static MelonLogger.Instance Logger { get; private set; }"}</code> | TavernLib's own `MelonLogger.Instance`, set in `OnEarlyInitializeMelon`. `TavernLogger` writes through it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onearlyinitializemelon" /><code>{"override void OnEarlyInitializeMelon()"}</code> | Sets up the services. Server: console tokens, mod reconcile, `TavernManager`, roles, backups. Client: mod folders and Quick join. Both: `EntranceMessageHandler`. |
| <Link id="m-oninitializemelon" /><code>{"override void OnInitializeMelon()"}</code> | Collects TavernLib's console command modules into the game's `CommandService.CommandCollection`. |
| <Link id="m-onlateinitializemelon" /><code>{"override void OnLateInitializeMelon()"}</code> | Hooks the `select` object search and applies `GameCommandPatches`, once Unity is up. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupselectionfixpatch" /><code>{"private void SetupSelectionFixPatch()"}</code> | Hooks `SelectionCommandModule.FindObjects` so `select find` runs `SelectFixPatch.SelectionFix` instead. |
| <Link id="m-setupservices" /><code>{"private void SetupServices()"}</code> | Registers TavernLib's services at early init: console tokens, mod reconcile, `TavernManager`, roles and backups on a server, and quick join on a client, plus `EntranceMessageHandler` on both. |
| <Link id="m-startlogarchivetimer" /><code>{"private void StartLogArchiveTimer()"}</code> | Starts the timer that archives the log on its first tick (10 s after start) and then whenever it passes the size limit. |

</details>
