export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        mealsPercentageInTheDiet: number;
      };
      mealRegister: undefined;
      mealDetails:  {
        isMealInTheDiet: boolean;
      };
      feedback: {
        isMealInTheDiet: string;
      };
    }
  }
}