---
title: "InstallationEventRequest"
description: "Request body reporting an install or update event to the API, probably from the launcher."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstallationEventRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body reporting an install or update event to the API, probably from the launcher.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstallationEventRequest()"}</code> | <span className="api-desc">Creates an `InstallationEventRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; set; }"}</code> | <span className="api-desc">Error text if the step failed.</span> |
| <Link id="m-eventtype" /><code>{"string EventType { get; set; }"}</code> | <span className="api-desc">What happened, as a string. Sent as `type`.</span> |
| <Link id="m-startidentifier" /><code>{"int? StartIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the earlier start event this one belongs to, if any.</span> |
| <Link id="m-versionfrom" /><code>{"string VersionFrom { get; set; }"}</code> | <span className="api-desc">Version being updated from.</span> |
| <Link id="m-versionto" /><code>{"string VersionTo { get; set; }"}</code> | <span className="api-desc">Version being installed or updated to.</span> |
