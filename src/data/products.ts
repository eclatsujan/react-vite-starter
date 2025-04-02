interface Flow {
    Q1: string[];
    Q2: string;
    Q3: string;
    Q4: string;
    Q5: string;
    Q6: string;
    Q7: string;
    Solution: string;
    Family: string;
  }
  
  interface Product {
    id: string;
    title: string;
    description: string;
    url: string;
    image: string;
  }
  
  type Selections = Partial<Record<"Q1" | "Q2" | "Q3" | "Q4" | "Q5" | "Q6" | "Q7", string>>;
  
  const flows: Flow[] = [
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Individual Temperature Control", Q5: "Bypass", Q6: "Bypass", Q7: "Bypass", Solution: "Advance + NEO + Sensors", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Individual Room Zoning", Q5: "Bypass", Q6: "Bypass", Q7: "Touchscreen", Solution: "Advance + NEO", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Individual Room Zoning", Q5: "Bypass", Q6: "Bypass", Q7: "Voice Control Mobile App", Solution: "Advance + NEO", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Individual Room Zoning", Q5: "Bypass", Q6: "Bypass", Q7: "None", Solution: "Advance + LR7", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Day / Night Zoning", Q5: "Bypass", Q6: "Large Outdoor space", Q7: "Touchscreen", Solution: "AIRES + NEO", Family: "AIRES" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Day / Night Zoning", Q5: "Bypass", Q6: "Large Outdoor space", Q7: "Voice Control Mobile App", Solution: "AIRES + NEO", Family: "AIRES" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Day / Night Zoning", Q5: "Bypass", Q6: "Large Outdoor space", Q7: "None", Solution: "AIRES + LR7", Family: "AIRES" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Day / Night Zoning", Q5: "Bypass", Q6: "Small Outdoor space", Q7: "Touchscreen", Solution: "Advance + NEO", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Day / Night Zoning", Q5: "Bypass", Q6: "Small Outdoor space", Q7: "Voice Control Mobile App", Solution: "Advance + NEO", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Day / Night Zoning", Q5: "Bypass", Q6: "Small Outdoor space", Q7: "None", Solution: "Advance + LR7", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Unsure", Q5: "Bypass", Q6: "Small Outdoor space", Q7: "Touchscreen", Solution: "Advance + NEO", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Unsure", Q5: "Bypass", Q6: "Small Outdoor space", Q7: "Voice Control Mobile App", Solution: "Advance + NEO", Family: "Advance" },
    { Q1: ["Ducted", "Unsure"], Q2: "House - Pitched Roof", Q3: "Whole Home", Q4: "Unsure", Q5: "Bypass", Q6: "Small Outdoor space", Q7: "None", Solution: "Advance + LR7", Family: "Advance" },
    // ... (rest of your flows)
    { Q1: ["Split"], Q2: "Bypass", Q3: "Bypass", Q4: "Bypass", Q5: "Bypass", Q6: "Bypass", Q7: "Voice Control Mobile App", Solution: "Serene + Easy Connect", Family: "Serene" },
    { Q1: ["Split"], Q2: "Bypass", Q3: "Bypass", Q4: "Bypass", Q5: "Bypass", Q6: "Bypass", Q7: "None", Solution: "Serene", Family: "Serene" },
  ];
  
  const productsAndSolutions: Product[] = [
    {
      id: 'Advance',
      title: 'Advance',
      description: '__TBC__',
      url: 'https://actronair.com.au/products/residential/ducted-aircon/advance/',
      image: '__TBC__',
    },
    {
      id: 'Advance + NEO + Sensors',
      title: 'Advance + NEO + Sensors',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'Advance + NEO',
      title: 'Advance + NEO',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'Advance + LR7',
      title: 'Advance + LR7',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'AIRES',
      title: 'AIRES',
      description: '__TBC__',
      url: 'https://actronair.com.au/products/residential/ducted-aircon/aires/',
      image: '__TBC__',
    },
    {
      id: 'AIRES + NEO',
      title: 'AIRES + NEO',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'AIRES + LR7',
      title: 'AIRES + LR7',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'MultiElite',
      title: 'MultiElite',
      description: '__TBC__',
      url: 'https://actronair.com.au/products/residential/multielite/',
      image: '__TBC__',
    },
    {
      id: 'MultiElite + Easy Connect',
      title: 'MultiElite + Easy Connect',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'Mini-VRF',
      title: 'Mini-VRF',
      description: '__TBC__',
      url: 'https://actronair.com.au/products/residential/ducted-aircon/residential-minivfr/',
      image: '__TBC__',
    },
    {
      id: 'Serene',
      title: 'Serene',
      description: '__TBC__',
      url: 'https://actronair.com.au/products/residential/wall-mounted-split-system/serene-series-2/',
      image: '__TBC__',
    },
    {
      id: 'Serene + Easy Connect',
      title: 'Serene + Easy Connect',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'UltraSlim',
      title: 'UltraSlim',
      description: '__TBC__',
      url: 'https://actronair.com.au/products/residential/ducted-aircon/ultraslim/',
      image: '__TBC__',
    },
    {
      id: 'UltraSlim + Nexus + Sensors',
      title: 'UltraSlim + Nexus + Sensors',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'UltraSlim + Nexus',
      title: 'UltraSlim + Nexus',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    },
    {
      id: 'UltraSlim + WC-03',
      title: 'UltraSlim + WC-03',
      description: '__TBC__',
      url: '__TBC__',
      image: '__TBC__',
    }
  ];
  
  function getOptions(): Flow[] {
    const options: Flow[] = [];
    for (const flow of flows) {
      let match = true;
      for (const key in selections) {
        const selectionValue = selections[key as keyof Selections];
        if (key === 'Q1') {
          if (selectionValue && flow.Q1.indexOf(selectionValue) === -1) {
            match = false;
            break;
          }
        } else if (selectionValue !== "" && selectionValue != null) {
          const flowValue = flow[key as keyof Flow];
          if (flowValue !== selectionValue) {
            match = false;
            break;
          }
        }
      }
      if (match) {
        options.push(flow);
      }
    }
    return options;
  }
  
  function getFamily(): Product[] {
    const options = getOptions();
    const families: Product[] = [];
    for (const option of options) {
      for (const product of productsAndSolutions) {
        if (product.id === option.Family && !families.find(f => f.id === product.id)) {
          families.push(product);
        }
      }
    }
    return families;
  }
  
  function getSolutions(): Product[] {
    const options = getOptions();
    const solutions: Product[] = [];
    for (const option of options) {
      for (const product of productsAndSolutions) {
        if (product.id === option.Solution && !solutions.find(s => s.id === product.id)) {
          solutions.push(product);
        }
      }
    }
    return solutions;
  }
  
  function questionEnabled(q: number): boolean {
    const options = getOptions();
    for (const option of options) {
      const key = ('Q' + q) as keyof Flow;
      if (option[key] !== 'Bypass') {
        return true;
      }
    }
    return false;
  }
  
  function lastQuestion():  {
    for (let i = 7; i > 0; i--) number{
      if (questionEnabled(i)) {
        return i;
      }
    }
    return 0;
  }
  
  function activeQuestions(): number[] {
    const questions: number[] = [];
    for (let i = 1; i <= 7; i++) {
      if (questionEnabled(i)) {
        questions.push(i);
      }
    }
    return questions;
  }
  
  function countActiveQuestions(): number {
    return activeQuestions().length;
  }
  
  const selections: Selections = { Q1: "Ducted", Q2: "House - Pitched Roof", Q3: "Whole Home" };
  
  console.log('Products to start showing after question 3', getFamily());
  console.log('Products to show after question 7', getSolutions());
  console.log('Active Questions', activeQuestions(), ' - ', countActiveQuestions());
  console.log('Last Question: ', lastQuestion());
  