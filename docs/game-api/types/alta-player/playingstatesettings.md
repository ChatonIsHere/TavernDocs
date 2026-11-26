---
title: "PlayingStateSettings"
description: "Settings asset for the normal playing state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingStateSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

Settings asset for the normal playing state. It adds nothing beyond `PlayerStateSettings`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`PlayingStateSettings.Create`](/game-api/types/alta-player/playingstatesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/playingstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingStateSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | `PlayingState`. |

## Used in

Members of other types that take, return or hold a `PlayingStateSettings`:

[`PlayingState.Settings`](/game-api/types/alta-player/playingstate#m-settings).
