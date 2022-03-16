export interface FoodType {
   id: number;
   name: string;
   description: string;
   price: string;
   available: boolean;
   image: string;
}

export interface FoodProps{
   food: FoodType;
   handleEditFood: Function;
   handleDelete: Function;
}