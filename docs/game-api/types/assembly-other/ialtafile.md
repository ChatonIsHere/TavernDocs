---
title: "IAltaFile"
description: "interface IAltaFile in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAltaFile

An **interface** in `Alta.IO`, `Alta.Utilities`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AltaFile`](/game-api/types/assembly-other/altafile), [`DatabaseSettingsFile`](/game-api/types/alta-utilities/databasesettingsfile), [`RemoteFiles.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#ialtafolder-and-ialtafile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-content" /><code><Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Content { get; set; }"}</code> |  |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> |  |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; }"}</code> |  |
| <Link id="m-isexisting" /><code>{"bool IsExisting { get; }"}</code> |  |
| <Link id="m-isreading" /><code>{"bool IsReading { get; }"}</code> |  |
| <Link id="m-iswriting" /><code>{"bool IsWriting { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete(bool isDeletingBackup = false)"}</code> |  |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync(bool isDeletingBackup = false)"}</code> |  |
| <Link id="m-finishreading" /><code>{"void FinishReading()"}</code> |  |
| <Link id="m-finishwriting" /><code>{"void FinishWriting()"}</code> |  |
| <Link id="m-moveto" /><code>{"void MoveTo("}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> |  |
| <Link id="m-queueunload" /><code>{"void QueueUnload()"}</code> |  |
| <Link id="m-queueunloadasync" /><code>{"Task QueueUnloadAsync()"}</code> |  |
| <Link id="m-readasync" /><code>{"Task<T> ReadAsync<T>()"}</code> |  |
| <Link id="m-readasync-2" /><code>{"Task<T> ReadAsync<T>(Func<T> create)"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |  |
| <Link id="m-resethaschanged" /><code>{"void ResetHasChanged()"}</code> |  |
| <Link id="m-writeasync" /><code>{"void WriteAsync()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAltaFile`:

[`ChunkFileHelper.GetFile`](/game-api/types/alta-world/chunkfilehelper#m-getfile), [`DynamicChunkContentManager.chunkFile`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-chunkfile), [`GlobalCommunalStorageValues.file`](/game-api/types/alta-items/globalcommunalstoragevalues#m-file), [`PlayerDataFileHelper<T>.GetAsync`](/game-api/types/alta-world/playerdatafilehelper-t#m-getasync), [`PlayerDataFileHelper<T>.GetFileAsync`](/game-api/types/alta-world/playerdatafilehelper-t#m-getfileasync), [`PlayerDataFileHelper<T>.GetSharedAsync`](/game-api/types/alta-world/playerdatafilehelper-t#m-getsharedasync), [`PlayerMapManager.file`](/game-api/types/alta-world/playermapmanager#m-file), [`PlayerMapManager.PlayerMapManager`](/game-api/types/alta-world/playermapmanager#m-ctor-2), [`ServerClientLandmarkManager.serverFile`](/game-api/types/alta-world/serverclientlandmarkmanager#m-serverfile), [`BasicSaveFile<T>.ReadAndUnload`](/game-api/types/alta-world/basicsavefile-t#m-readandunload), [`BasicSaveFile<T>.WriteAndUnload`](/game-api/types/alta-world/basicsavefile-t#m-writeandunload), [`ClientCacheManager.DownloadCache`](/game-api/types/alta-world/clientcachemanager#m-downloadcache), [`ClientCacheManager.DownloaderFinished`](/game-api/types/alta-world/clientcachemanager#m-downloaderfinished), [`ClientCacheManager.FileDownloader.completionSource`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-completionsource), [`ClientCacheManager.FileDownloader.Finished`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-finished), [`ClientCacheManager.FileDownloader.Task`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-task), [`AltaFolder.AllFiles`](/game-api/types/assembly-other/altafolder#m-allfiles), [`AltaFolder.FileExists`](/game-api/types/assembly-other/altafolder#m-fileexists), [`AltaFolder.files`](/game-api/types/assembly-other/altafolder#m-files), [`AltaFolder.GetFile`](/game-api/types/assembly-other/altafolder#m-getfile), [`AltaFolder.RemoveFile`](/game-api/types/assembly-other/altafolder#m-removefile), [`IAltaFolder.AllFiles`](/game-api/types/assembly-other/ialtafolder#m-allfiles), [`IAltaFolder.FileExists`](/game-api/types/assembly-other/ialtafolder#m-fileexists), [`IAltaFolder.GetFile`](/game-api/types/assembly-other/ialtafolder#m-getfile), [`IAltaFolder.RemoveFile`](/game-api/types/assembly-other/ialtafolder#m-removefile), [`PlayerSaveUtility.Load`](/game-api/types/alta-utilities/playersaveutility#m-load), [`RemoteAltaFile.RemoteAltaFile`](/game-api/types/assembly-other/remotealtafile#m-ctor), [`RemoteAltaFolder.FileExists`](/game-api/types/assembly-other/remotealtafolder#m-fileexists), [`RemoteAltaFolder.GetFile`](/game-api/types/assembly-other/remotealtafolder#m-getfile), [`RemoteFiles.RemoteAltaFile<TFileType>.localFile`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-localfile), [`RemoteFiles.RemoteAltaFile<TFileType>.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-ctor), [`S3CloudStorageRemoteFile.S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile#m-ctor), [`S3RemoteFolder.FileExists`](/game-api/types/assembly-other/s3remotefolder#m-fileexists), [`S3RemoteFolder.GetFile`](/game-api/types/assembly-other/s3remotefolder#m-getfile), [`ServerSaveUtility.GetConfig`](/game-api/types/alta-utilities/serversaveutility#m-getconfig), [`SettingsFileAccess<TSettings>.file`](/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-file), [`IPerPlayerContent<TSaveFormat>.LoadAsync`](/game-api/types/global-i-l/iperplayercontent-tsaveformat#m-loadasync), [`PerPlayerContent<TSaveFormat>.File`](/game-api/types/global-p/perplayercontent-tsaveformat#m-file), [`PerPlayerContent<TSaveFormat>.LoadAsync`](/game-api/types/global-p/perplayercontent-tsaveformat#m-loadasync), [`Player.InitializePlayerOnServer`](/game-api/types/global-p/player#m-initializeplayeronserver), [`Player.saveFile`](/game-api/types/global-p/player#m-savefile), [`PlayerPostboxStorage.LoadAsync`](/game-api/types/global-p/playerpostboxstorage#m-loadasync).
