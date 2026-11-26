---
title: "DiscordSupporterRoleVerificationResults"
description: "Result of checking supporters against the Discord supporter role: who gained it and who lost it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiscordSupporterRoleVerificationResults

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Result of checking supporters against the Discord supporter role: who gained it and who lost it.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DiscordSupporterRoleVerificationResults()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-gainedsupporters" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> GainedSupporters { get; }"}</code> | Users who became supporters in this check. |
| <Link id="m-removedsupporters" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RemovedSupporters { get; }"}</code> | Users who stopped being supporters in this check. |
