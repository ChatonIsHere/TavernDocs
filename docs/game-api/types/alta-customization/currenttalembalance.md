---
title: "CurrentTalemBalance"
description: "Static cache of the logged-in player's Talem (shop currency) balance, fetched from the Alta shop API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurrentTalemBalance

A **static class** in `Root.Township`, `Alta.Customization`.

Static cache of the logged-in player's Talem (shop currency) balance, fetched from the Alta shop API.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentbalance" /><code>{"static int CurrentBalance { get; private set; }"}</code> | Last fetched balance. 0 until `RequestUpdate` succeeds. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onbalancechanged" /><code>{"static event Action<int> OnBalanceChanged"}</code> | Raised with the new balance when `RequestUpdate` finds it changed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-requestupdate" /><code>{"static async Task<int> RequestUpdate()"}</code> | Fetches the shop account info from the API, stores the shard balance and returns it. |
