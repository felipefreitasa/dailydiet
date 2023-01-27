export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        mealsPercentageInTheDiet: number;
      };
      mealRegister: undefined;
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