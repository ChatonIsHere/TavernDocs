---
title: "PlayerSave"
description: "A player's save file: position data plus binary blobs for their body, state stack, player entity, progression and cosmetics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSave

A **class** in `Root.Township`, `Alta.Utilities`.

A player's save file: position data plus binary blobs for their body, state stack, player entity, progression and cosmetics. Server: `Player.Save` gives the loaded one. The blobs are saving-system bits; treat them as opaque.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSave()"}</code> | <span className="api-desc">Creates a `PlayerSave` from `identifier`.</span> |
| <Link id="m-ctor-2" /><code>{"PlayerSave(int identifier)"}</code> | <span className="api-desc">Creates a `PlayerSave` from `identifier`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customization" /><code>{"private uint[] customization"}</code> | <span className="api-desc">Backing field for `CosmeticData`, the player's serialized cosmetics.</span> |
| <Link id="m-customizationbytes" /><code>{"private int customizationBytes"}</code> | <span className="api-desc">Backing field for `CosmeticBytes`. Reading a save with 4 bytes or fewer drops the cosmetics.</span> |
| <Link id="m-lastsafeposition" /><code>{"private Vector3 lastSafePosition"}</code> | <span className="api-desc">Backing field for `LastSafePosition`, saved after the other data in the newest format.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for save and load errors.</span> |
| <Link id="m-player" /><code>{"private uint[] player"}</code> | <span className="api-desc">Backing field for `PlayerData`, the serialized player entity data.</span> |
| <Link id="m-playerbytes" /><code>{"private int playerBytes"}</code> | <span className="api-desc">Backing field for `PlayerBytes`.</span> |
| <Link id="m-prefab" /><code>{"private uint[] prefab"}</code> | <span className="api-desc">Backing field for `PrefabData`, the serialized player prefab and what it carries.</span> |
| <Link id="m-prefabbytes" /><code>{"private int prefabBytes"}</code> | <span className="api-desc">Backing field for `PrefabBytes`.</span> |
| <Link id="m-progression" /><code>{"private uint[] progression"}</code> | <span className="api-desc">Backing field for `ProgressionData`, the serialized skill and progression data.</span> |
| <Link id="m-progressionbytes" /><code>{"private int progressionBytes"}</code> | <span className="api-desc">Backing field for `ProgressionBytes`.</span> |
| <Link id="m-savedata" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<"}<Link to="/mod/game-api/types/alta-utilities/playersavefiledata">{"PlayerSaveFileData"}</Link>{"> saveData"}</code> | <span className="api-desc">Wrapper holding `Data`, the player save file data such as position.</span> |
| <Link id="m-state" /><code>{"private uint[] state"}</code> | <span className="api-desc">Backing field for `StateData`, the serialized player state.</span> |
| <Link id="m-statebytes" /><code>{"private int stateBytes"}</code> | <span className="api-desc">Backing field for `StateBytes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticbytes" /><code>{"int CosmeticBytes { get; set; }"}</code> | <span className="api-desc">Used length of `CosmeticData` in bytes.</span> |
| <Link id="m-cosmeticdata" /><code>{"uint[] CosmeticData { get; set; }"}</code> | <span className="api-desc">The player's look. Setting it returns the old array to the pool.</span> |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-utilities/playersavefiledata">{"PlayerSaveFileData"}</Link>{" Data { get; }"}</code> | <span className="api-desc">`position` (where they were) and `home` (their respawn point, if set).</span> |
| <Link id="m-lastsafeposition-2" /><code>{"Vector3 LastSafePosition { get; set; }"}</code> | <span className="api-desc">The last safe spot their client reported.</span> |
| <Link id="m-playerbytes-2" /><code>{"int PlayerBytes { get; set; }"}</code> | <span className="api-desc">Used length of `PlayerData` in bytes.</span> |
| <Link id="m-playerdata" /><code>{"uint[] PlayerData { get; set; }"}</code> | <span className="api-desc">The `Player` entity's own savable parts. Setting it returns the old array to the pool.</span> |
| <Link id="m-playeridentifier" /><code>{"int PlayerIdentifier { get; set; }"}</code> | <span className="api-desc">The user id.</span> |
| <Link id="m-prefabbytes-2" /><code>{"int PrefabBytes { get; set; }"}</code> | <span className="api-desc">Used length of `PrefabData` in bytes.</span> |
| <Link id="m-prefabchunkversioning" /><code><Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" PrefabChunkVersioning { get; set; }"}</code> | <span className="api-desc">Save format versions the prefab data was written with.</span> |
| <Link id="m-prefabdata" /><code>{"uint[] PrefabData { get; set; }"}</code> | <span className="api-desc">The body: what's in their hands, belt and back, and everything inside. Setting it returns the old array to the pool.</span> |
| <Link id="m-progressionbytes-2" /><code>{"int ProgressionBytes { get; set; }"}</code> | <span className="api-desc">Used length of `ProgressionData` in bytes.</span> |
| <Link id="m-progressiondata" /><code>{"uint[] ProgressionData { get; set; }"}</code> | <span className="api-desc">Skills and progression. Setting it returns the old array to the pool.</span> |
| <Link id="m-statebytes-2" /><code>{"int StateBytes { get; set; }"}</code> | <span className="api-desc">Used length of `StateData` in bytes.</span> |
| <Link id="m-statedata" /><code>{"uint[] StateData { get; set; }"}</code> | <span className="api-desc">The player state stack. Setting it returns the old array to the pool.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Deep copy with its own arrays, used when writing the file in the background.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Returns all arrays to the pool. Warns if any were missing.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads the file, handling the current and three older formats. Older formats may drop cosmetics or state.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes the file in the current format.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-releasearray" /><code>{"private bool ReleaseArray(ref uint[] array)"}</code> | <span className="api-desc">Returns a data array to the pool and nulls it. Returns true if it was already null, which `Dispose` logs as a warning.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerSave`:

<div className="api-used-in">

[`PlayerCharacter.LoadFrom`](/mod/game-api/types/alta-player/playercharacter#m-loadfrom), [`PlayerCharacter.SaveTo`](/mod/game-api/types/alta-player/playercharacter#m-saveto), [`IPlayer.Save`](/mod/game-api/types/alta-networking/iplayer#m-save), [`PlayerStateManager.LoadFrom`](/mod/game-api/types/alta-player/playerstatemanager#m-loadfrom), [`PlayerStateManager.SaveTo`](/mod/game-api/types/alta-player/playerstatemanager#m-saveto), [`PlayerSaveData.Populate`](/mod/game-api/types/alta-utilities/playersavedata#m-populate), [`Player.GetPlayerSave`](/mod/game-api/types/global-p/player#m-getplayersave), [`Player.LoadFrom`](/mod/game-api/types/global-p/player#m-loadfrom), [`Player.Save`](/mod/game-api/types/global-p/player#m-save), [`Player.saveData`](/mod/game-api/types/global-p/player#m-savedata), [`PlayerController.LoadFrom`](/mod/game-api/types/global-p/playercontroller#m-loadfrom), [`PlayerController.SaveNetworkPrefabToPlayerSave`](/mod/game-api/types/global-p/playercontroller#m-savenetworkprefabtoplayersave), [`PlayerController.SaveTo`](/mod/game-api/types/global-p/playercontroller#m-saveto), [`PlayerProgressionManager.LoadFrom`](/mod/game-api/types/global-p/playerprogressionmanager#m-loadfrom), [`PlayerProgressionManager.SaveTo`](/mod/game-api/types/global-p/playerprogressionmanager#m-saveto), [`ServerWipeManager.MovePlayerOutOfCaves`](/mod/game-api/types/global-s/serverwipemanager#m-moveplayeroutofcaves), [`ServerWipeManager.RunThroughAllPlayers`](/mod/game-api/types/global-s/serverwipemanager#m-runthroughallplayers), [`ServerWipeManager.SanitizePlayersSaves`](/mod/game-api/types/global-s/serverwipemanager#m-sanitizeplayerssaves).

</div>
