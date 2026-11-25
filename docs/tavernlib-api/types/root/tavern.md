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

- **Listed in** [TavernLib](/tavernlib-api/types/root)
- **Inherits or implements** `MelonPlugin`
- **Documented in** [Internals](/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tavern()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"const string Version"}</code> | TavernLib's version string, the same one given to `MelonInfo`. |
| <Link id="m-didinitiallogarchive" /><code>{"private bool _didInitialLogArchive"}</code> |  |
| <Link id="m-logarchivetimer" /><code>{"private Timer _logArchiveTimer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"internal static MelonLogger.Instance Logger { get; private set; }"}</code> | TavernLib's own `MelonLogger.Instance`, set in `OnEarlyInitializeMelon`. `TavernLogger` writes through it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onearlyinitializemelon" /><code>{"override void OnEarlyInitializeMelon()"}</code> | Sets up the services. Server: console tokens, mod reconcile, `TavernManager`, roles, backups. Client: mod folders and Quick join. Both: `EntranceMessageHandler`. |
| <Link id="m-oninitializemelon" /><code>{"override void OnInitializeMelon()"}</code> | Collects TavernLib's console command modules into the game's `CommandService.CommandCollection`. |
| <Link id="m-onlateinitializemelon" /><code>{"override void OnLateInitializeMelon()"}</code> | Hooks the `select` object search and applies `GameCommandPatches`, once Unity is up. |
| <Link id="m-setupselectionfixpatch" /><code>{"private void SetupSelectionFixPatch()"}</code> |  |
| <Link id="m-setupservices" /><code>{"private void SetupServices()"}</code> |  |
| <Link id="m-startlogarchivetimer" /><code>{"private void StartLogArchiveTimer()"}</code> |  |
