---
title: "SectorNames"
description: "XML-serializable list of SectorName entries."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SectorNames

A **class** in `Root.Township`, the global namespace.

XML-serializable list of `SectorName` entries.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Attributes** `XmlRoot`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SectorNames()"}</code> | Creates a `SectorNames` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-names" /><code>{"List<"}<Link to="/mod/game-api/types/global-s/sectorname">{"SectorName"}</Link>{"> names"}</code> | The sector names. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"static "}<Link to="/mod/game-api/types/global-s/sectornames">{"SectorNames"}</Link>{" Load(string path)"}</code> | Reads a `SectorNames` list from an XML file. The decompiled body is incomplete. |
| <Link id="m-save" /><code>{"void Save(string path)"}</code> | Writes the list to an XML file. The decompiled body is incomplete. |
