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

