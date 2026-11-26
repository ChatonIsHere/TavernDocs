---
title: "DeviceStatRecord"
description: "Obsolete analytics record of the player's hardware, filled from Unity's SystemInfo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceStatRecord

A **class** in `Root.Township`, `Alta.Analytics`.

Obsolete analytics record of the player's hardware, filled from Unity's `SystemInfo`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `AnalyticsRecordForAll`, `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeviceStatRecord()"}</code> | <span className="api-desc">Creates a `DeviceStatRecord` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-devicemodel" /><code>{"string DeviceModel { get; set; }"}</code> | <span className="api-desc">The device model.</span> |
| <Link id="m-devicename" /><code>{"string DeviceName { get; set; }"}</code> | <span className="api-desc">The device's user-set name.</span> |
| <Link id="m-devicetype" /><code>{"string DeviceType { get; set; }"}</code> | <span className="api-desc">Desktop, handheld, console and so on, as text.</span> |
| <Link id="m-deviceuniqueidentifier" /><code>{"string DeviceUniqueIdentifier { get; set; }"}</code> | <span className="api-desc">Unity's unique ID for the device.</span> |
| <Link id="m-graphicsdeviceid" /><code>{"int GraphicsDeviceID { get; set; }"}</code> | <span className="api-desc">The GPU's device ID.</span> |
| <Link id="m-graphicsdevicename" /><code>{"string GraphicsDeviceName { get; set; }"}</code> | <span className="api-desc">The GPU name.</span> |
| <Link id="m-graphicsdevicetype" /><code>{"string GraphicsDeviceType { get; set; }"}</code> | <span className="api-desc">The graphics API in use, as text.</span> |
| <Link id="m-graphicsdevicevendor" /><code>{"string GraphicsDeviceVendor { get; set; }"}</code> | <span className="api-desc">The GPU vendor name.</span> |
| <Link id="m-graphicsdevicevendorid" /><code>{"int GraphicsDeviceVendorID { get; set; }"}</code> | <span className="api-desc">The GPU vendor ID.</span> |
| <Link id="m-graphicsdeviceversion" /><code>{"string GraphicsDeviceVersion { get; set; }"}</code> | <span className="api-desc">The graphics API version string.</span> |
| <Link id="m-graphicsmemorysize" /><code>{"int GraphicsMemorySize { get; set; }"}</code> | <span className="api-desc">GPU memory in megabytes.</span> |
| <Link id="m-operatingsystem" /><code>{"string OperatingSystem { get; set; }"}</code> | <span className="api-desc">The operating system name and version.</span> |
| <Link id="m-operatingsystemfamily" /><code>{"string OperatingSystemFamily { get; set; }"}</code> | <span className="api-desc">Windows, Linux, Mac and so on, as text.</span> |
| <Link id="m-processorcount" /><code>{"int ProcessorCount { get; set; }"}</code> | <span className="api-desc">Number of logical processors.</span> |
| <Link id="m-processorfrequency" /><code>{"int ProcessorFrequency { get; set; }"}</code> | <span className="api-desc">Processor frequency in MHz.</span> |
| <Link id="m-processortype" /><code>{"string ProcessorType { get; set; }"}</code> | <span className="api-desc">The processor name.</span> |
| <Link id="m-systemmemorysize" /><code>{"int SystemMemorySize { get; set; }"}</code> | <span className="api-desc">System memory in megabytes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromsysteminfo" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/devicestatrecord">{"DeviceStatRecord"}</Link>{" FromSystemInfo()"}</code> | <span className="api-desc">Makes a record from the current machine's `SystemInfo`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Lists every field on its own line.</span> |
