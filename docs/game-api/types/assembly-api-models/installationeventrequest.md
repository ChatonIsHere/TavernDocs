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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InstallationEventRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; set; }"}</code> | Error text if the step failed. |
| <Link id="m-eventtype" /><code>{"string EventType { get; set; }"}</code> | What happened, as a string. Sent as `type`. |
| <Link id="m-startidentifier" /><code>{"int? StartIdentifier { get; set; }"}</code> | Id of the earlier start event this one belongs to, if any. |
| <Link id="m-versionfrom" /><code>{"string VersionFrom { get; set; }"}</code> | Version being updated from. |
| <Link id="m-versionto" /><code>{"string VersionTo { get; set; }"}</code> | Version being installed or updated to. |
