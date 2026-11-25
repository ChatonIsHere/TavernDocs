---
title: "PerPlayerManager<TThis, TContent, TSaveFormat>"
description: "class PerPlayerManager<TThis, TContent, TSaveFormat> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PerPlayerManager&lt;TThis, TContent, TSaveFormat&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IAutoSave`](/game-api/types/global-i-l/iautosave)
- **Derived types** [`CentralGoldCoinBank`](/game-api/types/global-c-d/centralgoldcoinbank), [`ClimbingTowerTeleporterPerPlayerSaveable`](/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable), [`PostboxManager`](/game-api/types/global-p/postboxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PerPlayerManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-contents" /><code>{"private Dictionary<int, TContent> contents"}</code> |  |
| <Link id="m-getcontenttasks" /><code>{"private Dictionary<int, Task> getContentTasks"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static TThis Instance { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontentasync" /><code>{"virtual async Task<TContent> GetContentAsync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-getcontentasync-2" /><code>{"async Task<TContent> GetContentAsync(int playerIdentifier, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player = null, bool isCreatingNew = true)"}</code> |  |
| <Link id="m-getcontentifloaded" /><code>{"TContent GetContentIfLoaded("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-getcontentifloaded-2" /><code>{"TContent GetContentIfLoaded(int playerID)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-autosave" /><code>{"private void IAutoSave.AutoSave()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
