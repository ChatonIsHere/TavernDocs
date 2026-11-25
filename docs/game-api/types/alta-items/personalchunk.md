---
title: "PersonalChunk"
description: "class PersonalChunk in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PersonalChunk

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PersonalChunk()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-currentlyusing" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> currentlyUsing"}</code> |  |
| <Link id="m-namesuffix" /><code>{"private string nameSuffix"}</code> |  |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" CurrentPlayer { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-removecurrentplayer" /><code>{"private void RemoveCurrentPlayer()"}</code> |  |
| <Link id="m-spawninitialdocks" /><code>{"private void SpawnInitialDocks("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
