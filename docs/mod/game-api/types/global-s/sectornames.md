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
| <Link id="m-ctor" /><code>{"SectorNames()"}</code> | <span className="api-desc">Creates a `SectorNames` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-names" /><code>{"List<"}<Link to="/mod/game-api/types/global-s/sectorname">{"SectorName"}</Link>{"> names"}</code> | <span className="api-desc">The sector names.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"static "}<Link to="/mod/game-api/types/global-s/sectornames">{"SectorNames"}</Link>{" Load(string path)"}</code> | <span className="api-desc">Reads a `SectorNames` list from an XML file. The decompiled body is incomplete.</span> |
| <Link id="m-save" /><code>{"void Save(string path)"}</code> | <span className="api-desc">Writes the list to an XML file. The decompiled body is incomplete.</span> |
