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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Condition()"}</code> | <span className="api-desc">Creates a `Condition` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blacklist" /><code>{"List<string> Blacklist { get; set; }"}</code> | <span className="api-desc">Answers that fail the condition.</span> |
| <Link id="m-queryid" /><code>{"int QueryId { get; set; }"}</code> | <span className="api-desc">Id of the query the condition checks.</span> |
| <Link id="m-whitelist" /><code>{"List<string> Whitelist { get; set; }"}</code> | <span className="api-desc">Answers that pass the condition.</span> |

## Used in

Members of other types that take, return or hold a `Condition`:

<div className="api-used-in">

[`Transitions.Conditions`](/mod/game-api/types/assembly-api-models/transitions#m-conditions).

</div>
