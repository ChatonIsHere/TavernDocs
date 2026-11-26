---
title: "PlayerPreferences"
description: "The game's replacement for Unity's PlayerPrefs: a typed key/value store kept in player.prefs in the storage folder, AES-encrypted with a key from the device id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPreferences

A **static class** in `Alta.IO`, the global namespace.

The game's replacement for Unity's PlayerPrefs: a typed key/value store kept in player.prefs in the storage folder, AES-encrypted with a key from the device id. Loaded on first use; changes stay in memory until `SaveToDisk`, which runs on quit.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested types** [`PrefType`](/mod/game-api/types/assembly-other/playerpreferences-preftype)
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#playerpreferences)

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filename" /><code>{"private const string FileName"}</code> | <span className="api-desc">Name of the prefs file, player.prefs.</span> |
| <Link id="m-ischangedflag" /><code>{"private static bool isChangedFlag"}</code> | <span className="api-desc">True when values changed since the last save.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-values" /><code>{"private static Dictionary<string, object> values"}</code> | <span className="api-desc">The loaded values by key. Null until first use.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savepath" /><code>{"private static string SavePath { get; set; }"}</code> | <span className="api-desc">Full path of player.prefs in `AltaIO.StorageFolder`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deleteall" /><code>{"static void DeleteAll()"}</code> | <span className="api-desc">Clears all values and deletes the file. Doesn't load first, so it throws if nothing has read the prefs yet.</span> |
| <Link id="m-getbool" /><code>{"static bool GetBool(string identifier, bool defaultValue = false)"}</code> | <span className="api-desc">Reads a bool, or the default if the key isn't set.</span> |
| <Link id="m-getfloat" /><code>{"static float GetFloat(string identifier, float defaultValue = 0)"}</code> | <span className="api-desc">Reads a float, or the default if the key isn't set.</span> |
| <Link id="m-getint" /><code>{"static int GetInt(string identifier, int defaultValue = 0)"}</code> | <span className="api-desc">Reads an int, or the default if the key isn't set.</span> |
| <Link id="m-getstring" /><code>{"static string GetString(string identifier, string defaultValue = \"\")"}</code> | <span className="api-desc">Reads a string, or the default (empty) if the key isn't set.</span> |
| <Link id="m-haskey" /><code>{"static bool HasKey(string keyName)"}</code> | <span className="api-desc">True if the key is set.</span> |
| <Link id="m-removekey" /><code>{"static void RemoveKey(string keyName)"}</code> | <span className="api-desc">Removes a key if it's set.</span> |
| <Link id="m-savetodisk" /><code>{"static void SaveToDisk()"}</code> | <span className="api-desc">Writes all values to the file, encrypted, if anything changed since the last save.</span> |
| <Link id="m-setbool" /><code>{"static void SetBool(string identifier, bool value)"}</code> | <span className="api-desc">Sets a bool value in memory.</span> |
| <Link id="m-setfloat" /><code>{"static void SetFloat(string identifier, float value)"}</code> | <span className="api-desc">Sets a float value in memory.</span> |
| <Link id="m-setint" /><code>{"static void SetInt(string identifier, int value)"}</code> | <span className="api-desc">Sets an int value in memory.</span> |
| <Link id="m-setstring" /><code>{"static void SetString(string identifier, string value)"}</code> | <span className="api-desc">Sets a string value in memory.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decrypt" /><code>{"private static byte[] Decrypt(byte[] input)"}</code> | <span className="api-desc">Decrypts the prefs file with AES using a key derived from the device's unique id, so the file can't be read on another machine.</span> |
| <Link id="m-encrypt" /><code>{"private static byte[] Encrypt(byte[] input)"}</code> | <span className="api-desc">Encrypts the prefs data with AES using a key derived from the device's unique id.</span> |
| <Link id="m-ensuremap" /><code>{"private static void EnsureMap()"}</code> | <span className="api-desc">Loads the file the first time any value is read or written.</span> |
| <Link id="m-getvalue" /><code>{"private static T GetValue<T>(string identifier, T defaultValue)"}</code> | <span className="api-desc">Reads a value cast to the asked type. Throws if the key holds a different type.</span> |
| <Link id="m-loadfromdisk" /><code>{"private static void LoadFromDisk()"}</code> | <span className="api-desc">Reads and decrypts the file into memory. Starts empty if the file is missing or can't be decrypted.</span> |

</details>
