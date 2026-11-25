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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSave()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"PlayerSave(int identifier)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-customization" /><code>{"private uint[] customization"}</code> |  |
| <Link id="m-customizationbytes" /><code>{"private int customizationBytes"}</code> |  |
| <Link id="m-lastsafeposition" /><code>{"private Vector3 lastSafePosition"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-player" /><code>{"private uint[] player"}</code> |  |
| <Link id="m-playerbytes" /><code>{"private int playerBytes"}</code> |  |
| <Link id="m-prefab" /><code>{"private uint[] prefab"}</code> |  |
| <Link id="m-prefabbytes" /><code>{"private int prefabBytes"}</code> |  |
| <Link id="m-progression" /><code>{"private uint[] progression"}</code> |  |
| <Link id="m-progressionbytes" /><code>{"private int progressionBytes"}</code> |  |
| <Link id="m-savedata" /><code>{"private "}<Link to="/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<"}<Link to="/game-api/types/alta-utilities/playersavefiledata">{"PlayerSaveFileData"}</Link>{"> saveData"}</code> |  |
| <Link id="m-state" /><code>{"private uint[] state"}</code> |  |
| <Link id="m-statebytes" /><code>{"private int stateBytes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticbytes" /><code>{"int CosmeticBytes { get; set; }"}</code> | Used length of `CosmeticData` in bytes. |
| <Link id="m-cosmeticdata" /><code>{"uint[] CosmeticData { get; set; }"}</code> | The player's look. Setting it returns the old array to the pool. |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-utilities/playersavefiledata">{"PlayerSaveFileData"}</Link>{" Data { get; }"}</code> | `position` (where they were) and `home` (their respawn point, if set). |
| <Link id="m-lastsafeposition-2" /><code>{"Vector3 LastSafePosition { get; set; }"}</code> | The last safe spot their client reported. |
| <Link id="m-playerbytes-2" /><code>{"int PlayerBytes { get; set; }"}</code> | Used length of `PlayerData` in bytes. |
| <Link id="m-playerdata" /><code>{"uint[] PlayerData { get; set; }"}</code> | The `Player` entity's own savable parts. Setting it returns the old array to the pool. |
| <Link id="m-playeridentifier" /><code>{"int PlayerIdentifier { get; set; }"}</code> | The user id. |
| <Link id="m-prefabbytes-2" /><code>{"int PrefabBytes { get; set; }"}</code> | Used length of `PrefabData` in bytes. |
| <Link id="m-prefabchunkversioning" /><code><Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" PrefabChunkVersioning { get; set; }"}</code> | Save format versions the prefab data was written with. |
| <Link id="m-prefabdata" /><code>{"uint[] PrefabData { get; set; }"}</code> | The body: what's in their hands, belt and back, and everything inside. Setting it returns the old array to the pool. |
| <Link id="m-progressionbytes-2" /><code>{"int ProgressionBytes { get; set; }"}</code> | Used length of `ProgressionData` in bytes. |
| <Link id="m-progressiondata" /><code>{"uint[] ProgressionData { get; set; }"}</code> | Skills and progression. Setting it returns the old array to the pool. |
| <Link id="m-statebytes-2" /><code>{"int StateBytes { get; set; }"}</code> | Used length of `StateData` in bytes. |
| <Link id="m-statedata" /><code>{"uint[] StateData { get; set; }"}</code> | The player state stack. Setting it returns the old array to the pool. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Deep copy with its own arrays, used when writing the file in the background. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Returns all arrays to the pool. Warns if any were missing. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Reads the file, handling the current and three older formats. Older formats may drop cosmetics or state. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes the file in the current format. |
| <Link id="m-releasearray" /><code>{"private bool ReleaseArray(ref uint[] array)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerSave`:

[`PlayerCharacter.LoadFrom`](/game-api/types/alta-player/playercharacter#m-loadfrom), [`PlayerCharacter.SaveTo`](/game-api/types/alta-player/playercharacter#m-saveto), [`IPlayer.Save`](/game-api/types/alta-networking/iplayer#m-save), [`PlayerStateManager.LoadFrom`](/game-api/types/alta-player/playerstatemanager#m-loadfrom), [`PlayerStateManager.SaveTo`](/game-api/types/alta-player/playerstatemanager#m-saveto), [`PlayerSaveData.Populate`](/game-api/types/alta-utilities/playersavedata#m-populate), [`Player.GetPlayerSave`](/game-api/types/global-p/player#m-getplayersave), [`Player.LoadFrom`](/game-api/types/global-p/player#m-loadfrom), [`Player.Save`](/game-api/types/global-p/player#m-save), [`Player.saveData`](/game-api/types/global-p/player#m-savedata), [`PlayerController.LoadFrom`](/game-api/types/global-p/playercontroller#m-loadfrom), [`PlayerController.SaveNetworkPrefabToPlayerSave`](/game-api/types/global-p/playercontroller#m-savenetworkprefabtoplayersave), [`PlayerController.SaveTo`](/game-api/types/global-p/playercontroller#m-saveto), [`PlayerProgressionManager.LoadFrom`](/game-api/types/global-p/playerprogressionmanager#m-loadfrom), [`PlayerProgressionManager.SaveTo`](/game-api/types/global-p/playerprogressionmanager#m-saveto), [`ServerWipeManager.MovePlayerOutOfCaves`](/game-api/types/global-s/serverwipemanager#m-moveplayeroutofcaves), [`ServerWipeManager.RunThroughAllPlayers`](/game-api/types/global-s/serverwipemanager#m-runthroughallplayers), [`ServerWipeManager.SanitizePlayersSaves`](/game-api/types/global-s/serverwipemanager#m-sanitizeplayerssaves).
