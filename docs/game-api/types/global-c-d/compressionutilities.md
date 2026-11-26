---
title: "CompressionUtilities"
description: "Editor tool plus static helpers that pack a file or folder into a gzip file with a simple custom layout, and unpack it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompressionUtilities

A **class** in `Root.Township`, no namespace.

Editor tool plus static helpers that pack a file or folder into a gzip file with a simple custom layout, and unpack it. Not a standard zip or tar.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ProgressDelegate`](/game-api/types/global-c-d/compressionutilities-progressdelegate)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CompressionUtilities()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filepath" /><code>{"private string filePath"}</code> | File or folder to zip from the inspector. |
| <Link id="m-iscompressing" /><code>{"private bool isCompressing"}</code> | Inspector button that zips `filePath`. |
| <Link id="m-isdecompressing" /><code>{"private bool isDecompressing"}</code> | Inspector button that unzips `targetToUnZip` and deletes it after. |
| <Link id="m-outputfile" /><code>{"private string outputFile"}</code> | Folder the zip is written into. |
| <Link id="m-targettounzip" /><code>{"private string targetToUnZip"}</code> | Packed file to unzip from the inspector. |
| <Link id="m-unzippingfolder" /><code>{"private string unzippingFolder"}</code> | Folder to unzip into. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compressfile" /><code>{"static string CompressFile(string fileToCompress, string destinationFolderPath)"}</code> | Public overload: packs a file or folder into `name.gz` in the destination folder and returns that path. The private ones write single entries. |
| <Link id="m-decompressfile" /><code>{"static bool DecompressFile(string fileToDecompress, string folderToCompressTo, bool isDeletingCompressedFile)"}</code> | Public overload: unpacks a packed file into a folder and can delete the packed file. The private one reads one entry. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-compressdirectory" /><code>{"private static void CompressDirectory(string directoryPath, string compressedPath, "}<Link to="/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> | Writes every file under a folder into one gzip stream, after a leading 1 byte that marks it as a folder. |
| <Link id="m-compressfile-2" /><code>{"private static void CompressFile(string filePath, string relativePath, string compressedPath)"}</code> | Public overload: packs a file or folder into `name.gz` in the destination folder and returns that path. The private ones write single entries. |
| <Link id="m-compressfile-3" /><code>{"private static void CompressFile(string filePath, string relativePath, GZipStream zipStream)"}</code> | Public overload: packs a file or folder into `name.gz` in the destination folder and returns that path. The private ones write single entries. |
| <Link id="m-decompress" /><code>{"private static bool Decompress(string compressedFilePath, string outputFileName, string destinationPath, "}<Link to="/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> | Reads the leading byte, then unpacks every entry (folder) or the single entry (file). |
| <Link id="m-decompressfile-2" /><code>{"private static bool DecompressFile(string folderPath, GZipStream compressedStream, "}<Link to="/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> | Public overload: unpacks a packed file into a folder and can delete the packed file. The private one reads one entry. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Runs zip or unzip when the matching inspector button is pressed. |

</details>
