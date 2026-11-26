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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`RespawnShrine`](/game-api/types/game-other-namespaces/respawnshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalRespawnShrine()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shrinesettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinedata">{"RespawnShrineData"}</Link>{" shrineSettings"}</code> | The shrine data asset for this shrine. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected override Guid ShrineId { get; }"}</code> | The shrine's ID from its shrine data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onsetspawnpointtoggle" /><code>{"override void OnSetSpawnPointToggle("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: plays the subscribe sound for the chunk and removes the player from their current shrine. |
| <Link id="m-oninteractionfilter" /><code>{"protected override void OnInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only allows the touch when the player's active shrine isn't already this one. |
| <Link id="m-onmodelchanged" /><code>{"protected override void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | Client: colours the glyph by whether the local player is on the global shrine. |
