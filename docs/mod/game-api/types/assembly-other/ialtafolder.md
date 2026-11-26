---
title: "IAltaFolder"
description: "A folder in the game's file storage that hands out IAltaFile and child IAltaFolder objects by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAltaFolder

An **interface** in `Alta.IO`, `Alta.Utilities`.

A folder in the game's file storage that hands out `IAltaFile` and child `IAltaFolder` objects by name. `AltaFolder` is the disk version.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AltaFolder`](/mod/game-api/types/assembly-other/altafolder)
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#ialtafolder-and-ialtafile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allfiles" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> AllFiles { get; }"}</code> | Files in this folder. |
| <Link id="m-allsubfolders" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> AllSubFolders { get; }"}</code> | Folders inside this folder. |
| <Link id="m-directoryinfo" /><code>{"DirectoryInfo DirectoryInfo { get; }"}</code> | The folder on disk. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Folder name. |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Parent { get; }"}</code> | The parent folder. |
| <Link id="m-path" /><code>{"string Path { get; }"}</code> | Full path of the folder. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> | Deletes the folder. |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> | Deletes the folder on a background task. |
| <Link id="m-fileexists" /><code>{"bool FileExists(string name, out "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | True if a file with this name exists, and returns it. |
| <Link id="m-getfile" /><code><Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> | Gets a file by name. |
| <Link id="m-getsubfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> | Gets a child folder by name. |
| <Link id="m-removefile" /><code>{"void RemoveFile("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Forgets a file. Called by the file when it is deleted. |
| <Link id="m-removesubfolder" /><code>{"void RemoveSubFolder(string name)"}</code> | Forgets a child folder by name. |
| <Link id="m-subfolderexists" /><code>{"bool SubfolderExists(string name, out "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | True if a child folder with this name exists, and returns it. |
| <Link id="m-unloadallfiles" /><code>{"void UnloadAllFiles()"}</code> | Drops the loaded content of every file. |

## Used in

Members of other types that take, return or hold a `IAltaFolder`:

[`ChunkFileHelper.GetFile`](/mod/game-api/types/alta-world/chunkfilehelper#m-getfile), [`ChunkFileHelper.GetFolder`](/mod/game-api/types/alta-world/chunkfilehelper#m-getfolder), [`PlayerDataFileHelper<T>.DataFolder`](/mod/game-api/types/alta-world/playerdatafilehelper-t#m-datafolder), [`ClientCacheManager.FileDownloader.ClientFolder`](/mod/game-api/types/alta-world/clientcachemanager-filedownloader#m-clientfolder), [`ClientCacheManager.FileDownloader.FileDownloader`](/mod/game-api/types/alta-world/clientcachemanager-filedownloader#m-ctor), [`AltaFile.AltaFile`](/mod/game-api/types/assembly-other/altafile#m-ctor), [`AltaFile.MoveTo`](/mod/game-api/types/assembly-other/altafile#m-moveto), [`AltaFile.parent`](/mod/game-api/types/assembly-other/altafile#m-parent), [`AltaFolder.AllSubFolders`](/mod/game-api/types/assembly-other/altafolder#m-allsubfolders), [`AltaFolder.AltaFolder`](/mod/game-api/types/assembly-other/altafolder#m-ctor), [`AltaFolder.GetSubfolder`](/mod/game-api/types/assembly-other/altafolder#m-getsubfolder), [`AltaFolder.Parent`](/mod/game-api/types/assembly-other/altafolder#m-parent), [`AltaFolder.SubfolderExists`](/mod/game-api/types/assembly-other/altafolder#m-subfolderexists), [`AltaFolder.subFolders`](/mod/game-api/types/assembly-other/altafolder#m-subfolders), [`AltaIO.CacheFolder`](/mod/game-api/types/assembly-other/altaio#m-cachefolder), [`AltaIO.ClientFolder`](/mod/game-api/types/assembly-other/altaio#m-clientfolder), [`AltaIO.GameFolder`](/mod/game-api/types/assembly-other/altaio#m-gamefolder), [`AltaIO.PersistentStorageFolder`](/mod/game-api/types/assembly-other/altaio#m-persistentstoragefolder), [`AltaIO.ServersFolder`](/mod/game-api/types/assembly-other/altaio#m-serversfolder), [`AltaIO.StorageFolder`](/mod/game-api/types/assembly-other/altaio#m-storagefolder), [`DatabaseSettingsFile.MoveTo`](/mod/game-api/types/alta-utilities/databasesettingsfile#m-moveto), [`IAltaFile.MoveTo`](/mod/game-api/types/assembly-other/ialtafile#m-moveto), [`PlayerSaveUtility.PlayerFolder`](/mod/game-api/types/alta-utilities/playersaveutility#m-playerfolder), [`PlayerSaveUtility.PlayerSaveUtility`](/mod/game-api/types/alta-utilities/playersaveutility#m-ctor), [`RemoteAltaFolder.GetSubfolder`](/mod/game-api/types/assembly-other/remotealtafolder#m-getsubfolder), [`RemoteAltaFolder.localFolder`](/mod/game-api/types/assembly-other/remotealtafolder#m-localfolder), [`RemoteAltaFolder.RemoteAltaFolder`](/mod/game-api/types/assembly-other/remotealtafolder#m-ctor), [`RemoteAltaFolder.SubfolderExists`](/mod/game-api/types/assembly-other/remotealtafolder#m-subfolderexists), [`RemoteFiles.RemoteAltaFile<TFileType>.MoveTo`](/mod/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-moveto), [`S3RemoteFolder.GetSubfolder`](/mod/game-api/types/assembly-other/s3remotefolder#m-getsubfolder), [`S3RemoteFolder.localFolder`](/mod/game-api/types/assembly-other/s3remotefolder#m-localfolder), [`S3RemoteFolder.S3RemoteFolder`](/mod/game-api/types/assembly-other/s3remotefolder#m-ctor), [`S3RemoteFolder.SubfolderExists`](/mod/game-api/types/assembly-other/s3remotefolder#m-subfolderexists), [`ServerSaveUtility.CacheFolder`](/mod/game-api/types/alta-utilities/serversaveutility#m-cachefolder), [`ServerSaveUtility.ChunksFolder`](/mod/game-api/types/alta-utilities/serversaveutility#m-chunksfolder), [`ServerSaveUtility.GetServerSavesFolder`](/mod/game-api/types/alta-utilities/serversaveutility#m-getserversavesfolder), [`ServerSaveUtility.LogsFolder`](/mod/game-api/types/alta-utilities/serversaveutility#m-logsfolder), [`ServerSaveUtility.SaveFolder`](/mod/game-api/types/alta-utilities/serversaveutility#m-savefolder), [`ServerSaveUtility.ServerFolder`](/mod/game-api/types/alta-utilities/serversaveutility#m-serverfolder), [`SettingsFileAccess<TSettings>.ChangeFile`](/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-changefile), [`SettingsFileAccess<TSettings>.CreateWatcher`](/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-createwatcher), [`SettingsFileAccess<TSettings>.SettingsFileAccess<TSettings>`](/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-ctor-2), [`AltaFolderModule.AltaFolderModule`](/mod/game-api/types/alta-networking/altafoldermodule#m-ctor), [`AltaFolderModule.Folder`](/mod/game-api/types/alta-networking/altafoldermodule#m-folder), [`OculusCloudStorage.Folder`](/mod/game-api/types/global-m-o/oculuscloudstorage#m-folder).
