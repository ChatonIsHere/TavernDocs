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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/mod/game-api/types/alta-player/playerstatebase)
- **Derived types** [`FirstJoinToCustomizationTransition`](/mod/game-api/types/alta-player/firstjointocustomizationtransition), [`FirstJoinToPlayingTransition`](/mod/game-api/types/alta-player/firstjointoplayingtransition)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FirstJoinState()"}</code> | <span className="api-desc">Creates a `FirstJoinState` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">"First Join State".</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">`PlayerStateType.FirstJoin`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringSaving)"}</code> | <span className="api-desc">Triggers the move to customization for normal players when the server has customization on and not skipped, otherwise to playing.</span> |
