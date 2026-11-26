---
title: "GlobalRespawnShrine"
description: "The global respawn shrine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalRespawnShrine

A **class** in `Root.Township`, `ATT.Respawn`.

The global respawn shrine. Touching it resets the player's respawn back to the global spawn.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`RespawnShrine`](/mod/game-api/types/game-other-namespaces/respawnshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalRespawnShrine()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shrinesettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/respawnshrinedata">{"RespawnShrineData"}</Link>{" shrineSettings"}</code> | <span className="api-desc">The shrine data asset for this shrine.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected override Guid ShrineId { get; }"}</code> | <span className="api-desc">The shrine's ID from its shrine data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onsetspawnpointtoggle" /><code>{"override void OnSetSpawnPointToggle("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: plays the subscribe sound for the chunk and removes the player from their current shrine.</span> |
| <Link id="m-oninteractionfilter" /><code>{"protected override void OnInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only allows the touch when the player's active shrine isn't already this one.</span> |
| <Link id="m-onmodelchanged" /><code>{"protected override void OnModelChanged("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | <span className="api-desc">Client: colours the glyph by whether the local player is on the global shrine.</span> |
