const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

const calculateSalesTax = function (salesData, taxRates) {
  const results = {};
  const totalledSales = [];

  for (const saleData of salesData) {
    const saleDataObject = {};
    let salesTotal = 0;
    for (const sale of saleData.sales) {
      salesTotal = salesTotal + sale;
    }
    saleDataObject.name = saleData.name;
    saleDataObject.salesTotal = salesTotal;
    if (saleData.province === "AB") {
      saleDataObject.taxesTotal = salesTotal * 0.05;
    }
    if (saleData.province === "BC") {
      saleDataObject.taxesTotal = salesTotal * 0.12;
    }
    if (saleData.province === "SK") {
      saleDataObject.taxesTotal = salesTotal * 0.1;
    }
    totalledSales.push(saleDataObject);
  }

  for (const sales of totalledSales) {
    if (!results[sales.name]) {
      results[sales.name] = {
        totalSales: sales.salesTotal,
        totalTaxes: sales.taxesTotal,
      };
    } else {
      results[sales.name].totalSales += sales.salesTotal;
      results[sales.name].totalTaxes += sales.taxesTotal;
    }
  }

  return results;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));

// Expected Results:

// {
//     Telus: {
//       totalSales: 1300
//       totalTaxes: 144
//     },
//     Bombardier: {
//       totalSales: 800,
//       totalTaxes: 40
//     }
// }
