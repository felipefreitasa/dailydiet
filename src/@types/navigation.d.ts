export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        mealsPercentageInTheDiet: number;
      };
      mealRegister:{
        id?: string;
        isRegister: boolean;
        name?: string;
        description?: string;
        date?: string;
        hour?: string;
        isInTheDiet?: boolean;
      };
      mealDetails:  {
        name: string;
        description: string;
        date: string;
        hour: string;
        isInTheDiet: boolean;
      };
      feedback: {
        isMealInTheDiet: string;
      };
    }
  }
}