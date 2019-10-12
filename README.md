# AngularProtectedMemberCompilationIssue

[![Greenkeeper badge](https://badges.greenkeeper.io/ibenjelloun/angular-protected-member-compilation-issue.svg)](https://greenkeeper.io/)

This repository is for an angular compilation issue reproduction :

`SucceedingChildComponent` and `FailingChildComponent` are using the `variable` private member in their template, `SucceedingChildComponent` compilation succeeds and `FailingChildComponent` compilation fails.


## Reproduction steps

`ng build --prod`
