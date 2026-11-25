---
title: "AltaAccountRegistererAndLinker"
description: "class AltaAccountRegistererAndLinker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaAccountRegistererAndLinker

A **internal class** in `Root.Township`, `Alta.OculusLogin`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`LoginAndRegisterHelper`](/game-api/types/global-i-l/loginandregisterhelper)
- **Nested types** [`AccountRegisteringSteps`](/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps), [`LastCheckedField`](/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaAccountRegistererAndLinker()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-authenticationutility" /><code>{"private "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility"}</code> |  |
| <Link id="m-confirmpasswordinput" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" confirmPasswordInput"}</code> |  |
| <Link id="m-emailinput" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" emailInput"}</code> |  |
| <Link id="m-fieldchecks" /><code>{"private GameObject[] fieldChecks"}</code> |  |
| <Link id="m-fieldcrosses" /><code>{"private GameObject[] fieldCrosses"}</code> |  |
| <Link id="m-fielderrors" /><code>{"private GameObject[] fieldErrors"}</code> |  |
| <Link id="m-frames" /><code>{"private MeshFilter[] frames"}</code> |  |
| <Link id="m-intendedgenericerror" /><code>{"private string intendedGenericError"}</code> |  |
| <Link id="m-invalidframe" /><code>{"private Mesh invalidFrame"}</code> |  |
| <Link id="m-invalidframecolor" /><code>{"private Color invalidFrameColor"}</code> |  |
| <Link id="m-isconvertingtolinearcolor" /><code>{"private bool isConvertingToLinearColor"}</code> |  |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> |  |
| <Link id="m-lastcheckedemail" /><code>{"private "}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" lastCheckedEmail"}</code> |  |
| <Link id="m-lastcheckedusername" /><code>{"private "}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" lastCheckedUsername"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-onfailedtoregisteraccountfade" /><code>{"private "}<Link to="/game-api/types/global-a-b/animatorsetup">{"AnimatorSetup"}</Link>{" onFailedToRegisterAccountFade"}</code> |  |
| <Link id="m-onvalidconfirm" /><code>{"private UnityEvent onValidConfirm"}</code> |  |
| <Link id="m-onvalidsubmit" /><code>{"private UnityEvent onValidSubmit"}</code> |  |
| <Link id="m-originalframemesh" /><code>{"private Mesh originalFrameMesh"}</code> |  |
| <Link id="m-screenname" /><code>{"private static readonly string ScreenName"}</code> |  |
| <Link id="m-timer" /><code>{"private float timer"}</code> |  |
| <Link id="m-updatevalidationtimer" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateValidationTimer"}</code> |  |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> |  |
| <Link id="m-validframe" /><code>{"private Mesh validFrame"}</code> |  |
| <Link id="m-validframecolor" /><code>{"private Color validFrameColor"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkconfirm" /><code>{"async void CheckConfirm()"}</code> |  |
| <Link id="m-ondisable" /><code>{"override void OnDisable()"}</code> |  |
| <Link id="m-validateall" /><code>{"async void ValidateAll()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-confirmpasswordmatch" /><code>{"private bool ConfirmPasswordMatch()"}</code> |  |
| <Link id="m-disablefield" /><code>{"private void DisableField("}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" field)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility)"}</code> |  |
| <Link id="m-inject-2" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" injectedUserService)"}</code> |  |
| <Link id="m-internalemailvalidation" /><code>{"private async Task<bool> InternalEmailValidation()"}</code> |  |
| <Link id="m-internalpasswordvalidation" /><code>{"private bool InternalPasswordValidation()"}</code> |  |
| <Link id="m-internalsubmit" /><code>{"protected override async Task InternalSubmit()"}</code> |  |
| <Link id="m-internalvalidateall" /><code>{"private async Task<bool> InternalValidateAll()"}</code> |  |
| <Link id="m-isusernamevalid" /><code>{"private async Task<bool> IsUsernameValid()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-returntoaccountcreation" /><code>{"private void ReturnToAccountCreation()"}</code> |  |
| <Link id="m-seterrormessage" /><code>{"private void SetErrorMessage(string message, "}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" field)"}</code> |  |
| <Link id="m-updatefieldstatus" /><code>{"private void UpdateFieldStatus("}<Link to="/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" field, bool status)"}</code> |  |
| <Link id="m-updatetimer" /><code>{"private void UpdateTimer(string input)"}</code> |  |
| <Link id="m-updatevalidationtimer-2" /><code>{"private void UpdateValidationTimer()"}</code> |  |
| <Link id="m-validateallwithouclearinggenericerror" /><code>{"private async void ValidateAllWithouClearingGenericError()"}</code> |  |

## Used in

Members of other types that take, return or hold a `AltaAccountRegistererAndLinker`:

[`AltaAccountRegistererAndLinker.LastCheckedField.LastCheckedField`](/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield#m-ctor), [`AltaAccountRegistererAndLinker.LastCheckedField.manager`](/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield#m-manager).
