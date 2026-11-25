---
title: "GlobalRespawnShrine"
description: "class GlobalRespawnShrine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalRespawnShrine

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`RespawnShrine`](/game-api/types/game-other-namespaces/respawnshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalRespawnShrine()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-shrinesettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnshrinedata">{"RespawnShrineData"}</Link>{" shrineSettings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected override Guid ShrineId { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onsetspawnpointtoggle" /><code>{"override void OnSetSpawnPointToggle("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-oninteractionfilter" /><code>{"protected override void OnInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-onmodelchanged" /><code>{"protected override void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> |  |
