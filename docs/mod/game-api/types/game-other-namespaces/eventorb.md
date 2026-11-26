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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`RespawnOrb`](/mod/game-api/types/game-other-namespaces/respawnorb), [`ReviveOrb`](/mod/game-api/types/game-other-namespaces/reviveorb)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventOrb()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" actionOrb"}</code> | <span className="api-desc">The `ActionOrb` the player grabs and releases.</span> |
| <Link id="m-isinteractiononserver" /><code>{"private bool isInteractionOnServer"}</code> | <span className="api-desc">When true, clients may pick the orb up without a release action because the server handles it.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-onreleaseaction" /><code>{"private Action onReleaseAction"}</code> | <span className="api-desc">Action run when the orb is released. Set with `SetReleaseAction`.</span> |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> | <span className="api-desc">Player character field. Not used in this class's code.</span> |
| <Link id="m-selectionorbposition" /><code>{"private Transform selectionOrbPosition"}</code> | <span className="api-desc">Transform the action orb is set to return to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb-2" /><code><Link to="/mod/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" { get; }"}</code> | <span className="api-desc">The orb pickup and its target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearreleaseaction" /><code>{"void ClearReleaseAction()"}</code> | <span className="api-desc">Removes the release action and force drops the orb.</span> |
| <Link id="m-setreleaseaction" /><code>{"void SetReleaseAction(Action action)"}</code> | <span className="api-desc">Sets what runs when the orb is let go.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hooks the orb's let go and grab filter, and sets its home position.</span> |
| <Link id="m-validatepickupinteraction" /><code>{"protected virtual void ValidatePickupInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks grabbing when no release action is set, except on a client when `isInteractionOnServer` is set.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasinteractionexception" /><code>{"private bool HasInteractionException()"}</code> | <span className="api-desc">True on a client when `isInteractionOnServer` is set, so the orb can be grabbed without a local release action.</span> |
| <Link id="m-onvalidletgo" /><code>{"private void OnValidLetGo()"}</code> | <span className="api-desc">Runs the release action when the orb is let go in a valid way, or logs an error if none is set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EventOrb`:

<div className="api-used-in">

[`ReviveCompletableActivity.spawnedOrbs`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-spawnedorbs).

</div>
