---
title: "InstallationEventInfo"
description: "A stored install or update event as the API returns it; the read side of InstallationEventRequest."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstallationEventInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses.DTOs.Responses`.

A stored install or update event as the API returns it; the read side of `InstallationEventRequest`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstallationEventInfo()"}</code> | Creates an `InstallationEventInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; set; }"}</code> | Error text, if the step failed. |
| <Link id="m-eventtype" /><code>{"string EventType { get; set; }"}</code> | What happened, as a string. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The event's id. |
| <Link id="m-startidentifier" /><code>{"int StartIdentifier { get; set; }"}</code> | Id of the start event this one belongs to. |
| <Link id="m-time" /><code>{"DateTime Time { get; set; }"}</code> | When the event was recorded. |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> | Id of the user who reported it. |
| <Link id="m-versionfrom" /><code>{"string VersionFrom { get; set; }"}</code> | Version updated from. |
| <Link id="m-versionto" /><code>{"string VersionTo { get; set; }"}</code> | Version installed or updated to. |
