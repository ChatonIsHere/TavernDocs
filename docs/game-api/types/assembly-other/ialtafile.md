---
title: "IAltaFile"
description: "A file in the game's save and settings storage, with async reads into a typed format and safe writes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAltaFile

An **interface** in `Alta.IO`, `Alta.Utilities`.

A file in the game's save and settings storage, with async reads into a typed format and safe writes. `AltaFile` is the disk version: it writes to a temp file, then swaps it in and keeps the old one as a `_backup` copy.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AltaFile`](/game-api/types/assembly-other/altafile), [`DatabaseSettingsFile`](/game-api/types/alta-utilities/databasesettingsfile), [`RemoteFiles.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#ialtafolder-and-ialtafile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> | The loaded content. Setting a new value disposes the old one. |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | Full path on disk. |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> | Set to true after a write completes. Cleared with `ResetHasChanged`. |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> | True if the file exists on disk. |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> | True while a read is running. |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> | True while a write is running. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | File name with extension. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> | Deletes the file from disk and its folder, and drops the content. Can also delete the backup. |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync(bool isDeletingBackup = false)"}</code> | Same as `Delete`, but the disk work runs on a background task. |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> | Blocks until any running read finishes. |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> | Blocks until any running write finishes. |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | Moves the file, and its backup if there is one, into another folder. |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> | Drops the loaded content now, or after the current write finishes. Refused while reading. |
| <Link id="m-queueunloadasync" /><code>{"Task QueueUnloadAsync()"}</code> | Like `QueueUnload`, but waits for the current write when there is one. |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> | Reads the file into the given format on a background task, or returns the content if already loaded. Content is null if the file is missing. |
| <Link id="m-readasync-2" /><code>{"Task<T> ReadAsync<T>(Func<T> create)"}</code> | Reads the file into the given format on a background task, or returns the content if already loaded. Content is null if the file is missing. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Refreshes the cached file info from disk. |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> | Clears `HasChanged`. |
| <Link id="m-writeasync" /><code>{"void WriteAsync()"}</code> | Writes a copy of the current content on a background task. A newer write cancels one still running. |

## Used in

Members of other types that take, return or hold a `IAltaFile`:

[`ChunkFileHelper.GetFile`](/game-api/types/alta-world/chunkfilehelper#m-getfile), [`DynamicChunkContentManager.chunkFile`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-chunkfile), [`GlobalCommunalStorageValues.file`](/game-api/types/alta-items/globalcommunalstoragevalues#m-file), [`PlayerDataFileHelper<T>.GetAsync`](/game-api/types/alta-world/playerdatafilehelper-t#m-getasync), [`PlayerDataFileHelper<T>.GetFileAsync`](/game-api/types/alta-world/playerdatafilehelper-t#m-getfileasync), [`PlayerDataFileHelper<T>.GetSharedAsync`](/game-api/types/alta-world/playerdatafilehelper-t#m-getsharedasync), [`PlayerMapManager.file`](/game-api/types/alta-world/playermapmanager#m-file), [`PlayerMapManager.PlayerMapManager`](/game-api/types/alta-world/playermapmanager#m-ctor-2), [`ServerClientLandmarkManager.serverFile`](/game-api/types/alta-world/serverclientlandmarkmanager#m-serverfile), [`BasicSaveFile<T>.ReadAndUnload`](/game-api/types/alta-world/basicsavefile-t#m-readandunload), [`BasicSaveFile<T>.WriteAndUnload`](/game-api/types/alta-world/basicsavefile-t#m-writeandunload), [`ClientCacheManager.DownloadCache`](/game-api/types/alta-world/clientcachemanager#m-downloadcache), [`ClientCacheManager.DownloaderFinished`](/game-api/types/alta-world/clientcachemanager#m-downloaderfinished), [`ClientCacheManager.FileDownloader.completionSource`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-completionsource), [`ClientCacheManager.FileDownloader.Finished`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-finished), [`ClientCacheManager.FileDownloader.Task`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-task), [`AltaFolder.AllFiles`](/game-api/types/assembly-other/altafolder#m-allfiles), [`AltaFolder.FileExists`](/game-api/types/assembly-other/altafolder#m-fileexists), [`AltaFolder.files`](/game-api/types/assembly-other/altafolder#m-files), [`AltaFolder.GetFile`](/game-api/types/assembly-other/altafolder#m-getfile), [`AltaFolder.RemoveFile`](/game-api/types/assembly-other/altafolder#m-removefile), [`IAltaFolder.AllFiles`](/game-api/types/assembly-other/ialtafolder#m-allfiles), [`IAltaFolder.FileExists`](/game-api/types/assembly-other/ialtafolder#m-fileexists), [`IAltaFolder.GetFile`](/game-api/types/assembly-other/ialtafolder#m-getfile), [`IAltaFolder.RemoveFile`](/game-api/types/assembly-other/ialtafolder#m-removefile), [`PlayerSaveUtility.Load`](/game-api/types/alta-utilities/playersaveutility#m-load), [`RemoteAltaFile.RemoteAltaFile`](/game-api/types/assembly-other/remotealtafile#m-ctor), [`RemoteAltaFolder.FileExists`](/game-api/types/assembly-other/remotealtafolder#m-fileexists), [`RemoteAltaFolder.GetFile`](/game-api/types/assembly-other/remotealtafolder#m-getfile), [`RemoteFiles.RemoteAltaFile<TFileType>.localFile`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-localfile), [`RemoteFiles.RemoteAltaFile<TFileType>.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-ctor), [`S3CloudStorageRemoteFile.S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile#m-ctor), [`S3RemoteFolder.FileExists`](/game-api/types/assembly-other/s3remotefolder#m-fileexists), [`S3RemoteFolder.GetFile`](/game-api/types/assembly-other/s3remotefolder#m-getfile), [`ServerSaveUtility.GetConfig`](/game-api/types/alta-utilities/serversaveutility#m-getconfig), [`SettingsFileAccess<TSettings>.file`](/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-file), [`IPerPlayerContent<TSaveFormat>.LoadAsync`](/game-api/types/global-i-l/iperplayercontent-tsaveformat#m-loadasync), [`PerPlayerContent<TSaveFormat>.File`](/game-api/types/global-p/perplayercontent-tsaveformat#m-file), [`PerPlayerContent<TSaveFormat>.LoadAsync`](/game-api/types/global-p/perplayercontent-tsaveformat#m-loadasync), [`Player.InitializePlayerOnServer`](/game-api/types/global-p/player#m-initializeplayeronserver), [`Player.saveFile`](/game-api/types/global-p/player#m-savefile), [`PlayerPostboxStorage.LoadAsync`](/game-api/types/global-p/playerpostboxstorage#m-loadasync).
