---
title: "ModWithdrawal"
description: "One entry of a mod source's withdrawn list: a mod version nothing should install."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModWithdrawal

A **class** in `TavernLib`, `TavernLib.Backend.Mods`.

One entry of a mod source's `withdrawn` list: a mod version nothing should install. A server pinned to it gets that major's latest version instead, with a warning.

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModWithdrawal(string modId, string version, string reason, string sourceRepo)"}</code> | <span className="api-desc">Created by `ModRepoClient.WithdrawalsFrom` from one index entry.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modid" /><code>{"string ModId { get; }"}</code> | <span className="api-desc">The withdrawn mod's id.</span> |
| <Link id="m-reason" /><code>{"string Reason { get; }"}</code> | <span className="api-desc">The source's reason, shown in the reconcile warning.</span> |
| <Link id="m-sourcerepo" /><code>{"string SourceRepo { get; }"}</code> | <span className="api-desc">Base URL of the source that withdrew it.</span> |
| <Link id="m-version" /><code>{"string Version { get; }"}</code> | <span className="api-desc">The exact version that was withdrawn.</span> |

## Used in

Members of other types that take, return or hold a `ModWithdrawal`:

<div className="api-used-in">

[`ModIndex.ModIndex`](/mod/tavernlib-api/types/backend-mods/modindex#m-ctor-2), [`ModIndex.WithdrawalOf`](/mod/tavernlib-api/types/backend-mods/modindex#m-withdrawalof), [`ModIndex.Withdrawn`](/mod/tavernlib-api/types/backend-mods/modindex#m-withdrawn), [`ModRepoClient.FetchRepoIndex`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-fetchrepoindex), [`ModRepoClient.WithdrawalsFrom`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-withdrawalsfrom).

</div>
