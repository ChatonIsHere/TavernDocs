---
title: "NetworkedEvent"
description: "Network entity that fires a Unity event on the server and every client when the server calls Trigger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedEvent

A **class** in `Root.Township`, no namespace.

Network entity that fires a Unity event on the server and every client when the server calls `Trigger`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isclientonly" /><code>{"private bool isClientOnly"}</code> | If true, the server doesn't fire the event itself, except in local test. |
| <Link id="m-messagetype" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType"}</code> | Entity message type used, so several of these can sit on one entity. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | The method sync. |
| <Link id="m-triggered" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggered"}</code> | Event fired when triggered. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync message with the chosen message type. |
| <Link id="m-trigger" /><code>{"void Trigger()"}</code> | Server: fires the event locally (unless client only) and sends it to nearby chunks. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Fires the event on clients when the message arrives. |

</details>
