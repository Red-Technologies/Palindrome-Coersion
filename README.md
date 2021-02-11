# Palindrome Coersion

Welcome to your first code challenge at Red Technologies! Your objective is to create a solution that fulfills the requirements below, which includes passing all of the unit tests that come with this repo.

## Requirements

Given a number, you must coerse it into a palindrome by repeatedly adding its inverse. Your logic should output the following object structure:

```typescript
interface IOutput {
  flips: number; // how many times the number needed to be summed with its inverse
  input: number; // the original number
  output: number; // the resulting palindrome
}
```

For example, given the following number: `1232`, if we add its inverse `1232 + 2321` we get `3553` which is a palindrome. The amount of flips required in this case is `1`.

### WARNING

Beware the [Lychrel numbers](https://en.wikipedia.org/wiki/Lychrel_number)! These are natural numbers that cannot form a palindrome through this type of inverse coersion.
