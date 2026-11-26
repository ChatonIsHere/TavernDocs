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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Region(string friendlyName, string shortName)"}</code> | <span className="api-desc">Creates a `Region` from `friendlyName` and `shortName`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-apnortheast1" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" ApNortheast1"}</code> | <span className="api-desc">Asia Pacific (Tokyo).</span> |
| <Link id="m-apsoutheast2" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" ApSoutheast2"}</code> | <span className="api-desc">Asia Pacific (Sydney).</span> |
| <Link id="m-cnnorth1" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" CnNorth1"}</code> | <span className="api-desc">China (Beijing).</span> |
| <Link id="m-eucentral1" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" EuCentral1"}</code> | <span className="api-desc">EU Central (Frankfurt).</span> |
| <Link id="m-useast1" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" UsEast1"}</code> | <span className="api-desc">US East (Virginia).</span> |
| <Link id="m-useast2" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" UsEast2"}</code> | <span className="api-desc">US East (Ohio).</span> |
| <Link id="m-uswest1" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" UsWest1"}</code> | <span className="api-desc">US West (N. California).</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allregions" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{"> allRegions"}</code> | <span className="api-desc">Backing set for `AllRegions`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allregions-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{"> AllRegions { get; }"}</code> | <span className="api-desc">All seven preset regions, built on first use.</span> |
| <Link id="m-friendlyname" /><code>{"string FriendlyName { get; }"}</code> | <span className="api-desc">For the presets this holds the code, such as `USEast1`, because the constructor arguments are swapped.</span> |
| <Link id="m-shortname" /><code>{"string ShortName { get; }"}</code> | <span className="api-desc">For the presets this holds the long name, such as `US East (Virginia)`. This is what goes into JSON.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-parse" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared">{"Region"}</Link>{" Parse(string name)"}</code> | <span className="api-desc">Finds the preset whose `ShortName` matches, which for the presets is the long name like `US East (Virginia)`. Returns null if none.</span> |
