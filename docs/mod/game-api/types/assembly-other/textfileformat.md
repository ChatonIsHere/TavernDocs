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
| <Link id="m-ctor" /><code>{"TextFileFormat()"}</code> | <span className="api-desc">Creates a `TextFileFormat` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-text" /><code>{"string Text { get; set; }"}</code> | <span className="api-desc">The file's text content.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns a new `TextFileFormat` with the same text.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads the whole stream into `Text`.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes `Text` to the stream. Ignores the cancellation token.</span> |
