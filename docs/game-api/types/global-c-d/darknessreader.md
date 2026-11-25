---
title: "DarknessReader"
description: "class DarknessReader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessReader

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessReader()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerCharacter"}</code> |  |
| <Link id="m-readingmethod" /><code>{"private "}<Link to="/game-api/types/global-c-d/darknessreadermethod">{"DarknessReaderMethod"}</Link>{" readingMethod"}</code> |  |
| <Link id="m-syncrequest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRequest"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-requestspawn" /><code>{"private void RequestSpawn()"}</code> |  |
| <Link id="m-syncrequest-2" /><code>{"private void SyncRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateenabled" /><code>{"private void UpdateEnabled(bool isEnabled)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DarknessReader`:

[`ComputeShaderDarknessReader.ComputeShaderDarknessReader`](/game-api/types/global-c-d/computeshaderdarknessreader#m-ctor), [`DarknessReaderMethod.DarknessReaderMethod`](/game-api/types/global-c-d/darknessreadermethod#m-ctor), [`DarknessReaderMethod.reader`](/game-api/types/global-c-d/darknessreadermethod#m-reader), [`PlatformLightDarknessReader.PlatformLightDarknessReader`](/game-api/types/global-p/platformlightdarknessreader#m-ctor).
