---
title: "PerPlayerManager<TThis, TContent, TSaveFormat>"
description: "Base for server singletons that load, cache and save one content object per player from that player's data file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PerPlayerManager&lt;TThis, TContent, TSaveFormat&gt;

A **class** in `Root.Township`, the global namespace.

Base for server singletons that load, cache and save one content object per player from that player's data file. Get one with the static `Instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IAutoSave`](/mod/game-api/types/global-i-l/iautosave)
- **Derived types** [`CentralGoldCoinBank`](/mod/game-api/types/global-c-d/centralgoldcoinbank), [`ClimbingTowerTeleporterPerPlayerSaveable`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable), [`PostboxManager`](/mod/game-api/types/global-p/postboxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PerPlayerManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-contents" /><code>{"private Dictionary<int, TContent> contents"}</code> | <span className="api-desc">Loaded content by player user ID.</span> |
| <Link id="m-getcontenttasks" /><code>{"private Dictionary<int, Task> getContentTasks"}</code> | <span className="api-desc">In-progress loads by player user ID, so repeated requests wait for the same load.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static TThis Instance { get; private set; }"}</code> | <span className="api-desc">The single instance. A second copy destroys itself in `Awake`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontentasync" /><code>{"virtual async Task<TContent> GetContentAsync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Returns the player's content, loading it from their player data file first if needed. Waits on any load already in progress.</span> |
| <Link id="m-getcontentasync-2" /><code>{"async Task<TContent> GetContentAsync(int playerIdentifier, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player = null, bool isCreatingNew = true)"}</code> | <span className="api-desc">Returns the player's content, loading it from their player data file first if needed. Waits on any load already in progress.</span> |
| <Link id="m-getcontentifloaded" /><code>{"TContent GetContentIfLoaded("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Returns the player's content only if it is already in memory, otherwise null. Does not load anything.</span> |
| <Link id="m-getcontentifloaded-2" /><code>{"TContent GetContentIfLoaded(int playerID)"}</code> | <span className="api-desc">Returns the player's content only if it is already in memory, otherwise null. Does not load anything.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: registers the manager for autosave, which saves every loaded player's content.</span> |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: starts loading the joining player's content.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: saves the leaving player's content and drops it from the cache.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autosave" /><code>{"private void IAutoSave.AutoSave()"}</code> | <span className="api-desc">Saves every loaded player's content without unloading it. Called by the streamer's auto save.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`, destroying itself if another instance exists.</span> |

</details>
