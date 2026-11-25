---
title: "ProgressionShrine"
description: "abstract class ProgressionShrine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionShrine

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`ProfessionsProgressShrine`](/game-api/types/global-p/professionsprogressshrine), [`SkillShrine`](/game-api/types/global-s/skillshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ProgressionShrine()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentmanager" /><code>{"private "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" currentManager"}</code> |  |
| <Link id="m-synccurrentplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCurrentPlayer"}</code> |  |
| <Link id="m-syncvisuals" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncVisuals"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentmanager-2" /><code><Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" CurrentManager { get; private set; }"}</code> |  |
| <Link id="m-isopen" /><code>{"bool IsOpen { get; private set; }"}</code> |  |
| <Link id="m-visualizers" /><code>{"abstract IEnumerable<"}<Link to="/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedplayer" /><code>{"event "}<Link to="/game-api/types/global-p/playerhandler">{"PlayerHandler"}</Link>{" UpdatedPlayer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> |  |
| <Link id="m-getvisualizer" /><code>{"abstract "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-open" /><code>{"void Open("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-open-2" /><code>{"void Open("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-toggleopenclosedlocalplayer" /><code>{"void ToggleOpenClosedLocalPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-closeinternal" /><code>{"protected abstract void CloseInternal()"}</code> |  |
| <Link id="m-destroydisable" /><code>{"private void DestroyDisable("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-openonclient" /><code>{"protected abstract void OpenOnClient()"}</code> |  |
| <Link id="m-openonserver" /><code>{"protected abstract void OpenOnServer()"}</code> |  |
| <Link id="m-synccurrentplayer-2" /><code>{"private void SyncCurrentPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncvisuals-2" /><code>{"private void SyncVisuals("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatevisuals" /><code>{"protected virtual void UpdateVisuals("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" updatedPath)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ProgressionShrine`:

[`BoughtSkillVisualizer.fillVisualizerObject`](/game-api/types/global-a-b/boughtskillvisualizer#m-fillvisualizerobject).
