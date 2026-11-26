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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AltaFile`](/mod/game-api/types/assembly-other/altafile), [`DatabaseSettingsFile`](/mod/game-api/types/alta-utilities/databasesettingsfile), [`RemoteFiles.RemoteAltaFile<TFileType>`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#ialtafolder-and-ialtafile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> | <span className="api-desc">The loaded content. Setting a new value disposes the old one.</span> |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | <span className="api-desc">Full path on disk.</span> |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> | <span className="api-desc">Set to true after a write completes. Cleared with `ResetHasChanged`.</span> |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> | <span className="api-desc">True if the file exists on disk.</span> |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> | <span className="api-desc">True while a read is running.</span> |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> | <span className="api-desc">True while a write is running.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">File name with extension.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Deletes the file from disk and its folder, and drops the content. Can also delete the backup.</span> |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync(bool isDeletingBackup = false)"}</code> | <span className="api-desc">Same as `Delete`, but the disk work runs on a background task.</span> |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> | <span className="api-desc">Blocks until any running read finishes.</span> |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> | <span className="api-desc">Blocks until any running write finishes.</span> |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Moves the file, and its backup if there is one, into another folder.</span> |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> | <span className="api-desc">Drops the loaded content now, or after the current write finishes. Refused while reading.</span> |
| <Link id="m-queueunloadasync" /><code>{"Task QueueUnloadAsync()"}</code> | <span className="api-desc">Like `QueueUnload`, but waits for the current write when there is one.</span> |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> | <span className="api-desc">Reads the file into the given format on a background task, or returns the content if already loaded. Content is null if the file is missing.</span> |
| <Link id="m-readasync-2" /><code>{"Task<T> ReadAsync<T>(Func<T> create)"}</code> | <span className="api-desc">Reads the file into the given format on a background task, or returns the content if already loaded. Content is null if the file is missing.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Refreshes the cached file info from disk.</span> |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> | <span className="api-desc">Clears `HasChanged`.</span> |
| <Link id="m-writeasync" /><code>{"void WriteAsync()"}</code> | <span className="api-desc">Writes a copy of the current content on a background task. A newer write cancels one still running.</span> |

## Used in

Members of other types that take, return or hold a `IAltaFile`:

<div className="api-used-in">

[`ChunkFileHelper.GetFile`](/mod/game-api/types/alta-world/chunkfilehelper#m-getfile), [`DynamicChunkContentManager.chunkFile`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-chunkfile), [`GlobalCommunalStorageValues.file`](/mod/game-api/types/alta-items/globalcommunalstoragevalues#m-file), [`PlayerDataFileHelper<T>.GetAsync`](/mod/game-api/types/alta-world/playerdatafilehelper-t#m-getasync), [`PlayerDataFileHelper<T>.GetFileAsync`](/mod/game-api/types/alta-world/playerdatafilehelper-t#m-getfileasync), [`PlayerDataFileHelper<T>.GetSharedAsync`](/mod/game-api/types/alta-world/playerdatafilehelper-t#m-getsharedasync), [`PlayerMapManager.file`](/mod/game-api/types/alta-world/playermapmanager#m-file), [`PlayerMapManager.PlayerMapManager`](/mod/game-api/types/alta-world/playermapmanager#m-ctor-2), [`ServerClientLandmarkManager.serverFile`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-serverfile), [`BasicSaveFile<T>.ReadAndUnload`](/mod/game-api/types/alta-world/basicsavefile-t#m-readandunload), [`BasicSaveFile<T>.WriteAndUnload`](/mod/game-api/types/alta-world/basicsavefile-t#m-writeandunload), [`ClientCacheManager.DownloadCache`](/mod/game-api/types/alta-world/clientcachemanager#m-downloadcache), [`ClientCacheManager.DownloaderFinished`](/mod/game-api/types/alta-world/clientcachemanager#m-downloaderfinished), [`ClientCacheManager.FileDownloader.completionSource`](/mod/game-api/types/alta-world/clientcachemanager-filedownloader#m-completionsource), [`ClientCacheManager.FileDownloader.Finished`](/mod/game-api/types/alta-world/clientcachemanager-filedownloader#m-finished), [`ClientCacheManager.FileDownloader.Task`](/mod/game-api/types/alta-world/clientcachemanager-filedownloader#m-task), [`AltaFolder.AllFiles`](/mod/game-api/types/assembly-other/altafolder#m-allfiles), [`AltaFolder.FileExists`](/mod/game-api/types/assembly-other/altafolder#m-fileexists), [`AltaFolder.files`](/mod/game-api/types/assembly-other/altafolder#m-files), [`AltaFolder.GetFile`](/mod/game-api/types/assembly-other/altafolder#m-getfile), [`AltaFolder.RemoveFile`](/mod/game-api/types/assembly-other/altafolder#m-removefile), [`IAltaFolder.AllFiles`](/mod/game-api/types/assembly-other/ialtafolder#m-allfiles), [`IAltaFolder.FileExists`](/mod/game-api/types/assembly-other/ialtafolder#m-fileexists), [`IAltaFolder.GetFile`](/mod/game-api/types/assembly-other/ialtafolder#m-getfile), [`IAltaFolder.RemoveFile`](/mod/game-api/types/assembly-other/ialtafolder#m-removefile), [`PlayerSaveUtility.Load`](/mod/game-api/types/alta-utilities/playersaveutility#m-load), [`RemoteAltaFile.RemoteAltaFile`](/mod/game-api/types/assembly-other/remotealtafile#m-ctor), [`RemoteAltaFolder.FileExists`](/mod/game-api/types/assembly-other/remotealtafolder#m-fileexists), [`RemoteAltaFolder.GetFile`](/mod/game-api/types/assembly-other/remotealtafolder#m-getfile), [`RemoteFiles.RemoteAltaFile<TFileType>.localFile`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-localfile), [`RemoteFiles.RemoteAltaFile<TFileType>.RemoteAltaFile<TFileType>`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-ctor), [`S3CloudStorageRemoteFile.S3CloudStorageRemoteFile`](/mod/game-api/types/assembly-other/s3cloudstorageremotefile#m-ctor), [`S3RemoteFolder.FileExists`](/mod/game-api/types/assembly-other/s3remotefolder#m-fileexists), [`S3RemoteFolder.GetFile`](/mod/game-api/types/assembly-other/s3remotefolder#m-getfile), [`ServerSaveUtility.GetConfig`](/mod/game-api/types/alta-utilities/serversaveutility#m-getconfig), [`SettingsFileAccess<TSettings>.file`](/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-file), [`IPerPlayerContent<TSaveFormat>.LoadAsync`](/mod/game-api/types/global-i-l/iperplayercontent-tsaveformat#m-loadasync), [`PerPlayerContent<TSaveFormat>.File`](/mod/game-api/types/global-p/perplayercontent-tsaveformat#m-file), [`PerPlayerContent<TSaveFormat>.LoadAsync`](/mod/game-api/types/global-p/perplayercontent-tsaveformat#m-loadasync), [`Player.InitializePlayerOnServer`](/mod/game-api/types/global-p/player#m-initializeplayeronserver), [`Player.saveFile`](/mod/game-api/types/global-p/player#m-savefile), [`PlayerPostboxStorage.LoadAsync`](/mod/game-api/types/global-p/playerpostboxstorage#m-loadasync).

</div>
