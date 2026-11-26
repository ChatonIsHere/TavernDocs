---
title: "StreamerManager"
description: "Singleton (Instance) that loads and unloads chunk prefabs within a per-frame time budget and saves the world, including the server's timed auto save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamerManager

A **class** in `Root.Township`, no namespace.

Singleton (`Instance`) that loads and unloads chunk prefabs within a per-frame time budget and saves the world, including the server's timed auto save.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StreamerManager()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-s/streamermanager">{"StreamerManager"}</Link>{" Instance"}</code> | The active manager; a second copy destroys itself. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelcurrent" /><code>{"private CancellationTokenSource cancelCurrent"}</code> | Cancels the running save when an instant save starts. |
| <Link id="m-current" /><code>{"private Task current"}</code> | The save task in progress, or null. |
| <Link id="m-isautosaving" /><code>{"private bool isAutoSaving"}</code> | Whether the auto save loop should keep running. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for save progress and errors. |
| <Link id="m-minutesbetweenautosaves" /><code>{"private float minutesBetweenAutoSaves"}</code> | Minutes between auto saves, from the server config. |
| <Link id="m-streamingmillisecondsallowance" /><code>{"private float streamingMillisecondsAllowance"}</code> | Backing field for `StreamingTimeAllowanceMilliseconds` (2 ms by default). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-autosavingbehaviours" /><code>{"static List<"}<Link to="/game-api/types/global-i-l/iautosave">{"IAutoSave"}</Link>{"> AutoSavingBehaviours { get; }"}</code> | Objects whose `AutoSave` runs after the chunks are saved, such as `GameTaskManager` and `PerPlayerManager`. |
| <Link id="m-streamingtimeallowancemilliseconds" /><code>{"float StreamingTimeAllowanceMilliseconds { get; }"}</code> | Per-frame time budget in milliseconds for chunk streaming and spread-out saving. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-saveworld" /><code>{"async Task SaveWorld(bool isInstant)"}</code> | Saves every chunk, the auto save behaviours and all players, then flushes files and backs up changed remote files. An instant save blocks and cancels a running one. |
| <Link id="m-startautosave" /><code>{"void StartAutoSave()"}</code> | Server: starts the auto save loop if the server config turns auto saving on. Called by `ServerHandler`. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autosave" /><code>{"private async void AutoSave()"}</code> | Server: loop that waits the configured minutes and saves the world, skipping while a wipe or another save is running. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the auto save loop. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets `Instance`, or destroys this copy if one already exists. |
| <Link id="m-saveworld-2" /><code>{"private async Task SaveWorld(bool isInstant, CancellationToken cancellationToken)"}</code> | Saves every chunk, the auto save behaviours and all players, then flushes files and backs up changed remote files. An instant save blocks and cancels a running one. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Loads and unloads chunk prefabs within the time budget. |

</details>
