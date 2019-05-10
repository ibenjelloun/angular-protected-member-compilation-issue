# AngularProtectedMemberCompilationIssue

This repository is for an angular compilation issue reproduction :

`SucceedingChildComponent` and `FailingChildComponent` are using the `variable` private member in their template, `SucceedingChildComponent` compilation succeeds and `FailingChildComponent` compilation fails.


## Reproduction steps

`ng build --prod`
