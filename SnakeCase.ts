function toSnakeCase(input: string | number): string {
    if (typeof input === "number") {
        return input.toString();
    }

    return input
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2") // Convert aA/1A to a_A/1_A
        .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2") // Convert aAA to a_AA
        .toLowerCase();
}

console.log(toSnakeCase("TestController")); // "test_controller"
console.log(toSnakeCase("MoviesAndBooks")); // "movies_and_books"
console.log(toSnakeCase("App7Test")); // "app7_test"
console.log(toSnakeCase(1)); // "1"