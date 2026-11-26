---
title: "NetworkGravity"
description: "Replaces Unity gravity on a rigidbody with a ConstantForce, so gravity and drag can be changed per object and synced to clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkGravity

A **class** in `Root.Township`, `Alta.Networking`.

Replaces Unity gravity on a rigidbody with a `ConstantForce`, so gravity and drag can be changed per object and synced to clients.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkGravity()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | The rigidbody whose drag is synced. |
| <Link id="m-gravity" /><code>{"private ConstantForce gravity"}</code> | The constant force used as gravity. |
| <Link id="m-syncgravity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncGravity"}</code> | Method sync for gravity and drag. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-drag" /><code>{"float Drag { get; set; }"}</code> | The rigidbody's drag. Setting it sends the new values to clients. |
| <Link id="m-gravity-2" /><code>{"float Gravity { get; set; }"}</code> | Vertical gravity force. Setting it sends the new values to clients. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the gravity method sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the gravity and drag to a newly connected player. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Sets gravity back to the normal physics gravity. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | Editor: adds the constant force set to normal gravity and turns off the rigidbody's own gravity. |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends or receives gravity (-10 to 10) and drag (0 to 5), both in steps of 0.1. |

</details>
