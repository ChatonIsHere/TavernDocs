---
title: "EventOrb"
description: "A menu orb that runs a set action when the player lets go of it in a valid place."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventOrb

A **class** in `Root.Township`, `ATT.MainMenu.Scripts`.

A menu orb that runs a set action when the player lets go of it in a valid place. Wraps an `ActionOrb`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`RespawnOrb`](/game-api/types/game-other-namespaces/respawnorb), [`ReviveOrb`](/game-api/types/game-other-namespaces/reviveorb)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventOrb()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb" /><code>{"private "}<Link to="/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" actionOrb"}</code> |  |
| <Link id="m-isinteractiononserver" /><code>{"private bool isInteractionOnServer"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-onreleaseaction" /><code>{"private Action onReleaseAction"}</code> |  |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> |  |
| <Link id="m-selectionorbposition" /><code>{"private Transform selectionOrbPosition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb-2" /><code><Link to="/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" "}<Link to="/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" { get; }"}</code> | The orb pickup and its target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearreleaseaction" /><code>{"void ClearReleaseAction()"}</code> | Removes the release action and force drops the orb. |
| <Link id="m-setreleaseaction" /><code>{"void SetReleaseAction(Action action)"}</code> | Sets what runs when the orb is let go. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hooks the orb's let go and grab filter, and sets its home position. |
| <Link id="m-hasinteractionexception" /><code>{"private bool HasInteractionException()"}</code> |  |
| <Link id="m-onvalidletgo" /><code>{"private void OnValidLetGo()"}</code> |  |
| <Link id="m-validatepickupinteraction" /><code>{"protected virtual void ValidatePickupInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks grabbing when no release action is set, except on a client when `isInteractionOnServer` is set. |

## Used in

Members of other types that take, return or hold a `EventOrb`:

[`ReviveCompletableActivity.spawnedOrbs`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-spawnedorbs).
