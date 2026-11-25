---
title: "IAltaFileFormat"
description: "abstract class IAltaFileFormat in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAltaFileFormat

An **abstract class** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`
- **Derived types** [`LandmarkSaveFormat`](/game-api/types/alta-world/landmarksaveformat), [`MapSaveFormat`](/game-api/types/alta-world/mapsaveformat), [`BasicSaveFile<T>`](/game-api/types/alta-world/basicsavefile-t), [`CacheFileFormat`](/game-api/types/alta-world/cachefileformat), [`ChunkSaveFormat`](/game-api/types/alta-utilities/chunksaveformat), [`JsonAltaFormat<T>`](/game-api/types/alta-utilities/jsonaltaformat-t), [`PlayerSave`](/game-api/types/alta-utilities/playersave), [`TextFileFormat`](/game-api/types/assembly-other/textfileformat), [`ClimbingTowerTeleporterSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleportersavedata), [`PlayerGoldBankAccountData`](/game-api/types/global-p/playergoldbankaccountdata), [`PlayerPostboxStorageFileFormat`](/game-api/types/global-p/playerpostboxstoragefileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected IAltaFileFormat()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdisposed" /><code>{"bool IsDisposed { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"abstract "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"virtual void Dispose()"}</code> |  |
| <Link id="m-readfrom" /><code>{"abstract void ReadFrom(FileInfo info, Stream stream)"}</code> |  |
| <Link id="m-writeto" /><code>{"abstract void WriteTo(Stream stream, CancellationToken token)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAltaFileFormat`:

[`LandmarkSaveFormat.Clone`](/game-api/types/alta-world/landmarksaveformat#m-clone), [`MapSaveFormat.Clone`](/game-api/types/alta-world/mapsaveformat#m-clone), [`BasicSaveFile<T>.Clone`](/game-api/types/alta-world/basicsavefile-t#m-clone), [`CacheFileFormat.Clone`](/game-api/types/alta-world/cachefileformat#m-clone), [`AltaFile.content`](/game-api/types/assembly-other/altafile#m-content), [`AltaFile.Content`](/game-api/types/assembly-other/altafile#m-content-2), [`AltaFile.WritingTaskAsync`](/game-api/types/assembly-other/altafile#m-writingtaskasync), [`ChunkSaveFormat.Clone`](/game-api/types/alta-utilities/chunksaveformat#m-clone), [`DatabaseSettingsFile.Content`](/game-api/types/alta-utilities/databasesettingsfile#m-content), [`IAltaFile.Content`](/game-api/types/assembly-other/ialtafile#m-content), [`JsonAltaFormat<T>.Clone`](/game-api/types/alta-utilities/jsonaltaformat-t#m-clone), [`PlayerSave.Clone`](/game-api/types/alta-utilities/playersave#m-clone), [`RemoteFiles.RemoteAltaFile<TFileType>.Content`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-content), [`TextFileFormat.Clone`](/game-api/types/assembly-other/textfileformat#m-clone), [`ClimbingTowerTeleporterSaveData.Clone`](/game-api/types/game-other-namespaces/climbingtowerteleportersavedata#m-clone), [`PlayerGoldBankAccountData.Clone`](/game-api/types/global-p/playergoldbankaccountdata#m-clone), [`PlayerPostboxStorageFileFormat.Clone`](/game-api/types/global-p/playerpostboxstoragefileformat#m-clone).
