---
title: "StreamerManager"
description: "Singleton (Instance) that loads and unloads chunk prefabs within a per-frame time budget and saves the world, including the server's timed auto save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamerManager

A **class** in `Root.Township`, the global namespace.

Singleton (`Instance`) that loads and unloads chunk prefabs within a per-frame time budget and saves the world, including the server's timed auto save.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamerManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-s/streamermanager">{"StreamerManager"}</Link>{" Instance"}</code> | <span className="api-desc">The active manager; a second copy destroys itself.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelcurrent" /><code>{"private CancellationTokenSource cancelCurrent"}</code> | <span className="api-desc">Cancels the running save when an instant save starts.</span> |
| <Link id="m-current" /><code>{"private Task current"}</code> | <span className="api-desc">The save task in progress, or null.</span> |
| <Link id="m-isautosaving" /><code>{"private bool isAutoSaving"}</code> | <span className="api-desc">Whether the auto save loop should keep running.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for save progress and errors.</span> |
| <Link id="m-minutesbetweenautosaves" /><code>{"private float minutesBetweenAutoSaves"}</code> | <span className="api-desc">Minutes between auto saves, from the server config.</span> |
| <Link id="m-streamingmillisecondsallowance" /><code>{"private float streamingMillisecondsAllowance"}</code> | <span className="api-desc">Backing field for `StreamingTimeAllowanceMilliseconds` (2 ms by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-autosavingbehaviours" /><code>{"static List<"}<Link to="/mod/game-api/types/global-i-l/iautosave">{"IAutoSave"}</Link>{"> AutoSavingBehaviours { get; }"}</code> | <span className="api-desc">Objects whose `AutoSave` runs after the chunks are saved, such as `GameTaskManager` and `PerPlayerManager`.</span> |
| <Link id="m-streamingtimeallowancemilliseconds" /><code>{"float StreamingTimeAllowanceMilliseconds { get; }"}</code> | <span className="api-desc">Per-frame time budget in milliseconds for chunk streaming and spread-out saving.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-saveworld" /><code>{"async Task SaveWorld(bool isInstant)"}</code> | <span className="api-desc">Saves every chunk, the auto save behaviours and all players, then flushes files and backs up changed remote files. An instant save blocks and cancels a running one.</span> |
| <Link id="m-startautosave" /><code>{"void StartAutoSave()"}</code> | <span className="api-desc">Server: starts the auto save loop if the server config turns auto saving on. Called by `ServerHandler`.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autosave" /><code>{"private async void AutoSave()"}</code> | <span className="api-desc">Server: loop that waits the configured minutes and saves the world, skipping while a wipe or another save is running.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the auto save loop.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Sets `Instance`, or destroys this copy if one already exists.</span> |
| <Link id="m-saveworld-2" /><code>{"private async Task SaveWorld(bool isInstant, CancellationToken cancellationToken)"}</code> | <span className="api-desc">Saves every chunk, the auto save behaviours and all players, then flushes files and backs up changed remote files. An instant save blocks and cancels a running one.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Loads and unloads chunk prefabs within the time budget.</span> |

</details>
