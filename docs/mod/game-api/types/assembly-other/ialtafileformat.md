---
title: "IAltaFileFormat"
description: "Base for a file format the game can read from and write to a stream, such as a save file's contents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAltaFileFormat

An **abstract class** in `Alta.IO`, `Alta.Utilities`.

Base for a file format the game can read from and write to a stream, such as a save file's contents. Disposable.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`
- **Derived types** [`LandmarkSaveFormat`](/mod/game-api/types/alta-world/landmarksaveformat), [`MapSaveFormat`](/mod/game-api/types/alta-world/mapsaveformat), [`BasicSaveFile<T>`](/mod/game-api/types/alta-world/basicsavefile-t), [`CacheFileFormat`](/mod/game-api/types/alta-world/cachefileformat), [`ChunkSaveFormat`](/mod/game-api/types/alta-utilities/chunksaveformat), [`JsonAltaFormat<T>`](/mod/game-api/types/alta-utilities/jsonaltaformat-t), [`PlayerSave`](/mod/game-api/types/alta-utilities/playersave), [`TextFileFormat`](/mod/game-api/types/assembly-other/textfileformat), [`ClimbingTowerTeleporterSaveData`](/mod/game-api/types/game-other-namespaces/climbingtowerteleportersavedata), [`PlayerGoldBankAccountData`](/mod/game-api/types/global-p/playergoldbankaccountdata), [`PlayerPostboxStorageFileFormat`](/mod/game-api/types/global-p/playerpostboxstoragefileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected IAltaFileFormat()"}</code> | <span className="api-desc">Creates an `IAltaFileFormat` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; private set; }"}</code> | <span className="api-desc">Whether `Dispose` has been called.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"abstract "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns a copy of the file's contents.</span> |
| <Link id="m-dispose" /><code>{"virtual void Dispose()"}</code> | <span className="api-desc">Marks the object disposed.</span> |
| <Link id="m-readfrom" /><code>{"abstract void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads the contents from a stream, given the file it came from.</span> |
| <Link id="m-writeto" /><code>{"abstract void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes the contents to a stream.</span> |

## Used in

Members of other types that take, return or hold a `IAltaFileFormat`:

<div className="api-used-in">

[`LandmarkSaveFormat.Clone`](/mod/game-api/types/alta-world/landmarksaveformat#m-clone), [`MapSaveFormat.Clone`](/mod/game-api/types/alta-world/mapsaveformat#m-clone), [`BasicSaveFile<T>.Clone`](/mod/game-api/types/alta-world/basicsavefile-t#m-clone), [`CacheFileFormat.Clone`](/mod/game-api/types/alta-world/cachefileformat#m-clone), [`AltaFile.content`](/mod/game-api/types/assembly-other/altafile#m-content), [`AltaFile.Content`](/mod/game-api/types/assembly-other/altafile#m-content-2), [`AltaFile.WritingTaskAsync`](/mod/game-api/types/assembly-other/altafile#m-writingtaskasync), [`ChunkSaveFormat.Clone`](/mod/game-api/types/alta-utilities/chunksaveformat#m-clone), [`DatabaseSettingsFile.Content`](/mod/game-api/types/alta-utilities/databasesettingsfile#m-content), [`IAltaFile.Content`](/mod/game-api/types/assembly-other/ialtafile#m-content), [`JsonAltaFormat<T>.Clone`](/mod/game-api/types/alta-utilities/jsonaltaformat-t#m-clone), [`PlayerSave.Clone`](/mod/game-api/types/alta-utilities/playersave#m-clone), [`RemoteFiles.RemoteAltaFile<TFileType>.Content`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-content), [`TextFileFormat.Clone`](/mod/game-api/types/assembly-other/textfileformat#m-clone), [`ClimbingTowerTeleporterSaveData.Clone`](/mod/game-api/types/game-other-namespaces/climbingtowerteleportersavedata#m-clone), [`PlayerGoldBankAccountData.Clone`](/mod/game-api/types/global-p/playergoldbankaccountdata#m-clone), [`PlayerPostboxStorageFileFormat.Clone`](/mod/game-api/types/global-p/playerpostboxstoragefileformat#m-clone).

</div>
