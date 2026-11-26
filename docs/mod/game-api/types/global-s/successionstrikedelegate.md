---
title: "SuccessionStrikeDelegate"
description: "Callback with a player, a profession skill and a strike count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SuccessionStrikeDelegate

A **delegate** in `Root.Township`, the global namespace.

Callback with a player, a profession skill and a strike count. Type of `StrikeSuccessionInput.StrikeCountUpdate`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SuccessionStrikeDelegate(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, int strikeCount, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, int strikeCount)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `SuccessionStrikeDelegate`:

[`StrikeSuccessionInput.StrikeCountUpdate`](/mod/game-api/types/global-s/strikesuccessioninput#m-strikecountupdate).
