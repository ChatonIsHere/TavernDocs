---
title: "PlayerHandler"
description: "Handler that gets an IPlayer, as used by Player.LocalPlayerSet."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHandler

A **delegate** in `Root.Township`, no namespace.

Handler that gets an `IPlayer`, as used by `Player.LocalPlayerSet`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PlayerHandler`:

[`Player.LocalPlayerSet`](/game-api/types/global-p/player#m-localplayerset), [`ProgressionShrine.UpdatedPlayer`](/game-api/types/global-p/progressionshrine#m-updatedplayer).
