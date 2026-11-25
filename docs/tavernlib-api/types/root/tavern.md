---
title: "Tavern"
description: "The MelonPlugin itself. const string Version (see Which TavernLib is running)."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Tavern

A **class** in `TavernLib`, `TavernLib`.

The `MelonPlugin` itself. `const string Version` (see Which TavernLib is running).

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
| <Link id="m-version" /><code>{"const string Version"}</code> |  |
| <Link id="m-didinitiallogarchive" /><code>{"private bool _didInitialLogArchive"}</code> |  |
| <Link id="m-logarchivetimer" /><code>{"private Timer _logArchiveTimer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"internal static MelonLogger.Instance Logger { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onearlyinitializemelon" /><code>{"override void OnEarlyInitializeMelon()"}</code> |  |
| <Link id="m-oninitializemelon" /><code>{"override void OnInitializeMelon()"}</code> |  |
| <Link id="m-onlateinitializemelon" /><code>{"override void OnLateInitializeMelon()"}</code> |  |
| <Link id="m-setupselectionfixpatch" /><code>{"private void SetupSelectionFixPatch()"}</code> |  |
| <Link id="m-setupservices" /><code>{"private void SetupServices()"}</code> |  |
| <Link id="m-startlogarchivetimer" /><code>{"private void StartLogArchiveTimer()"}</code> |  |
