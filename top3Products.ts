function top3Products(products: string [],  amounts: number[], prices: number[]): string{
    if (products.length !== amounts.length || products.length !== prices.length) {
return "Input lists must have the same length to continue!";
}
const revenues = products.map((product, index) => ({
    name: product,
    revenue: amounts[index] * prices[index],
    originalIndex: index
}));

revenues.sort((a,b) => {
    if (a.revenue !== b.revenue){
        return b.revenue - a.revenue;
    } else {
        return a.originalIndex - b.originalIndex;
    }
});
return revenues.slice(0,3).map(item => item.name).join(", ");
}

//Should print out Cell Phones, Vacuum Cleaner, Headphones
const products = ["Computer", "Cell Phones", "Vacuum Cleaner"];
const amounts = [3, 24, 8];
const prices = [199, 299, 399];

console.log(top3Products(products, amounts, prices));

// All products bring the same revenue
// Should print out Tablet, Monitor, Headphones
const products1 = ["Tablet", "Monitor", "Headphones", "Keyboard"];
const amounts1 =  [5, 2, 10, 8];
const prices1 =   [200, 500, 100, 125];

console.log(top3Products(products1, amounts1, prices1));

// Less than 3 products
const products2 = ["Laptop", "Smartwatch"];
const amounts2 = [5, 10];
const prices2 = [1000, 300];

console.log(top3Products(products2, amounts2, prices2));

// Error on inputs
const products3 = ["Laptop", "Phone", "Tablet", "Smartwatch"];
const amounts3 = [2, 5, 1];
const prices3 = [1000, 500, 300, 200];

console.log(top3Products(products3, amounts3, prices3));