---
title: "FirstJoinState"
description: "The state a player starts in on their first join."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FirstJoinState

A **class** in `Root.Township`, `Alta.PlayerStates`.

The state a player starts in on their first join. Its only job is to move them on to customization or straight to playing.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase)
- **Derived types** [`FirstJoinToCustomizationTransition`](/game-api/types/alta-player/firstjointocustomizationtransition), [`FirstJoinToPlayingTransition`](/game-api/types/alta-player/firstjointoplayingtransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FirstJoinState()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "First Join State". |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.FirstJoin`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringSaving)"}</code> | Triggers the move to customization for normal players when the server has customization on and not skipped, otherwise to playing. |
