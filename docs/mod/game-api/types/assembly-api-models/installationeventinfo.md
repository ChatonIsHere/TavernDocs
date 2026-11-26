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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstallationEventInfo()"}</code> | <span className="api-desc">Creates an `InstallationEventInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"string Error { get; set; }"}</code> | <span className="api-desc">Error text, if the step failed.</span> |
| <Link id="m-eventtype" /><code>{"string EventType { get; set; }"}</code> | <span className="api-desc">What happened, as a string.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The event's id.</span> |
| <Link id="m-startidentifier" /><code>{"int StartIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the start event this one belongs to.</span> |
| <Link id="m-time" /><code>{"DateTime Time { get; set; }"}</code> | <span className="api-desc">When the event was recorded.</span> |
| <Link id="m-useridentifier" /><code>{"int UserIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the user who reported it.</span> |
| <Link id="m-versionfrom" /><code>{"string VersionFrom { get; set; }"}</code> | <span className="api-desc">Version updated from.</span> |
| <Link id="m-versionto" /><code>{"string VersionTo { get; set; }"}</code> | <span className="api-desc">Version installed or updated to.</span> |
