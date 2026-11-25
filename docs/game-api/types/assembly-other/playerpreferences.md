---
title: "PlayerPreferences"
description: "The game's replacement for Unity's PlayerPrefs: a dictionary saved to player.prefs in StorageFolder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPreferences

A **static class** in `Alta.IO`, no namespace.

The game's replacement for Unity's `PlayerPrefs`: a dictionary saved to `player.prefs` in `StorageFolder`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested types** [`PrefType`](/game-api/types/assembly-other/playerpreferences-preftype)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#playerpreferences)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private const string FileName"}</code> |  |
| <Link id="m-ischangedflag" /><code>{"private static bool isChangedFlag"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-values" /><code>{"private static Dictionary<string, object> values"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-savepath" /><code>{"private static string SavePath { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deleteall" /><code>{"static void DeleteAll()"}</code> |  |
| <Link id="m-getbool" /><code>{"static bool GetBool(string identifier, bool defaultValue = false)"}</code> |  |
| <Link id="m-getfloat" /><code>{"static float GetFloat(string identifier, float defaultValue = 0)"}</code> |  |
| <Link id="m-getint" /><code>{"static int GetInt(string identifier, int defaultValue = 0)"}</code> |  |
| <Link id="m-getstring" /><code>{"static string GetString(string identifier, string defaultValue = \"\")"}</code> |  |
| <Link id="m-haskey" /><code>{"static bool HasKey(string keyName)"}</code> |  |
| <Link id="m-removekey" /><code>{"static void RemoveKey(string keyName)"}</code> |  |
| <Link id="m-savetodisk" /><code>{"static void SaveToDisk()"}</code> |  |
| <Link id="m-setbool" /><code>{"static void SetBool(string identifier, bool value)"}</code> |  |
| <Link id="m-setfloat" /><code>{"static void SetFloat(string identifier, float value)"}</code> |  |
| <Link id="m-setint" /><code>{"static void SetInt(string identifier, int value)"}</code> |  |
| <Link id="m-setstring" /><code>{"static void SetString(string identifier, string value)"}</code> |  |
| <Link id="m-decrypt" /><code>{"private static byte[] Decrypt(byte[] input)"}</code> |  |
| <Link id="m-encrypt" /><code>{"private static byte[] Encrypt(byte[] input)"}</code> |  |
| <Link id="m-ensuremap" /><code>{"private static void EnsureMap()"}</code> |  |
| <Link id="m-getvalue" /><code>{"private static T GetValue<T>(string identifier, T defaultValue)"}</code> |  |
| <Link id="m-loadfromdisk" /><code>{"private static void LoadFromDisk()"}</code> |  |
