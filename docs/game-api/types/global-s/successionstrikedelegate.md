---
title: "SuccessionStrikeDelegate"
description: "Callback with a player, a profession skill and a strike count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SuccessionStrikeDelegate

A **delegate** in `Root.Township`, no namespace.

Callback with a player, a profession skill and a strike count. Type of `StrikeSuccessionInput.StrikeCountUpdate`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SuccessionStrikeDelegate(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, int strikeCount, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, int strikeCount)"}</code> |

## Used in

Members of other types that take, return or hold a `SuccessionStrikeDelegate`:

[`StrikeSuccessionInput.StrikeCountUpdate`](/game-api/types/global-s/strikesuccessioninput#m-strikecountupdate).
