---
title: "CompressionUtilities"
description: "class CompressionUtilities in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CompressionUtilities

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ProgressDelegate`](/game-api/types/global-c-d/compressionutilities-progressdelegate)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CompressionUtilities()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filepath" /><code>{"private string filePath"}</code> |  |
| <Link id="m-iscompressing" /><code>{"private bool isCompressing"}</code> |  |
| <Link id="m-isdecompressing" /><code>{"private bool isDecompressing"}</code> |  |
| <Link id="m-outputfile" /><code>{"private string outputFile"}</code> |  |
| <Link id="m-targettounzip" /><code>{"private string targetToUnZip"}</code> |  |
| <Link id="m-unzippingfolder" /><code>{"private string unzippingFolder"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compressfile" /><code>{"static string CompressFile(string fileToCompress, string destinationFolderPath)"}</code> |  |
| <Link id="m-decompressfile" /><code>{"static bool DecompressFile(string fileToDecompress, string folderToCompressTo, bool isDeletingCompressedFile)"}</code> |  |
| <Link id="m-compressdirectory" /><code>{"private static void CompressDirectory(string directoryPath, string compressedPath, "}<Link to="/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> |  |
| <Link id="m-compressfile-2" /><code>{"private static void CompressFile(string filePath, string relativePath, string compressedPath)"}</code> |  |
| <Link id="m-compressfile-3" /><code>{"private static void CompressFile(string filePath, string relativePath, GZipStream zipStream)"}</code> |  |
| <Link id="m-decompress" /><code>{"private static bool Decompress(string compressedFilePath, string outputFileName, string destinationPath, "}<Link to="/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> |  |
| <Link id="m-decompressfile-2" /><code>{"private static bool DecompressFile(string folderPath, GZipStream compressedStream, "}<Link to="/game-api/types/global-c-d/compressionutilities-progressdelegate">{"CompressionUtilities.ProgressDelegate"}</Link>{" progress = null)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
