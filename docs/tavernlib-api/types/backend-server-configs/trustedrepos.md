---
title: "TrustedRepos"
description: "The contents of mod_repos.json: the mod sources reconcile may pull from."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrustedRepos

A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`.

The contents of `mod_repos.json`: the mod sources reconcile may pull from. Only `modmanager addrepo` adds one.

- **Listed in** [TavernLib.Backend.Server.Configs](/tavernlib-api/types/backend-server-configs)
- **Derived types** [`TrustedReposConfig`](/tavernlib-api/types/backend-server-configs/trustedreposconfig)
- **Documented in** [TrustedRepos](/tavernlib-api/types/backend-server-configs/trustedrepos)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrustedRepos()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-repos" /><code>{"Dictionary<string, string> Repos { get; set; }"}</code> | Added sources, by shorthand (`user/repo`) to raw-content base URL. |
| <Link id="m-schema" /><code>{"int Schema { get; set; }"}</code> | The file's schema number, 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-effectiverepourls" /><code>{"List<string> EffectiveRepoUrls()"}</code> | The default TavernMods source first, then every other added source. |
