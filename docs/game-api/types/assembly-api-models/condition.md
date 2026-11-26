---
title: "Condition"
description: "A condition from the Alta web API on a query (probably a form question), with allowed and blocked answers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Condition

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A condition from the Alta web API on a query (probably a form question), with allowed and blocked answers.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Condition()"}</code> | Creates a `Condition` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blacklist" /><code>{"List<string> Blacklist { get; set; }"}</code> | Answers that fail the condition. |
| <Link id="m-queryid" /><code>{"int QueryId { get; set; }"}</code> | Id of the query the condition checks. |
| <Link id="m-whitelist" /><code>{"List<string> Whitelist { get; set; }"}</code> | Answers that pass the condition. |

## Used in

Members of other types that take, return or hold a `Condition`:

[`Transitions.Conditions`](/game-api/types/assembly-api-models/transitions#m-conditions).
