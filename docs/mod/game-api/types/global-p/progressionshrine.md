---
title: "ProgressionShrine"
description: "Base for the skill shrine a player opens to see and spend progression points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionShrine

An **abstract class** in `Root.Township`, the global namespace.

Base for the skill shrine a player opens to see and spend progression points. Server opens it for one player and syncs who is using it and the visuals to clients.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ProfessionsProgressShrine`](/mod/game-api/types/global-p/professionsprogressshrine), [`SkillShrine`](/mod/game-api/types/global-s/skillshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProgressionShrine()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" currentManager"}</code> | Backing field for `CurrentManager`, the progression manager of the player using the shrine. |
| <Link id="m-synccurrentplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCurrentPlayer"}</code> | Message (SyncD) for `SyncCurrentPlayer`. Sent to chunks on open and close, and to each player who connects. |
| <Link id="m-syncvisuals" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncVisuals"}</code> | Message (SyncA) for `SyncVisuals`. Sent when the shrine opens or closes and when the player's free points change. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmanager-2" /><code><Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" CurrentManager { get; private set; }"}</code> | Progression manager of the player using the shrine, or null. |
| <Link id="m-isopen" /><code>{"bool IsOpen { get; private set; }"}</code> | True while a player is using the shrine. |
| <Link id="m-visualizers" /><code>{"abstract IEnumerable<"}<Link to="/mod/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> | The visualizers that show each progression path. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedplayer" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playerhandler">{"PlayerHandler"}</Link>{" UpdatedPlayer"}</code> | Raised when the player using the shrine changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Closes the shrine, disables the visualizers and, on the server, syncs it. |
| <Link id="m-getvisualizer" /><code>{"abstract "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Subclass: the experience fill visualizer for a path. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the syncs and closes the shrine if the entity is destroyed. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current user (and visuals if open) to a joining player. |
| <Link id="m-open" /><code>{"void Open("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: opens the shrine for a player, closing it for anyone else first. |
| <Link id="m-open-2" /><code>{"void Open("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Server: opens the shrine for a player, closing it for anyone else first. |
| <Link id="m-toggleopenclosedlocalplayer" /><code>{"void ToggleOpenClosedLocalPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Closes the shrine if open, otherwise opens it for the given player. |
| <Link id="m-closeinternal" /><code>{"protected abstract void CloseInternal()"}</code> | Subclass: work when closed. |
| <Link id="m-openonclient" /><code>{"protected abstract void OpenOnClient()"}</code> | Subclass: client-side work when the open state arrives. |
| <Link id="m-openonserver" /><code>{"protected abstract void OpenOnServer()"}</code> | Subclass: server-side work when opened. |
| <Link id="m-updatevisuals" /><code>{"protected virtual void UpdateVisuals("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" updatedPath)"}</code> | Server: refreshes the visualizers from the player's progress and syncs them. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroydisable" /><code>{"private void DestroyDisable("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Closes the shrine if it is open when the entity is destroyed by the scene. |
| <Link id="m-synccurrentplayer-2" /><code>{"private void SyncCurrentPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the identifier of the player using the shrine (0 when closed). Clients open or close the shrine to match. |
| <Link id="m-syncvisuals-2" /><code>{"private void SyncVisuals("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes every visualizer's state for the current player while open. Clients disable all visualizers when it says closed. |

</details>

## Used in

Members of other types that take, return or hold a `ProgressionShrine`:

[`BoughtSkillVisualizer.fillVisualizerObject`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-fillvisualizerobject).
