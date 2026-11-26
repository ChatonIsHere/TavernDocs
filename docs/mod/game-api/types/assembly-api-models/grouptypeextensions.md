---
title: "GroupTypeExtensions"
description: "Maps a group's type to how players join its servers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupTypeExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Maps a group's type to how players join its servers.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-converttoserverjointype" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/serverjointype">{"ServerJoinType"}</Link>{" ConvertToServerJoinType("}<Link to="/mod/game-api/types/assembly-api-models/grouptype">{"GroupType"}</Link>{" groupType)"}</code> | Open groups give `OpenGroup`, public groups `PublicGroup`, and anything else `GroupMember`. |
