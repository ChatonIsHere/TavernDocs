---
title: "CompressionUtilities"
description: "Editor tool plus static helpers that pack a file or folder into a gzip file with a simple custom layout, and unpack it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompressionUtilities

A **class** in `Root.Township`, the global namespace.

Editor tool plus static helpers that pack a file or folder into a gzip file with a simple custom layout, and unpack it. Not a standard zip or tar.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ProgressDelegate`](/mod/game-api/types/global-c-d/compressionutilities-progressdelegate)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CompressionUtilities()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filepath" /><code>{"private string filePath"}</code> | <span className="api-desc">File or folder to zip from the inspector.</span> |
| <Link id="m-iscompressing" /><code>{"private bool isCompressing"}</code> | <span className="api-desc">Inspector button that zips `filePath`.</span> |
| <Link id="m-isdecompressing" /><code>{"private bool isDecompressing"}</code> | <span className="api-desc">Inspector button that unzips `targetToUnZip` and deletes it after.</span> |
| <Link id="m-outputfile" /><code>{"private string outputFile"}</code> | <span className="api-desc">Folder the zip is written into.</span> |
| <Link id="m-targettounzip" /><code>{"private string targetToUnZip"}</code> | <span className="api-desc">Packed file to unzip from the inspector.</span> |
| <Link id="m-unzippingfolder" /><code>{"private string unzippingFolder"}</code> | <span className="api-desc">Folder to unzip into.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compressfile" /><code>{"static string CompressFile(string fileToCompress, string destinationFolderPath)"}</code> | <span className="api-desc">Public overload: packs a file or folder into `name.gz` in the destination folder and returns that path. The private ones write single entries.</span> |
| <Link id="m-decompressfile" /><code>{"static bool DecompressFile(string fileToDecompress, string folderToCompressTo, bool isDeletingCompressedFile)"}</code> | <span className="api-desc">Public overload: unpacks a packed file into a folder and can delete the packed file. The private one reads one entry.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-compressdirectory" /><code>{"private static void CompressDirectory(string directoryPath, string compressedPath, "}<Link to="/mod/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> | <span className="api-desc">Writes every file under a folder into one gzip stream, after a leading 1 byte that marks it as a folder.</span> |
| <Link id="m-compressfile-2" /><code>{"private static void CompressFile(string filePath, string relativePath, string compressedPath)"}</code> | <span className="api-desc">Public overload: packs a file or folder into `name.gz` in the destination folder and returns that path. The private ones write single entries.</span> |
| <Link id="m-compressfile-3" /><code>{"private static void CompressFile(string filePath, string relativePath, GZipStream zipStream)"}</code> | <span className="api-desc">Public overload: packs a file or folder into `name.gz` in the destination folder and returns that path. The private ones write single entries.</span> |
| <Link id="m-decompress" /><code>{"private static bool Decompress(string compressedFilePath, string outputFileName, string destinationPath, "}<Link to="/mod/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> | <span className="api-desc">Reads the leading byte, then unpacks every entry (folder) or the single entry (file).</span> |
| <Link id="m-decompressfile-2" /><code>{"private static bool DecompressFile(string folderPath, GZipStream compressedStream, "}<Link to="/mod/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> | <span className="api-desc">Public overload: unpacks a packed file into a folder and can delete the packed file. The private one reads one entry.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Runs zip or unzip when the matching inspector button is pressed.</span> |

</details>
