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
| <Link id="m-ctor" /><code>{"protected ProgressionShrine()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" currentManager"}</code> | <span className="api-desc">Backing field for `CurrentManager`, the progression manager of the player using the shrine.</span> |
| <Link id="m-synccurrentplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCurrentPlayer"}</code> | <span className="api-desc">Message (SyncD) for `SyncCurrentPlayer`. Sent to chunks on open and close, and to each player who connects.</span> |
| <Link id="m-syncvisuals" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncVisuals"}</code> | <span className="api-desc">Message (SyncA) for `SyncVisuals`. Sent when the shrine opens or closes and when the player's free points change.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmanager-2" /><code><Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" CurrentManager { get; private set; }"}</code> | <span className="api-desc">Progression manager of the player using the shrine, or null.</span> |
| <Link id="m-isopen" /><code>{"bool IsOpen { get; private set; }"}</code> | <span className="api-desc">True while a player is using the shrine.</span> |
| <Link id="m-visualizers" /><code>{"abstract IEnumerable<"}<Link to="/mod/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> | <span className="api-desc">The visualizers that show each progression path.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedplayer" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playerhandler">{"PlayerHandler"}</Link>{" UpdatedPlayer"}</code> | <span className="api-desc">Raised when the player using the shrine changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Closes the shrine, disables the visualizers and, on the server, syncs it.</span> |
| <Link id="m-getvisualizer" /><code>{"abstract "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Subclass: the experience fill visualizer for a path.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the syncs and closes the shrine if the entity is destroyed.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current user (and visuals if open) to a joining player.</span> |
| <Link id="m-open" /><code>{"void Open("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: opens the shrine for a player, closing it for anyone else first.</span> |
| <Link id="m-open-2" /><code>{"void Open("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Server: opens the shrine for a player, closing it for anyone else first.</span> |
| <Link id="m-toggleopenclosedlocalplayer" /><code>{"void ToggleOpenClosedLocalPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Closes the shrine if open, otherwise opens it for the given player.</span> |
| <Link id="m-closeinternal" /><code>{"protected abstract void CloseInternal()"}</code> | <span className="api-desc">Subclass: work when closed.</span> |
| <Link id="m-openonclient" /><code>{"protected abstract void OpenOnClient()"}</code> | <span className="api-desc">Subclass: client-side work when the open state arrives.</span> |
| <Link id="m-openonserver" /><code>{"protected abstract void OpenOnServer()"}</code> | <span className="api-desc">Subclass: server-side work when opened.</span> |
| <Link id="m-updatevisuals" /><code>{"protected virtual void UpdateVisuals("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" updatedPath)"}</code> | <span className="api-desc">Server: refreshes the visualizers from the player's progress and syncs them.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroydisable" /><code>{"private void DestroyDisable("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Closes the shrine if it is open when the entity is destroyed by the scene.</span> |
| <Link id="m-synccurrentplayer-2" /><code>{"private void SyncCurrentPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the identifier of the player using the shrine (0 when closed). Clients open or close the shrine to match.</span> |
| <Link id="m-syncvisuals-2" /><code>{"private void SyncVisuals("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Serializes every visualizer's state for the current player while open. Clients disable all visualizers when it says closed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ProgressionShrine`:

<div className="api-used-in">

[`BoughtSkillVisualizer.fillVisualizerObject`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-fillvisualizerobject).

</div>
