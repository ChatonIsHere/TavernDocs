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

- **Listed in** [TavernLib.Backend.Server.Configs](/mod/tavernlib-api/types/backend-server-configs)
- **Derived types** [`TrustedReposConfig`](/mod/tavernlib-api/types/backend-server-configs/trustedreposconfig)
- **Documented in** [TrustedRepos](/mod/tavernlib-api/types/backend-server-configs/trustedrepos)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrustedRepos()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-repos" /><code>{"Dictionary<string, string> Repos { get; set; }"}</code> | <span className="api-desc">Added sources, by shorthand (`user/repo`) to raw-content base URL.</span> |
| <Link id="m-schema" /><code>{"int Schema { get; set; }"}</code> | <span className="api-desc">The file's schema number, 1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-effectiverepourls" /><code>{"List<string> EffectiveRepoUrls()"}</code> | <span className="api-desc">The default TavernMods source first, then every other added source.</span> |
