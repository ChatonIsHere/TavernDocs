---
title: "NativeHttp"
description: "A blocking HTTP GET client on Windows' WinHTTP, for mod downloads during reconcile, before Unity's TLS is up."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NativeHttp

A **class** in `TavernLib`, `TavernLib.Backend`.

A blocking HTTP GET client on Windows' WinHTTP, for mod downloads during reconcile, before Unity's TLS is up. One instance is one session; don't use it on the main thread.

- **Listed in** [TavernLib.Backend](/mod/tavernlib-api/types/backend)
- **Inherits or implements** `IDisposable`
- **Documented in** [Internals](/mod/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NativeHttp()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-session" /><code>{"private IntPtr _session"}</code> | <span className="api-desc">The WinHTTP session handle, opened on first use and closed by `Dispose`.</span> |
| <Link id="m-useragent" /><code>{"private const string UserAgent"}</code> | <span className="api-desc">The user agent sent, "TavernLib".</span> |
| <Link id="m-winhttpaccesstypeautomaticproxy" /><code>{"private const uint WinHttpAccessTypeAutomaticProxy"}</code> | <span className="api-desc">WinHTTP access type 4, the automatic system proxy.</span> |
| <Link id="m-winhttpaccesstypedefaultproxy" /><code>{"private const uint WinHttpAccessTypeDefaultProxy"}</code> | <span className="api-desc">WinHTTP access type 0, the WinHTTP-configured proxy.</span> |
| <Link id="m-winhttpflagsecure" /><code>{"private const uint WinHttpFlagSecure"}</code> | <span className="api-desc">WinHTTP flag that makes a request use HTTPS.</span> |
| <Link id="m-winhttpquerycontentlength" /><code>{"private const uint WinHttpQueryContentLength"}</code> | <span className="api-desc">WinHTTP header query for the content length.</span> |
| <Link id="m-winhttpqueryflagnumber" /><code>{"private const uint WinHttpQueryFlagNumber"}</code> | <span className="api-desc">WinHTTP flag that returns a header as a number.</span> |
| <Link id="m-winhttpquerystatuscode" /><code>{"private const uint WinHttpQueryStatusCode"}</code> | <span className="api-desc">WinHTTP header query for the status code.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Closes the WinHTTP session.</span> |
| <Link id="m-download" /><code>{"void Download(string url, Stream destination, DateTime deadlineUtc, TimeSpan stallTimeout, long maxBytes)"}</code> | <span className="api-desc">Writes a URL's body into a stream. Throws on a non-2xx status, a body over `maxBytes`, a stalled step or the deadline passing.</span> |
| <Link id="m-getstring" /><code>{"string GetString(string url, TimeSpan timeout, long maxBytes)"}</code> | <span className="api-desc">Downloads a URL and returns its body as UTF-8 text, within the timeout and size limit.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private static void Check(bool ok, string call)"}</code> | <span className="api-desc">Throws an `IOException` naming the WinHTTP call if it failed.</span> |
| <Link id="m-describe" /><code>{"private static string Describe(int code)"}</code> | <span className="api-desc">Turns a WinHTTP error code into readable text.</span> |
| <Link id="m-remainingms" /><code>{"private static int RemainingMs(DateTime deadlineUtc, string url)"}</code> | <span className="api-desc">Milliseconds left until the deadline; throws a `TimeoutException` once it has passed.</span> |
| <Link id="m-session-2" /><code>{"private IntPtr Session()"}</code> | <span className="api-desc">Returns the WinHTTP session, opening it with the automatic proxy first and the default proxy as a fallback.</span> |
| <Link id="m-toolarge" /><code>{"private static IOException TooLarge(Uri uri, long maxBytes)"}</code> | <span className="api-desc">Builds the error for a response over the size limit.</span> |
| <Link id="m-winhttpclosehandle" /><code>{"private static bool WinHttpCloseHandle(IntPtr handle)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that closes a handle.</span> |
| <Link id="m-winhttpconnect" /><code>{"private static IntPtr WinHttpConnect(IntPtr session, string server, ushort port, uint reserved)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that connects to a server and port.</span> |
| <Link id="m-winhttpopen" /><code>{"private static IntPtr WinHttpOpen(string agent, uint accessType, string proxyName, string proxyBypass, uint flags)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that opens a session.</span> |
| <Link id="m-winhttpopenrequest" /><code>{"private static IntPtr WinHttpOpenRequest(IntPtr connection, string verb, string objectName, string version, string referrer, IntPtr acceptTypes, uint flags)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that opens a request.</span> |
| <Link id="m-winhttpqueryheaders" /><code>{"private static bool WinHttpQueryHeaders(IntPtr request, uint infoLevel, IntPtr name, ref uint buffer, ref uint bufferLength, IntPtr index)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that reads a response header.</span> |
| <Link id="m-winhttpreaddata" /><code>{"private static bool WinHttpReadData(IntPtr request, byte[] buffer, uint bytesToRead, out uint bytesRead)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that reads response body bytes.</span> |
| <Link id="m-winhttpreceiveresponse" /><code>{"private static bool WinHttpReceiveResponse(IntPtr request, IntPtr reserved)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that waits for the response.</span> |
| <Link id="m-winhttpsendrequest" /><code>{"private static bool WinHttpSendRequest(IntPtr request, IntPtr headers, uint headersLength, IntPtr optional, uint optionalLength, uint totalLength, IntPtr context)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that sends a request.</span> |
| <Link id="m-winhttpsettimeouts" /><code>{"private static bool WinHttpSetTimeouts(IntPtr handle, int resolveMs, int connectMs, int sendMs, int receiveMs)"}</code> | <span className="api-desc">P/Invoke into `winhttp.dll` that sets the resolve, connect, send and receive timeouts.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NativeHttp`:

<div className="api-used-in">

[`ModInstaller.DownloadVerifyMove`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-downloadverifymove), [`ModInstaller.InstallLibraryDependency`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-installlibrarydependency), [`ModInstaller.InstallMod`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-installmod), [`ModInstaller.VerifiedDownload`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-verifieddownload), [`ModReconciler.Pass.Pass`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-ctor), [`ModRepoClient.ModRepoClient`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-ctor).

</div>
