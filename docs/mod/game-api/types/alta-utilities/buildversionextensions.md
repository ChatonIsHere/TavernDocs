---
title: "BuildVersionExtensions"
description: "Extension helpers for BuildVersion."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildVersionExtensions

A **static class** in `Root.Township`, `Alta.Utilities`.

Extension helpers for `BuildVersion`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgui" /><code>{"static BuildVersion DrawGui(BuildVersion version)"}</code> | Editor GUI hook. Returns the version unchanged in this build. |
| <Link id="m-getbuildversionforbuild" /><code>{"static BuildVersion GetBuildVersionForBuild(BuildVersion version, int changeSet)"}</code> | Returns a copy of the version with the given changeset number, keeping stream, season, major and minor. |
