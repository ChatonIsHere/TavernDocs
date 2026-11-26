---
title: "TextFileFormat"
description: "File format that stores a file's whole content as one string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextFileFormat

A **class** in `Alta.IO`, `Alta.Utilities`.

File format that stores a file's whole content as one string.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextFileFormat()"}</code> | Creates a `TextFileFormat` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-text" /><code>{"string Text { get; set; }"}</code> | The file's text content. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Returns a new `TextFileFormat` with the same text. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Reads the whole stream into `Text`. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes `Text` to the stream. Ignores the cancellation token. |
