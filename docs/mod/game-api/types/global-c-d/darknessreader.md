---
title: "DarknessReader"
description: "On the player: the local client checks how dark it is around the player and asks the server to spawn darkness for them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessReader

A **class** in `Root.Township`, the global namespace.

On the player: the local client checks how dark it is around the player and asks the server to spawn darkness for them. The server spawns them through `DarknessSpawnerSettings`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessReader()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerCharacter"}</code> | <span className="api-desc">The player this reader belongs to.</span> |
| <Link id="m-readingmethod" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/darknessreadermethod">{"DarknessReaderMethod"}</Link>{" readingMethod"}</code> | <span className="api-desc">The darkness reading method in use (compute shader based), local player only.</span> |
| <Link id="m-syncrequest" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRequest"}</code> | <span className="api-desc">Message used to send the spawn request.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the spawn request message and disables the component.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Local player: creates the compute shader darkness reader and turns it on or off as darkness triggers change.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from darkness triggers and turns the reader off.</span> |
| <Link id="m-requestspawn" /><code>{"private void RequestSpawn()"}</code> | <span className="api-desc">Local player: sends a spawn request to the server if the reader is on. Called by the reader.</span> |
| <Link id="m-syncrequest-2" /><code>{"private void SyncRequest("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server: on a spawn request, spawns darkness for this player.</span> |
| <Link id="m-updateenabled" /><code>{"private void UpdateEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns the reader on or off. Hooked to `DarknessTrigger.OnChanged`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DarknessReader`:

<div className="api-used-in">

[`ComputeShaderDarknessReader.ComputeShaderDarknessReader`](/mod/game-api/types/global-c-d/computeshaderdarknessreader#m-ctor), [`DarknessReaderMethod.DarknessReaderMethod`](/mod/game-api/types/global-c-d/darknessreadermethod#m-ctor), [`DarknessReaderMethod.reader`](/mod/game-api/types/global-c-d/darknessreadermethod#m-reader), [`PlatformLightDarknessReader.PlatformLightDarknessReader`](/mod/game-api/types/global-p/platformlightdarknessreader#m-ctor).

</div>
