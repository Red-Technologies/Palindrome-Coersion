# Palindrome Coersion

Welcome to your first code challenge at Red Technologies! Your objective is to create a solution that fulfills the requirements below, which includes passing all of the unit tests that come with this repo.

### Requirements

Given a number, you must coerse it into a palindrome by repeatedly adding its inverse. Your logic should output the following object structure:

```typescript
interface IOutput {
  flips: number; // how many times the number needed to be summed with its inverse
  input: number; // the original number
  output: number; // the resulting palindrome
}
```

For example, given the following number: `1232`, if we add its inverse `1232 + 2321` we get `3553` which is a palindrome. The amount of flips required in this case is `1`. Make sure your output is returned in the existing function here: `src/codeChallenge/palindromeCoersion.tsx` as the unit tests are importing this, expecting a result.

### WARNING

Beware the [Lychrel numbers](https://en.wikipedia.org/wiki/Lychrel_number)! These are natural numbers that cannot form a palindrome through this type of inverse coersion.

### How to start

Fork the repo and in the project directory run:

```
yarn install
yarn start
```

This project doesn't require a frontend, but feel free to use one and the console if you prefer. Just know that the unit tests don't check for this. When you're ready to test, run:

```
yarn test
```

And feel free to take a look at the tests in `palindromeCoersion.test.tsx` to improve them if you like.
