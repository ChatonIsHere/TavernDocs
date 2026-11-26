---
title: "StaticPageProvider"
description: "Page provider (identifier 1) for hand-made Page assets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticPageProvider

A **class** in `Root.Township`, no namespace.

Page provider (identifier 1) for hand-made `Page` assets. Get it through `Instance`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PageProvider`](/game-api/types/global-p/pageprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticPageProvider()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-page" /><code>{"private "}<Link to="/game-api/types/alta-items/page">{"Page"}</Link>{" page"}</code> | Page shown by `Test`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"override int Identifier { get; }"}</code> | Always 1. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-s/staticpageprovider">{"StaticPageProvider"}</Link>{" Instance { get; }"}</code> | The registered provider with identifier 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" GetRandom()"}</code> | Picks a random `Page` (the simple list on a simple server) and returns its data, or null if the player already has that page. |
| <Link id="m-load" /><code>{"override "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" Load("}<Link to="/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData)"}</code> | Looks the page up by the hash in the save data. |
| <Link id="m-save" /><code>{"override void Save("}<Link to="/game-api/types/alta-items/pageinstancesavedata">{"PageInstanceSaveData"}</Link>{" saveData, "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Writes this provider's identifier and the page's hash into the save data. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Sends the page as a hashed `Page` reference. |
| <Link id="m-test" /><code>{"protected override void Test()"}</code> | Editor test: shows `page` on the test renderer. |
