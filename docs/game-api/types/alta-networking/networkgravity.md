---
title: "NetworkGravity"
description: "class NetworkGravity in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkGravity

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkGravity()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> |  |
| <Link id="m-gravity" /><code>{"private ConstantForce gravity"}</code> |  |
| <Link id="m-syncgravity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncGravity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-drag" /><code>{"float Drag { get; set; }"}</code> |  |
| <Link id="m-gravity-2" /><code>{"float Gravity { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> |  |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
