---
title: "DarknessReader"
description: "On the player: the local client checks how dark it is around the player and asks the server to spawn darkness for them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessReader

A **class** in `Root.Township`, no namespace.

On the player: the local client checks how dark it is around the player and asks the server to spawn darkness for them. The server spawns them through `DarknessSpawnerSettings`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessReader()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerCharacter"}</code> | The player this reader belongs to. |
| <Link id="m-readingmethod" /><code>{"private "}<Link to="/game-api/types/global-c-d/darknessreadermethod">{"DarknessReaderMethod"}</Link>{" readingMethod"}</code> | The darkness reading method in use (compute shader based), local player only. |
| <Link id="m-syncrequest" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRequest"}</code> | Message used to send the spawn request. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the spawn request message and disables the component. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Local player: creates the compute shader darkness reader and turns it on or off as darkness triggers change. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from darkness triggers and turns the reader off. |
| <Link id="m-requestspawn" /><code>{"private void RequestSpawn()"}</code> | Local player: sends a spawn request to the server if the reader is on. Called by the reader. |
| <Link id="m-syncrequest-2" /><code>{"private void SyncRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: on a spawn request, spawns darkness for this player. |
| <Link id="m-updateenabled" /><code>{"private void UpdateEnabled(bool isEnabled)"}</code> | Turns the reader on or off. Hooked to `DarknessTrigger.OnChanged`. |

</details>

## Used in

Members of other types that take, return or hold a `DarknessReader`:

[`ComputeShaderDarknessReader.ComputeShaderDarknessReader`](/game-api/types/global-c-d/computeshaderdarknessreader#m-ctor), [`DarknessReaderMethod.DarknessReaderMethod`](/game-api/types/global-c-d/darknessreadermethod#m-ctor), [`DarknessReaderMethod.reader`](/game-api/types/global-c-d/darknessreadermethod#m-reader), [`PlatformLightDarknessReader.PlatformLightDarknessReader`](/game-api/types/global-p/platformlightdarknessreader#m-ctor).
