---
title: "ScaleChangedHandler"
description: "Callback for PlayerCharacter.ScaleChanged: the player plus their old and new scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleChangedHandler

A **delegate** in `Root.Township`, `Alta.Character`.

Callback for `PlayerCharacter.ScaleChanged`: the player plus their old and new scale.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float oldScale, float newScale, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float oldScale, float newScale)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ScaleChangedHandler`:

[`PlayerCharacter.ScaleChanged`](/mod/game-api/types/alta-player/playercharacter#m-scalechanged).
