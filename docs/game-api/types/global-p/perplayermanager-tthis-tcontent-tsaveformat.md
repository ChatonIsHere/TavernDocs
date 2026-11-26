---
title: "PerPlayerManager<TThis, TContent, TSaveFormat>"
description: "Base for server singletons that load, cache and save one content object per player from that player's data file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PerPlayerManager&lt;TThis, TContent, TSaveFormat&gt;

A **class** in `Root.Township`, no namespace.

Base for server singletons that load, cache and save one content object per player from that player's data file. Get one with the static `Instance`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IAutoSave`](/game-api/types/global-i-l/iautosave)
- **Derived types** [`CentralGoldCoinBank`](/game-api/types/global-c-d/centralgoldcoinbank), [`ClimbingTowerTeleporterPerPlayerSaveable`](/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable), [`PostboxManager`](/game-api/types/global-p/postboxmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PerPlayerManager()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-contents" /><code>{"private Dictionary<int, TContent> contents"}</code> | Loaded content by player user ID. |
| <Link id="m-getcontenttasks" /><code>{"private Dictionary<int, Task> getContentTasks"}</code> | In-progress loads by player user ID, so repeated requests wait for the same load. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static TThis Instance { get; private set; }"}</code> | The single instance. A second copy destroys itself in `Awake`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontentasync" /><code>{"virtual async Task<TContent> GetContentAsync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Returns the player's content, loading it from their player data file first if needed. Waits on any load already in progress. |
| <Link id="m-getcontentasync-2" /><code>{"async Task<TContent> GetContentAsync(int playerIdentifier, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player = null, bool isCreatingNew = true)"}</code> | Returns the player's content, loading it from their player data file first if needed. Waits on any load already in progress. |
| <Link id="m-getcontentifloaded" /><code>{"TContent GetContentIfLoaded("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Returns the player's content only if it is already in memory, otherwise null. Does not load anything. |
| <Link id="m-getcontentifloaded-2" /><code>{"TContent GetContentIfLoaded(int playerID)"}</code> | Returns the player's content only if it is already in memory, otherwise null. Does not load anything. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: registers the manager for autosave, which saves every loaded player's content. |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: starts loading the joining player's content. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: saves the leaving player's content and drops it from the cache. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autosave" /><code>{"private void IAutoSave.AutoSave()"}</code> | Saves every loaded player's content without unloading it. Called by the streamer's auto save. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`, destroying itself if another instance exists. |

</details>
