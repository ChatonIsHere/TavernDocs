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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkGravity()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | <span className="api-desc">The rigidbody whose drag is synced.</span> |
| <Link id="m-gravity" /><code>{"private ConstantForce gravity"}</code> | <span className="api-desc">The constant force used as gravity.</span> |
| <Link id="m-syncgravity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncGravity"}</code> | <span className="api-desc">Method sync for gravity and drag.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-drag" /><code>{"float Drag { get; set; }"}</code> | <span className="api-desc">The rigidbody's drag. Setting it sends the new values to clients.</span> |
| <Link id="m-gravity-2" /><code>{"float Gravity { get; set; }"}</code> | <span className="api-desc">Vertical gravity force. Setting it sends the new values to clients.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the gravity method sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the gravity and drag to a newly connected player.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Sets gravity back to the normal physics gravity.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | <span className="api-desc">Editor: adds the constant force set to normal gravity and turns off the rigidbody's own gravity.</span> |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends or receives gravity (-10 to 10) and drag (0 to 5), both in steps of 0.1.</span> |

</details>
