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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AltaFolder`](/game-api/types/assembly-other/altafolder)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#ialtafolder-and-ialtafile)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allfiles" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{"> AllFiles { get; }"}</code> | Files in this folder. |
| <Link id="m-allsubfolders" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{"> AllSubFolders { get; }"}</code> | Folders inside this folder. |
| <Link id="m-directoryinfo" /><code>{"DirectoryInfo DirectoryInfo { get; }"}</code> | The folder on disk. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Folder name. |
| <Link id="m-parent" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" Parent { get; }"}</code> | The parent folder. |
| <Link id="m-path" /><code>{"string Path { get; }"}</code> | Full path of the folder. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"void Delete()"}</code> | Deletes the folder. |
| <Link id="m-deleteasync" /><code>{"Task DeleteAsync()"}</code> | Deletes the folder on a background task. |
| <Link id="m-fileexists" /><code>{"bool FileExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | True if a file with this name exists, and returns it. |
| <Link id="m-getfile" /><code><Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetFile(string name)"}</code> | Gets a file by name. |
| <Link id="m-getsubfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetSubfolder(string name)"}</code> | Gets a child folder by name. |
| <Link id="m-removefile" /><code>{"void RemoveFile("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Forgets a file. Called by the file when it is deleted. |
| <Link id="m-removesubfolder" /><code>{"void RemoveSubFolder(string name)"}</code> | Forgets a child folder by name. |
| <Link id="m-subfolderexists" /><code>{"bool SubfolderExists(string name, out "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" folder)"}</code> | True if a child folder with this name exists, and returns it. |
| <Link id="m-unloadallfiles" /><code>{"void UnloadAllFiles()"}</code> | Drops the loaded content of every file. |

## Used in

Members of other types that take, return or hold a `IAltaFolder`:

[`ChunkFileHelper.GetFile`](/game-api/types/alta-world/chunkfilehelper#m-getfile), [`ChunkFileHelper.GetFolder`](/game-api/types/alta-world/chunkfilehelper#m-getfolder), [`PlayerDataFileHelper<T>.DataFolder`](/game-api/types/alta-world/playerdatafilehelper-t#m-datafolder), [`ClientCacheManager.FileDownloader.ClientFolder`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-clientfolder), [`ClientCacheManager.FileDownloader.FileDownloader`](/game-api/types/alta-world/clientcachemanager-filedownloader#m-ctor), [`AltaFile.AltaFile`](/game-api/types/assembly-other/altafile#m-ctor), [`AltaFile.MoveTo`](/game-api/types/assembly-other/altafile#m-moveto), [`AltaFile.parent`](/game-api/types/assembly-other/altafile#m-parent), [`AltaFolder.AllSubFolders`](/game-api/types/assembly-other/altafolder#m-allsubfolders), [`AltaFolder.AltaFolder`](/game-api/types/assembly-other/altafolder#m-ctor), [`AltaFolder.GetSubfolder`](/game-api/types/assembly-other/altafolder#m-getsubfolder), [`AltaFolder.Parent`](/game-api/types/assembly-other/altafolder#m-parent), [`AltaFolder.SubfolderExists`](/game-api/types/assembly-other/altafolder#m-subfolderexists), [`AltaFolder.subFolders`](/game-api/types/assembly-other/altafolder#m-subfolders), [`AltaIO.CacheFolder`](/game-api/types/assembly-other/altaio#m-cachefolder), [`AltaIO.ClientFolder`](/game-api/types/assembly-other/altaio#m-clientfolder), [`AltaIO.GameFolder`](/game-api/types/assembly-other/altaio#m-gamefolder), [`AltaIO.PersistentStorageFolder`](/game-api/types/assembly-other/altaio#m-persistentstoragefolder), [`AltaIO.ServersFolder`](/game-api/types/assembly-other/altaio#m-serversfolder), [`AltaIO.StorageFolder`](/game-api/types/assembly-other/altaio#m-storagefolder), [`DatabaseSettingsFile.MoveTo`](/game-api/types/alta-utilities/databasesettingsfile#m-moveto), [`IAltaFile.MoveTo`](/game-api/types/assembly-other/ialtafile#m-moveto), [`PlayerSaveUtility.PlayerFolder`](/game-api/types/alta-utilities/playersaveutility#m-playerfolder), [`PlayerSaveUtility.PlayerSaveUtility`](/game-api/types/alta-utilities/playersaveutility#m-ctor), [`RemoteAltaFolder.GetSubfolder`](/game-api/types/assembly-other/remotealtafolder#m-getsubfolder), [`RemoteAltaFolder.localFolder`](/game-api/types/assembly-other/remotealtafolder#m-localfolder), [`RemoteAltaFolder.RemoteAltaFolder`](/game-api/types/assembly-other/remotealtafolder#m-ctor), [`RemoteAltaFolder.SubfolderExists`](/game-api/types/assembly-other/remotealtafolder#m-subfolderexists), [`RemoteFiles.RemoteAltaFile<TFileType>.MoveTo`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype#m-moveto), [`S3RemoteFolder.GetSubfolder`](/game-api/types/assembly-other/s3remotefolder#m-getsubfolder), [`S3RemoteFolder.localFolder`](/game-api/types/assembly-other/s3remotefolder#m-localfolder), [`S3RemoteFolder.S3RemoteFolder`](/game-api/types/assembly-other/s3remotefolder#m-ctor), [`S3RemoteFolder.SubfolderExists`](/game-api/types/assembly-other/s3remotefolder#m-subfolderexists), [`ServerSaveUtility.CacheFolder`](/game-api/types/alta-utilities/serversaveutility#m-cachefolder), [`ServerSaveUtility.ChunksFolder`](/game-api/types/alta-utilities/serversaveutility#m-chunksfolder), [`ServerSaveUtility.GetServerSavesFolder`](/game-api/types/alta-utilities/serversaveutility#m-getserversavesfolder), [`ServerSaveUtility.LogsFolder`](/game-api/types/alta-utilities/serversaveutility#m-logsfolder), [`ServerSaveUtility.SaveFolder`](/game-api/types/alta-utilities/serversaveutility#m-savefolder), [`ServerSaveUtility.ServerFolder`](/game-api/types/alta-utilities/serversaveutility#m-serverfolder), [`SettingsFileAccess<TSettings>.ChangeFile`](/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-changefile), [`SettingsFileAccess<TSettings>.CreateWatcher`](/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-createwatcher), [`SettingsFileAccess<TSettings>.SettingsFileAccess<TSettings>`](/game-api/types/alta-utilities/settingsfileaccess-tsettings#m-ctor-2), [`AltaFolderModule.AltaFolderModule`](/game-api/types/alta-networking/altafoldermodule#m-ctor), [`AltaFolderModule.Folder`](/game-api/types/alta-networking/altafoldermodule#m-folder), [`OculusCloudStorage.Folder`](/game-api/types/global-m-o/oculuscloudstorage#m-folder).
