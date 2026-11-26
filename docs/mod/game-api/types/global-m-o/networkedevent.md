---
title: "NetworkedEvent"
description: "Network entity that fires a Unity event on the server and every client when the server calls Trigger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedEvent

A **class** in `Root.Township`, the global namespace.

Network entity that fires a Unity event on the server and every client when the server calls `Trigger`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isclientonly" /><code>{"private bool isClientOnly"}</code> | <span className="api-desc">If true, the server doesn't fire the event itself, except in local test.</span> |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType"}</code> | <span className="api-desc">Entity message type used, so several of these can sit on one entity.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">The method sync.</span> |
| <Link id="m-triggered" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggered"}</code> | <span className="api-desc">Event fired when triggered.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync message with the chosen message type.</span> |
| <Link id="m-trigger" /><code>{"void Trigger()"}</code> | <span className="api-desc">Server: fires the event locally (unless client only) and sends it to nearby chunks.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Fires the event on clients when the message arrives.</span> |

</details>
