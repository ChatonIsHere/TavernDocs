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
| <Link id="m-ctor" /><code>{"Tavern()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"const string Version"}</code> | <span className="api-desc">TavernLib's version string, the same one given to `MelonInfo`.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-didinitiallogarchive" /><code>{"private bool _didInitialLogArchive"}</code> | <span className="api-desc">Set after the timer's first tick, which archives the log once at startup.</span> |
| <Link id="m-logarchivetimer" /><code>{"private Timer _logArchiveTimer"}</code> | <span className="api-desc">Timer that checks every 60 seconds whether `unity-log.csv` needs archiving; started on servers that TavernLib manages auth for.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"internal static MelonLogger.Instance Logger { get; private set; }"}</code> | <span className="api-desc">TavernLib's own `MelonLogger.Instance`, set in `OnEarlyInitializeMelon`. `TavernLogger` writes through it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onearlyinitializemelon" /><code>{"override void OnEarlyInitializeMelon()"}</code> | <span className="api-desc">Sets up the services. Server: console tokens, mod reconcile, `TavernManager`, roles, backups. Client: mod folders and Quick join. Both: `EntranceMessageHandler`.</span> |
| <Link id="m-oninitializemelon" /><code>{"override void OnInitializeMelon()"}</code> | <span className="api-desc">Collects TavernLib's console command modules into the game's `CommandService.CommandCollection`.</span> |
| <Link id="m-onlateinitializemelon" /><code>{"override void OnLateInitializeMelon()"}</code> | <span className="api-desc">Hooks the `select` object search and applies `GameCommandPatches`, once Unity is up.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupselectionfixpatch" /><code>{"private void SetupSelectionFixPatch()"}</code> | <span className="api-desc">Hooks `SelectionCommandModule.FindObjects` so `select find` runs `SelectFixPatch.SelectionFix` instead.</span> |
| <Link id="m-setupservices" /><code>{"private void SetupServices()"}</code> | <span className="api-desc">Registers TavernLib's services at early init: console tokens, mod reconcile, `TavernManager`, roles and backups on a server, and quick join on a client, plus `EntranceMessageHandler` on both.</span> |
| <Link id="m-startlogarchivetimer" /><code>{"private void StartLogArchiveTimer()"}</code> | <span className="api-desc">Starts the timer that archives the log on its first tick (10 s after start) and then whenever it passes the size limit.</span> |

</details>
