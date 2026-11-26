---
title: "Region"
description: "A server region, with the fixed list of known regions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Region

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A server region, with the fixed list of known regions. Note the constructor arguments are swapped in the presets: `FriendlyName` holds the code (`USEast1`) and `ShortName` holds the long name.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Region(string friendlyName, string shortName)"}</code> | Creates a `Region` from `friendlyName` and `shortName`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-apnortheast1" /><code>{"static readonly "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" ApNortheast1"}</code> | Asia Pacific (Tokyo). |
| <Link id="m-apsoutheast2" /><code>{"static readonly "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" ApSoutheast2"}</code> | Asia Pacific (Sydney). |
| <Link id="m-cnnorth1" /><code>{"static readonly "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" CnNorth1"}</code> | China (Beijing). |
| <Link id="m-eucentral1" /><code>{"static readonly "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" EuCentral1"}</code> | EU Central (Frankfurt). |
| <Link id="m-useast1" /><code>{"static readonly "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" UsEast1"}</code> | US East (Virginia). |
| <Link id="m-useast2" /><code>{"static readonly "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" UsEast2"}</code> | US East (Ohio). |
| <Link id="m-uswest1" /><code>{"static readonly "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" UsWest1"}</code> | US West (N. California). |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allregions" /><code>{"private static HashSet<"}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{"> allRegions"}</code> | Backing set for `AllRegions`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allregions-2" /><code>{"static IEnumerable<"}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{"> AllRegions { get; }"}</code> | All seven preset regions, built on first use. |
| <Link id="m-friendlyname" /><code>{"string FriendlyName { get; }"}</code> | For the presets this holds the code, such as `USEast1`, because the constructor arguments are swapped. |
| <Link id="m-shortname" /><code>{"string ShortName { get; }"}</code> | For the presets this holds the long name, such as `US East (Virginia)`. This is what goes into JSON. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-parse" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" Parse(string name)"}</code> | Finds the preset whose `ShortName` matches, which for the presets is the long name like `US East (Virginia)`. Returns null if none. |
