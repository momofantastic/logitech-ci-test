console.log("Running tests...");

// Simple tests that pass
function testAddition() {
    const result = 2 + 2;
    if (result !== 4) {
        throw new Error("Addition test failed!");
    }
    console.log("✓ Addition test passed");
}

function testString() {
    const str = "Hello";
    if (str.length !== 5) {
        throw new Error("String test failed!");
    }
    console.log("✓ String test passed");
}

testAddition();
testString();

console.log("\nAll tests passed!");
process.exit(0);
```

Create `.github/workflows/test.yml`:
```yaml
name: Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Run tests
      run: npm test
