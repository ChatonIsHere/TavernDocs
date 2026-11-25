---
title: "CosmeticPackScheduler"
description: "class CosmeticPackScheduler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPackScheduler

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticPackScheduler()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cancelcurrent" /><code>{"private CancellationTokenSource cancelCurrent"}</code> |
| <Link id="m-current" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" current"}</code> |
| <Link id="m-inqueue" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{"> inQueue"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-packsession" /><code>{"private "}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" packSession"}</code> |
| <Link id="m-platformdevice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> |
| <Link id="m-queue" /><code>{"private Queue<"}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{"> queue"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-customization/cosmeticpackscheduler">{"CosmeticPackScheduler"}</Link>{" Instance { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-cancel" /><code>{"void Cancel("}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" packer)"}</code> |
| <Link id="m-enqueue" /><code>{"void Enqueue("}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" packer)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-startprocessing" /><code>{"private async void StartProcessing()"}</code> |

</details>
