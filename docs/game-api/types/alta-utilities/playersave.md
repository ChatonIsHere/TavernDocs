---
title: "PlayerSave"
description: "class PlayerSave in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSave

A **class** in `Root.Township`, `Alta.Utilities`.

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
| <Link id="m-cosmeticbytes" /><code>{"int CosmeticBytes { get; set; }"}</code> |  |
| <Link id="m-cosmeticdata" /><code>{"uint[] CosmeticData { get; set; }"}</code> |  |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-utilities/playersavefiledata">{"PlayerSaveFileData"}</Link>{" Data { get; }"}</code> |  |
| <Link id="m-lastsafeposition-2" /><code>{"Vector3 LastSafePosition { get; set; }"}</code> |  |
| <Link id="m-playerbytes-2" /><code>{"int PlayerBytes { get; set; }"}</code> |  |
| <Link id="m-playerdata" /><code>{"uint[] PlayerData { get; set; }"}</code> |  |
| <Link id="m-playeridentifier" /><code>{"int PlayerIdentifier { get; set; }"}</code> |  |
| <Link id="m-prefabbytes-2" /><code>{"int PrefabBytes { get; set; }"}</code> |  |
| <Link id="m-prefabchunkversioning" /><code><Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" PrefabChunkVersioning { get; set; }"}</code> |  |
| <Link id="m-prefabdata" /><code>{"uint[] PrefabData { get; set; }"}</code> |  |
| <Link id="m-progressionbytes-2" /><code>{"int ProgressionBytes { get; set; }"}</code> |  |
| <Link id="m-progressiondata" /><code>{"uint[] ProgressionData { get; set; }"}</code> |  |
| <Link id="m-statebytes-2" /><code>{"int StateBytes { get; set; }"}</code> |  |
| <Link id="m-statedata" /><code>{"uint[] StateData { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> |  |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> |  |
| <Link id="m-releasearray" /><code>{"private bool ReleaseArray(ref uint[] array)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerSave`:

[`PlayerCharacter.LoadFrom`](/game-api/types/alta-player/playercharacter#m-loadfrom), [`PlayerCharacter.SaveTo`](/game-api/types/alta-player/playercharacter#m-saveto), [`IPlayer.Save`](/game-api/types/alta-networking/iplayer#m-save), [`PlayerStateManager.LoadFrom`](/game-api/types/alta-player/playerstatemanager#m-loadfrom), [`PlayerStateManager.SaveTo`](/game-api/types/alta-player/playerstatemanager#m-saveto), [`PlayerSaveData.Populate`](/game-api/types/alta-utilities/playersavedata#m-populate), [`Player.GetPlayerSave`](/game-api/types/global-p/player#m-getplayersave), [`Player.LoadFrom`](/game-api/types/global-p/player#m-loadfrom), [`Player.Save`](/game-api/types/global-p/player#m-save), [`Player.saveData`](/game-api/types/global-p/player#m-savedata), [`PlayerController.LoadFrom`](/game-api/types/global-p/playercontroller#m-loadfrom), [`PlayerController.SaveNetworkPrefabToPlayerSave`](/game-api/types/global-p/playercontroller#m-savenetworkprefabtoplayersave), [`PlayerController.SaveTo`](/game-api/types/global-p/playercontroller#m-saveto), [`PlayerProgressionManager.LoadFrom`](/game-api/types/global-p/playerprogressionmanager#m-loadfrom), [`PlayerProgressionManager.SaveTo`](/game-api/types/global-p/playerprogressionmanager#m-saveto), [`ServerWipeManager.MovePlayerOutOfCaves`](/game-api/types/global-s/serverwipemanager#m-moveplayeroutofcaves), [`ServerWipeManager.RunThroughAllPlayers`](/game-api/types/global-s/serverwipemanager#m-runthroughallplayers), [`ServerWipeManager.SanitizePlayersSaves`](/game-api/types/global-s/serverwipemanager#m-sanitizeplayerssaves).
