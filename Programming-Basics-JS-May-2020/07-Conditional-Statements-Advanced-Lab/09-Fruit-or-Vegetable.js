function fruitOrVegetable(product) {
  switch (product) {
    case 'banana':
    case 'apple':
    case 'kiwi':
    case 'cherry':
    case 'lemon':
    case 'grapes':
      console.log('fruit');
      break;
    case 'tomato':
    case 'pepper':
    case 'carrot':
    case 'cucumber':
      console.log('vegetable');
      break;
    default:
      console.log('unknown');
      break;
  }
}

fruitOrVegetable('banana');
fruitOrVegetable('apple');
fruitOrVegetable('tomato');
fruitOrVegetable('water');
