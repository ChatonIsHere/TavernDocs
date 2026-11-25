---
title: "DamageDisplayer"
description: "class DamageDisplayer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDisplayer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageDisplayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |  |
| <Link id="m-syncdamage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncDamage"}</code> |  |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> |  |
| <Link id="m-updatetimer" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateTimer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-totaldamage" /><code>{"static float TotalDamage { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dealtdamage" /><code>{"void DealtDamage(float damage)"}</code> |  |
| <Link id="m-clear" /><code>{"private void Clear("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-syncdamage-2" /><code>{"private void SyncDamage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float damage)"}</code> |  |
| <Link id="m-updatetimer-2" /><code>{"private void UpdateTimer()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DamageDisplayer`:

[`Player.DamageDisplayer`](/game-api/types/global-p/player#m-damagedisplayer).
